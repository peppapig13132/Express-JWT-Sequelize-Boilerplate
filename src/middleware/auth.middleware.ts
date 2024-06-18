import { Request, Response, NextFunction, RequestHandler } from 'express';
import User from '../model/user.model';
import { AuthRequest } from '../interfaces/interfaces';
import dotenv from 'dotenv';
import jwt, { JwtPayload } from 'jsonwebtoken';

const env = process.env.NODE_ENV || 'development';
dotenv.config({ path: `.env.${env}` });

export const checkDuplicatedEmail: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  const u = req.body;

  const user = await User.findOne({
    where: {
      email: u.email,
    },
  });

  if(user) {
    return res.json({
      ok: false,
      msg: 'email already taken',
    });
  }

  next();
};

export const authenticate: RequestHandler = async (req: AuthRequest, res: Response, next: NextFunction) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  const secret = process.env.SECRETKEY || '';

  if(!token) {
    return res.json({
      ok: false,
      msg: 'no token provided',
    });
  }

  jwt.verify(
    token,
    secret,
    async (error, decoded) => {
      if(error) {
        res.json({
          ok: false,
          msg: 'invalid token',
        });
      }

      const userId = (decoded as JwtPayload).id;
      const email = (decoded as JwtPayload).email;

      const user = await User.findOne({
        where: {
          id: userId,
          email: email,
        }
      });

      if(user) {
        req.user = {
          id: user.dataValues.id,
          email: user.dataValues.email,
        }

        next();
      } else {
        return res.json({
          ok: false,
          msg: 'email not found',
        });
      }
    }
  )
};
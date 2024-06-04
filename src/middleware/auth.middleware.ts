import { Request, Response, NextFunction, RequestHandler } from 'express';
import User from '../model/user.model';

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
}
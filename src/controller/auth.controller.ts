import { Request, Response, RequestHandler } from 'express';
import asyncHandler from 'express-async-handler';
import User from '../model/user.model';
import bcrypt from 'bcrypt';

export const signup: RequestHandler = asyncHandler(async (req: Request, res: Response) => {
  const u = req.body;

  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(u.password, saltRounds);

  const user = await User.create({
    email: u.email,
    password: passwordHash,
  })

  res.json({
    ok: true,
    user: {
      user_id: user.dataValues.id,
    },
  });
});
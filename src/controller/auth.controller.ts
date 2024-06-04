import { Request, Response, RequestHandler } from 'express';
import asyncHandler from 'express-async-handler';
import User from '../model/user.model';

export const signup: RequestHandler = asyncHandler(async (req: Request, res: Response) => {
  const u = req.body;

  const user = await User.create({
    email: u.email,
    password: u.password,
  })

  res.json({
    ok: true,
    user: user,
  });
});
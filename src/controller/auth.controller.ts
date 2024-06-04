import { Request, Response, RequestHandler } from 'express';
import asyncHandler from 'express-async-handler';

export const signup: RequestHandler = asyncHandler(async (req: Request, res: Response) => {
  const u = req.body;

  res.json({
    ok: true,
    user: u,
  });
});
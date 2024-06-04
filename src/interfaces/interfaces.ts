import { Request } from 'express';

interface AuthUser {
  id: number;
  email: string;
}

export interface AuthRequest extends Request {
  user?: AuthUser;
}
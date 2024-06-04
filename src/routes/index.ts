import { Request, Response, Application } from "express";
import authRouter from "./auth.route";
import { authenticate } from "../middleware/auth.middleware";

export default (app: Application) => {
  app.get("/", (req: Request, res: Response) => {
    res.send("Express.js server is running!");
  });

  app.use('/api/auth', authRouter);

  app.get('/api/protected', authenticate, (req: Request, res: Response) => {
    res.send("This is protected route. You have right token!");
  });

  app.use("*", (req: Request, res: Response) => {
    res.status(404).send('Bad request!');
  });
}
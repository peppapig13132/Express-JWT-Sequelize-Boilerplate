import { Request, Response } from "express";
import authRouter from "./auth.route";

export default (app: any) => {
  app.get("/", (req: Request, res: Response) => {
    res.send("Express.js server is running!");
  });

  app.use('/api/auth', authRouter);

  app.use("*", function (req: Request, res: Response) {
    res.status(404).send('Bad request!');
  });
}
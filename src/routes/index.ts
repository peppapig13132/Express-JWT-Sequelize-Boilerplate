import { Request, Response, Application } from "express";
import authRouter from "./auth.route";

export default (app: Application) => {
  app.get("/", (req: Request, res: Response) => {
    res.send("Express.js server is running!");
  });

  app.use('/api/auth', authRouter);

  app.use("*", function (req: Request, res: Response) {
    res.status(404).send('Bad request!');
  });
}
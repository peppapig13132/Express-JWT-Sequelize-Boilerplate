import express, {Request, Response} from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();

const port = process.env.APP_PORT || 8000;

app.use(cors());
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Express.js server is running!');
});
app.use("*", function (req: Request, res: Response) {
  res.status(404).send('Bad request!');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

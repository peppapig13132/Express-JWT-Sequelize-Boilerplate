import { Router } from 'express';
import { signup } from '../controller/auth.controller';

const router: Router = Router();

router.post('/signup', signup);

export default router;
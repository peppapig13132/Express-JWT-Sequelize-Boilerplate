import { Router } from 'express';
import { signup } from '../controller/auth.controller';
import { checkDuplicatedEmail } from '../middleware/auth.middleware';

const router: Router = Router();

router.post('/signup', checkDuplicatedEmail, signup);

export default router;
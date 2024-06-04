import { Router } from 'express';
import { login, signup } from '../controller/auth.controller';
import { checkDuplicatedEmail } from '../middleware/auth.middleware';

const router: Router = Router();

router.post('/signup', checkDuplicatedEmail, signup);
router.post('/login', login);

export default router;
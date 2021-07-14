import { Router } from 'express';
import '../configs/passport';
import passport from 'passport';
import {
    generateLandingPageInfo
} from '../controllers/personaController';

const userRouter = Router();

userRouter.use(passport.initialize());

userRouter.get('/persona', generateLandingPageInfo);

export default userRouter;

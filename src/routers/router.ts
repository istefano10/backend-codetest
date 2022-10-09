import { UserController } from '../controllers/user.controller';

const userController = new UserController();

import express, { Request, Response, NextFunction } from 'express';
const router = express.Router();

router.post('/login', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { username, password } = req.body;
        const response = await userController.login({ username, password });
        res.send(response);
    } catch (error) {
        console.log(error);
        next(error);
    }
});

router.post('/user', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const response = await userController.createUser(req.body);
        res.send(response);
    } catch (error) {
        console.log(error);
        next(error);
    }
});

export default router;
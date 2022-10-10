import { UserController } from '../controllers/user.controller';
import { AssetController } from '../controllers/asset.controller';

const userController = new UserController();
const assetController = new AssetController();

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

router.get('/asset', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { accountId }: any = req.query;
        const response = await assetController.getAssetsByaccountId(accountId);
        console.log(response)
        res.send(response);
    } catch (error) {
        console.log(error);
        next(error);
    }
});

export default router;
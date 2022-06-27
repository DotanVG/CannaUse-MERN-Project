import express from 'express';

import * as userController from '../controllers/user.controller.js';

import userAuth from '../middlewares/user.auth.js';

const router = new express.Router();

router.post('/users/signup', userController.createUser);

router.post('/users/login', userController.loginUser);

router.post('/users/logout', userAuth, userController.logoutUser);

export default router;

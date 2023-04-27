import express from 'express';
import { loginUser, authorized } from '../controllers/loginControlHandler.js';

export const loginRouter = express.Router();
loginRouter.route("/").get(authorized).post(loginUser);
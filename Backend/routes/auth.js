import express from 'express';
import { ISauthorized } from '../controllers/authControllerHandler.js';

export const authRouter = express.Router();
authRouter.route("/").post(ISauthorized);
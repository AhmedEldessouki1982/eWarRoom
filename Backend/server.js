import express, { json } from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
import connect from './db/connect.js';
import { usersRouter } from './routes/users.js';
import { loginRouter } from './routes/login.js';
import { authRouter } from './routes/auth.js';
import cookieParser from 'cookie-parser';


dotenv.config();

const app = new express();

let port = process.env.PORT;
let connectionString = process.env.MONGO;

//middlewares
app.use (
    cors()
)
app.use (
    express.json()
)
//middleware for cookie parser
app.use(cookieParser());

//middleware for users api
app.use (
    "/api/v1/users",
    usersRouter
);

//middleware for login api
app.use (
    "/api/v1/login",
    loginRouter
)

//middleware for auth api
app.use (
    "/api/v1/serviceAuth",
    authRouter
)


let start = async () => {
    try {
        await connect (connectionString);
        app.listen(
            port, 
            console.log(
                `Server Up and running listening to port ${port}...OK`
            )
        )
    } catch (error) {
        console.log(error);
    }
}
start();
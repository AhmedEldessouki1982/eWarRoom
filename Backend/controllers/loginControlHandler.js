//import model schema
import {theSchema} from '../models/usersSchema.js';
import { createToken, maxAge } from '../jwt/jwt.js';
import jwt from 'jsonwebtoken';

//post req to bring the spesific user from db based on his email
export const loginUser = async (req,res) => {
    let {email, password} = req.body;
    try {
        let testedUser = await theSchema.Login(email, password);
        const token = createToken(testedUser._id);
        res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 }); //cookie-parser consider the time in ms
        res.status(200).json({email:testedUser.email, username:testedUser.username, accessToken: token});
    } catch (error) {
        res.status(401).json({msg:"Wrong email or invalid password"});
    }
}

//get req to check the user is authrized
export const authorized = async (req, res) => {
    let token = req.cookies.jwt;
    try {
        jwt.verify(
            token,
            "Pw4psp@aweer",
            (error, decodedToken) => {
                if (error) {
                    res.status(403).json({isUser: false});
                }else {
                    res.status(200).json({isUser: true, ...decodedToken})
                }
            }
        )
    } catch {
        res.status(404).json({isUser: false})
        console.log("error");
    }
    
}
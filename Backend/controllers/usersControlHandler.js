//import model schema
import {theSchema} from '../models/usersSchema.js';
//import error handler
import errorHandller from '../errors/errorHandller.js';
import { createToken, maxAge } from '../jwt/jwt.js';

//get req
export const getAllUsers = async (req,res) => {
    try {
        let users = await theSchema.find({});
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({msg: error})
    }
}
//post req, create new user 
export const createUser = async (req,res) => {
    try {
        let user = await theSchema.create(req.body);
        const token = createToken(user._id);
        res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 }); //cookie-parser consider the time in ms
        res.status(200).json({user: user._id});
    } catch (error) {
        let catchedError = errorHandller (error);
        error.code === 11000 ? res.status(501).send("User already exists, duplicate email or username not allowed"):
        res.status(500).json({catchedError});
    }
}
//get req "find by id"
export const getUser= async (req,res) => {
    try {
        let user = await theSchema.findOne({_id: req.params.id})
        res.status(200).json({user})
    } catch (error) {
        res.status(500).json({msg: error})
    }
}
//delete req "find and delete one by id"
export const deleteUser = async (req,res) => {
    try {
        let user = await theSchema.findOneAndDelete({_id: req.params.id})
        res.status(200).json({user})
    } catch (error) {
        res.status(500).json({msg: error})
    }
}
//delete req "delete all data"
export const deleteAllUsers = async (req,res) => {
    try {
        let users = await theSchema.deleteOne({})
        res.status(200).json({users})
    } catch (error) {
        res.status(500).json({msg: error})
    }
}
//patch req "update data found by id"
export const updateUser = async (req,res) => {
    try {
        let user = await theSchema.findOneAndUpdate(
            {_id: req.params.id},
            req.body,
            {
                new: true,
                Validators: true
            }
            )
        res.status(200).json({user})
    } catch (error) {
        res.status(500).json({msg: error})
    }
}
//importing jwt
import jwt from 'jsonwebtoken';
//create token
// create json web token
export const maxAge = 3 * 24 * 60 * 60; //jwt consider the time in seconds.
export const createToken = (id) => {
  return jwt.sign({ id }, 'Pw4psp@aweer', {
    expiresIn: maxAge
  });
};
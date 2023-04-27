//post req to check the user is authrized
import jwt from 'jsonwebtoken';

export const ISauthorized = async (req, res) => {
    let token = req.body.accessToken;
    // console.log(token);
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
        console.log("error or token not correct");
    }
    
}
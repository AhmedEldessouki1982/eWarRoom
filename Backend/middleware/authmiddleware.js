import jwt from 'jsonwebtoken';

export const requireAthuntication = (req, res, next) => {
    let token = req.cookies.jwt;
    if (token) {
        jwt.verify(
            token,
            "Pw4psp@aweer",
            (error, decodedToken) => {
                if (error) {
                    res.redirect("/login")
                    console.log("error inside authnitaction");
                }else {
                    console.log(decodedToken);
                    next();
                }
            }
        )

    } else {
        return {isUser: "not authrized"}
    }
}
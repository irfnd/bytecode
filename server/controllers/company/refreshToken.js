require("dotenv").config();
const { Companies } = require("../../models");
const jwt = require('jsonwebtoken');


exports.refreshToken = async (req, res, next)=>{
    try {
        const refreshToken = req.cookies.refreshToken;
        if (!refreshToken) return response.sendStatus(401);
        const company = await Companies.findAll({
            where:{
                refresh_token: refreshToken
            }
        });
        console.log(company);
        if(!company) return res.sendStatus(403);
        jwt.verify(refreshToken, `${process.env.REFRESH_TOKEN_SECRET}`, (err, decoded) => {
            if(err) return res.sendStatus(403);
            const userId = company[0].id;
            const name = company[0].name;
            const email = company[0].email;
            const accessToken = jwt.sign({userId, name, email}, `${process.env.ACCESS_TOKEN_SECRET}`,{
                expiresIn: '15s'
            });
            res.json({ accessToken });
        });
    } catch (error) {
        next(error);
    }
}
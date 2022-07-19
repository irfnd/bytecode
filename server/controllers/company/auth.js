require("dotenv").config();
const { Companies } = require("../../models");
const jwt = require("jsonwebtoken");
const { hashSync } = require("bcrypt");
const { compareSync } = require("bcrypt");

exports.Register = async (req, res, next) => {
  const { name, email, companyName, position, phoneNumber, password, confPassword } = req.body;
  if (password !== confPassword) return res.status(400).json({ msg: "Password and Confirm Password do not match" });
  try {
    await Companies.create({
      name: name,
      email: email,
      companyName: companyName,
      position: position,
      phoneNumber: phoneNumber,
      password: hashSync(req.body.password, 10),
    });
    res.json({ msg: "Register succes" });
  } catch (error) {
    next(error);
  }
};

exports.Login = async (req, res, next) => {
  try {
    const UserCompany = await Companies.findAll({
      where: {
        email: req.body.email,
      },
    });
    if (UserCompany[0].email) {
      const match = await compareSync(req.body.password, UserCompany[0].password);
      if (!match) {
        return res.status(400).json({ message: "Password mismatch" });
      } else {
        const userId = UserCompany[0].id;
        const name = UserCompany[0].name;
        const email = UserCompany[0].email;
        const accessToken = jwt.sign({ userId, name, email }, process.env.ACCESS_TOKEN_KEY, {
          expiresIn: "20s",
        });
        const refreshToken = jwt.sign({ userId, name, email }, process.env.REFRESH_TOKEN_SECRET, {
          expiresIn: "1d",
        });
        await Companies.update(
          { refresh_token: refreshToken },
          {
            where: {
              id: userId,
            },
          }
        );
        res.cookie("refreshToken", refreshToken, {
          httpOnly: true,
          maxAge: 24 * 60 * 60 * 1000,
        });
        res.json({ accessToken });
      }
    } else {
      res.status(500).json({ error: "Invalid email" });
    }
  } catch (error) {
    next(error);
  }
};

exports.Logout = async (req, res, next )=>{
  const refreshToken = req.cookies.refreshToken;
  if(!refreshToken) return res.sendStatus(204);
    const company = await Companies.findAll({
        where:{
            refresh_token: refreshToken
        }
    });
    if(!company[0]) return res.sendStatus(204);
    const userId = company[0].id;
    await Companies.update({refresh_token: null},{
        where:{
            id: userId
        }
    });
    res.clearCookie('refreshToken');
    return res.sendStatus(200);
}

const { Users, UserProfile, CompanyProfile, Companies } = require("../models");

const postProfilePhoto = async (req, res, next) => {
  const { id: userId, type } = req.decoded;
  try {
    const checkUser = await Users.findByPk(userId);
    if (!checkUser) throw new Error("User not found!", { cause: "NOT_FOUND" });
    if (type !== "company") {
      const results = await UserProfile.update({ photo: req?.file?.publicUrl }, { where: { userId }, returning: true });
      res.json(results[1][0]);
    } else {
      const results = await CompanyProfile.update({ photo: req?.file?.publicUrl }, { where: { userId }, returning: true });
      await Companies.update({ photo: results[1][0].photo }, { where: { companyProfileId: results[1][0].id } });
      res.json(results[1][0]);
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  postProfilePhoto,
};

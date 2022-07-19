const { hashSync } = require("bcrypt");
const { Companies } = require("../../models");


exports.insert = async (req, res, next) => {
    try {
        const newCompany = { ...req.body, password: hashSync(req.body.password, 10) };
        const results = await Companies.create(newCompany);
        res.json(results);
      } catch (err) {
        next(err);
      }
  };

exports.findAll = async (req, res, next) => {
    try {
        const results = await Companies.findAll();
    res.json(results); 
    } catch (error) {
        next(error);
    }
   
  };

exports.findId = async (req, res, next) => {
    const { id } = req.params;
    try {
      const results = await Companies.findByPk(id);
      if (!results) throw new Error("Companies not found!");
      res.json(results);
    } catch (err) {
      next(err);
    }
  };

exports.update = async (req, res, next) => {
    const { id } = req.params;
  try {
    const updateCompany = req.body.password ? { ...req.body, password: hashSync(req.body.password, 10) } : { ...req.body };
    const results = await Companies.update(updateCompany, { where: { id }, returning: true });
    if (results[0] < 1) throw new Error(`Companies with id ${id} not found!`);
    res.json(results[1][0]);
  } catch (err) {
    next(err);
  }
}

exports.delete = async (req, res, next) => {
    const { id } = req.params;
    try {
      const results = await Companies.destroy({ where: { id } });
      res.json(results);
    } catch (err) {
      next(err);
    }
  };
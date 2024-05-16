const List = require("../model/contact");
const contactList = require("../services/contactList");

exports.getAll = async (req, res) => {
  try {
    let result = await List.find();
    res.send(result);
  } catch (error) {
    res.status(500).send("List added failed !");
    console.error(error) || console.log("List added failed");
  }
};
exports.add = async (req, res) => {
  try {
    let result = await contactList.add(req.body);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send("List added failed !");
    console.error(error) || console.log("List added failed");
  }
};
exports.update = async (req, res) => {
  let id = req.params.id;
  let query = req.body;
  try {
    let result = await contactList.update(id,query);
    res.status(200).send("List Updated successfully");
  } catch (error) {
    res.status(500).send("List Updated failed !");
    console.error(error) || console.log("List Updated failed");
  }
};

exports.getContact = async (req, res) => {
  let id = req.params.id;
  try {
    let result = await contactList.getContact(id);
    res.send(result);
  } catch (error) {
    console.error(error);
  }
};

exports.delete = async (req, res) => {
  let id = req.params.id;
  try {
    let result = await contactList.delete(id);
    res.send(result);
  } catch (error) {
    console.error(error);
  }
};

exports.pagination = async (req, res) => {
  let { page, list, search } = req.body;
  try {
    let result = await contactList.pagination(page, list, search);
    res.send(result);
  } catch (error) {
    console.error(error);
  }
};

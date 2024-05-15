const List = require("../model/contact");

exports.add = async (query) => {
  try {
    const list = new List(query);
    list.save();

    return list;
  } catch (error) {
    console.error(error);
  }
};

exports.update = async (id,query) => {
  try {
    let result = await List.findByIdAndUpdate(id,query);
    return result;
  } catch (error) {
    console.error(error);
  }
};

exports.delete = async (id) => {
  try {
    const result = await List.findByIdAndDelete(id);
    return result;
  } catch (error) {
    console.error(error);
  }
};

exports.getContact = async (id) => {
  try {
    const result = await List.findById(id);
    return result;
  } catch (error) {
    console.log('error-  in catch');
    console.error(error);
  }
};

exports.pagination = async () => {
  try {
    const result = await List.find();

    return result;
  } catch (error) {
    console.error(error);
  }
};

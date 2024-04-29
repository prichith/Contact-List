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

exports.getAll = async () => {
  try {
    const result = await List.find();
    return result;
  } catch (error) {
    console.error(error);
  }
};

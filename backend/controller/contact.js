const contactList = require("../services/contactList");

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
    let result = await contactList.update(id, query);
    res.status(200).send("List Updated successfully");
  } catch (error) {
    res.status(500).send("List Updated failed !");
    console.error(error) || console.log("List Updated failed");
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
  let page = parseInt(req.params.page);
  let limit = parseInt(req.params.limit);
  let text = req.params.search;
  let startIndex = (page - 1) * limit;
  let query = {};

  if (text !== "undefined") {
    query = {
      $or: [
        { name: { $regex: text, $options: "i" } },
        { email: { $regex: text, $options: "i" } },
      ],
    };
  }

  try {
    let result = await contactList.pagination(startIndex, limit, query);
    if (result) {
      res.json({
        data: result.finalData[0],
        totalEmployee: result.totalCount,
        firstIndex: startIndex,
      });
    } else {
      console.log("Fetching failed");
      res.status(500).json({ error: "Failed to fetch data" });
    }
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

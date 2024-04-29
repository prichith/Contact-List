// const List = require('../model/contact');
const contactList = require('../services/contactList');

exports.add = async(req,res) => {
    try {
        let result = await contactList.add(req.body);
        res.status(200).send('List added successfully')
      } catch (error) {
        res.status(500).send('List added failed !')
        console.error(error) || console.log("List added failed");
      }
}

exports.update = async (req,res) => {
    try {
        let result = await contactList.update(req.body._id);
        res.send(result);
    } catch (error) {
        console.error(error);
    }
}
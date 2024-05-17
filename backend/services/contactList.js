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
    console.error(error);
  }
};

// exports.pagination = async () => {
//   try {
//     const result = await List.find();

//     return result;
//   } catch (error) {
//     console.error(error);
//   }
// };


exports.pagination = async (startIndex, limit, query) => {
  console.log(' limit=',limit,' startIndex= ',startIndex,'query=',query);

  let aggregationPipeline = [
      { $match: query },
      {
          $facet: {
              totalCount: [{ $group: { _id: null, count: { $sum: 1 } } }],
              slicedData: [
                  { $skip: startIndex },
                  { $limit: limit },
                  { $group: { _id: null, data: { $push: "$$ROOT" } } }
              ]
          }
      },
      {
          $project: {
              totalCount: { $arrayElemAt: ["$totalCount.count", 0] },
              slicedData: "$slicedData.data"
          }
      }
  ];
  
  let result = await List.aggregate(aggregationPipeline);
  console.log(result,'==result after aggregation');
  console.log(result[0].slicedData,'==slicedData');
  if (result.length > 0) return { totalCount: result[0].totalCount, finalData: result[0].slicedData };
}
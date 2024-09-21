const { MongoClient } = require("mongodb");

let connectionData;

module.exports = {
  connectToDb: (cb) => {
    MongoClient.connect("mongodb://localhost:27017/FlowerShop").then(
      (value) => {
        connectionData = value.db();
        return cb();
      }
    );
  },
  getData: () => connectionData,
};

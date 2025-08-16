const mongoose = require("mongoose");

const connectToDatabase = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("Database Connected");
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = connectToDatabase;

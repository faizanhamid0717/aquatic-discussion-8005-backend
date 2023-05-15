const { default: mongoose } = require("mongoose");
require("dotenv").config();

const server = async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URL}`);
    console.log("Databse is Connected");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = server;


// git remote add origin https://github.com/faizanhamid0717/aquatic-discussion-8005-backend.git
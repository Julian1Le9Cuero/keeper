const mongoose = require("mongoose");

const connectToDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useCreateIndex: true,
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useFindAndModify: false,
    });

    console.log("DB connected.");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = connectToDb;

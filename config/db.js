const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect("mongodb+srv://cs:Oknbvc14@cluster0.r67htau.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
  });

  console.log("MongoDB Connected");
};

module.exports = connectDB;

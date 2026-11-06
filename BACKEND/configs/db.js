import mongoose from "mongoose";

const connect_db = () => {
  try {
    const connnect = mongoose.connect(process.env.MONGODB_URI);

    console.log("mongodb connection successfully completed.");
  } catch (error) {
    console.log("mongodb connection failed.", error.message);
  }
};

export default connect_db;

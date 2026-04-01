import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const connectionmongodb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("mongo db connection is connected");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};
export default connectionmongodb;

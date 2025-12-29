import mongoose from "mongoose";
import env from "dotenv";

env.config();
const connectDb = () => {
  mongoose
    .connect(process.env.MONGO_URL, {})
    .then(() => {
      console.log("Database connected successfully");
    })
    .catch((err) => {
      console.log("Database connection failed", err);
    });
};
export default connectDb;

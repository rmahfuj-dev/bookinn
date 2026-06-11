import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async (): Promise<void> => {
  const uri = process.env.URI;

  if (!uri) {
    throw new Error("MONGO_URI is not defined in .env file");
  }

  await mongoose.connect(uri);
  console.log("🔥 DB CONNECTED:", mongoose.connection.name);

  console.log("MongoDB connected successfully");
};

export default connectDB;

import mongoose from "mongoose";

const connection = { isConnected: null };

export const connectToDB = async () => {
  if (connection.isConnected) {
    console.log("Already connected to MongoDB!");
    return;
  }

  if (!process.env.MONGODB_URI) {
    throw new Error("MONGODB_URI is not defined in the environment variables");
  }

  try {
    const db = await mongoose.connect(process.env.MONGODB_URI);

    connection.isConnected = db.connections[0].readyState;
    console.log("Connected to MongoDB!");
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error.message);
    throw new Error(error.message);
  }
};

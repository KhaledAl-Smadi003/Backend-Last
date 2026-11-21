//For database connection
//this file makes sure that database is connected with server.
//the first file.

import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    //the correct code
    await mongoose.connect(process.env.CONNECTION_STRING);
    console.log("mongo is connected");
  } catch (error) {
    console.log("mongo is not connected", error);
    process.exit(1);
  }
};

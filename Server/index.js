// the imports
import dns from "node:dns";
import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { connectDB } from "./src/config/db.js";
import categoryRoutes from "./src/routes/categories.Routes.js";
dns.setServers(["8.8.8.8", "1.1.1.1"]);
//the dotenv config
dotenv.config();

//defin the server
const app = express();
connectDB();
//security - on api headers

//first Api
app.get("/health", (req, res) => {
  res.send("the server is healyhy");
});

//use Api
app.use("/api", categoryRoutes);

const port = process.env.PORT; // read from env file
//start server
app.listen(port, () => {
  console.log("The server is connection  on port :", port);
});

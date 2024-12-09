import mongoose from "mongoose";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import {app} from "./app.js"

dotenv.config({
  path : './env'
})




connectDB()
.then(() => {
  app.listen(process.env.PORT || 8000, () => {
    console.log("server is running on port :", process.env.PORT);
  })
})
.catch((err) => {
  console.log(`mongoDB connection failed :- ${err}`);
}
)




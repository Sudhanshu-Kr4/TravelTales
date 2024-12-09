import express from "express";
import cors from "cors";
import router from "./routes/posts.js";

const app = express();

app.use(cors());
app.use(express.json({limit:"30mb", extended:true}));
app.use(express.urlencoded({limit:"30mb", extended:true}));
app.use('/api/v1/user', router);
export { app };
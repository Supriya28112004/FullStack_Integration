import mongoose from "mongoose";
import {config} from "dotenv";
config();
//import User from "./models/user.model.js";
import express from "express";
import logger from './middleware/logger.js';
import errorHandler from './middleware/errorhandler.js';
import userRoutes from "./routes/user.routes.js";
import cors from "cors";
import swaggerUi from 'swagger-ui-express';
import { swaggerDocs } from './swagger.js';



const app=express();

// Swagger Docs
swaggerDocs(app);
app.use(cors());
app.use(express.json());
app.use(logger);
const PORT=process.env.PORT||4000;
console.log(process.env.PORT);
console.log(process.env.DATABASE_URL);
app.get("/test", (req, res) => {
  res.send("Test route is working");
});

mongoose.connect(process.env.DATABASE_URL)
      .then(()=>console.log("successfully connected"))
      .catch(err=>console.error("connection failed",err));


app.get("/",(req,res)=>
{
    res.status(200).json("Welcome to cheat buster");

});


app.use("/api",userRoutes)



app.use(errorHandler);

app.listen(PORT,()=>
{
    console.log(`Port is listening on ${PORT}`);
});
      



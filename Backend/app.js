import express from "express";
import dotenv from "dotenv";
import cors from "cors";


//middleware import
import errorHandlerMiddleware from "./Middleware/error-handler.js";
import notfound from "./Middleware/not-found.js";
import connect from './DB/connect.js'
import auth from './Middleware/authmiddlware.js'

//import routes
import authRouter from "./Routes/auth.js";
import jobRouter from "./Routes/job.js";


//start express
const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());


//all routes 
app.use( '/api/v1/auth' , authRouter)
app.use('/api/v1/job' , auth ,  jobRouter)
app.use(errorHandlerMiddleware);
app.use(notfound);

//port
const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connect(process.env.CONNECTION_STRING)
    app.listen(port, () =>
      console.log(`Server is listening on port http://localhost:${port}...`)
    );
  } catch (error) {
    console.log(error.message);
  }
};

start();

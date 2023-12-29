import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from './routers/user.router.js'
import authRouter from './routers/auth.route.js'
dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("mongodb is connected!!");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();
app.use(express.json());
const port = process.env.port || 5000;
app.listen(port, () => {
  console.log(`node server is stared at port: ${port}`);
});

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);

import express from 'express';
import dotenv from 'dotenv';
import enviroments from '../config/environments.js';
import userRouter from './routers/user.router.js';
import connectToMongoDB from './databases/mongoose.db.js';
import cors from 'cors';

dotenv.config();

const app = express();

app.use(express.json());

app.use(cors());

app.use(userRouter);


const PORT = enviroments.PORT;
app.listen(PORT, async () => {
  console.log(`Server is running on PORT: ${PORT}`);

  await connectToMongoDB();
});

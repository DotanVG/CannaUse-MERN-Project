import express from 'express';
import dotenv from 'dotenv';
import enviroments from '../config/environments.js';

import connectToMongoDB from './databases/mongoose.db.js';

dotenv.config();

const app = express();

app.use(express.json());


const PORT = enviroments.PORT;
app.listen(PORT, async () => {
    console.log(`Server is running on PORT: ${PORT}`);

    await connectToMongoDB();
});
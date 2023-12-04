import routes from './routes.js';
import express from 'express';
import dotenv from 'dotenv'; 
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

app.use(routes);


app.listen(process.env.PORT, () => {
    console.log('Server started at http://localhost:3000');
})
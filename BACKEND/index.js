import 'dotenv/config'
import express from 'express';
import connect_db from './configs/db.js';
import cookieParser from 'cookie-parser';
import cors from 'cors'


const app = express()
const port = process.env.PORT || 4000;

// middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: 'http://localhost:5173/',
  credentials: true,
}));

// mongodb connection
connect_db();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
import 'dotenv/config'
import express from 'express';
import connect_db from './configs/db.js';
const app = express()
const port = process.env.PORT || 4000;

// mongodb connection
connect_db();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
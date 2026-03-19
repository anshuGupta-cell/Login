import express from "express"
import cors from 'cors'
import { getDetails, insertDetails } from "./login.js"
import dotenv from "dotenv";

dotenv.config();
const app = express()
const port = 3000
app.use(cors())
app.use(express.json())

app.set("trust_proxy", true);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/login", getDetails);
app.post("/login", insertDetails);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
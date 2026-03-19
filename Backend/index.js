import express from "express"
import { getDetails } from "./login.js"

const app = express()
const port = 3000

app.set("trust_proxy", true);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/login", getDetails);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
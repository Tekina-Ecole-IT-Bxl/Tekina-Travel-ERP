const express = require("express")
const morgan = require("morgan")
const dotenv = require("dotenv")
const routes = require("./routes/index.js")

dotenv.config()

const app = express()
const port = process.env.PORT || 3000;

app.use(morgan('dev'))
app.use(express.json())

app.use("/api", routes)

app.get("/", (_, res) => res.send("ERP API is fucking working 🖕"))

app.listen(port, ()=> console.log(`ERP-API up on http://localhost:${port}`))

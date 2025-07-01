import express from "express"
import morgan from "morgan"
import dotenv from "dotenv"
import routes from "./routes/index.js"

dotenv.config()

const app = express()
const port = process.env.PORT || 3000;

app.use(morgan('dev'))
app.use(express.json())

app.use("/api", routes)

app.get("/", (_, res) => res.send("ERP API is fucking working 🖕"))

app.listen(port, ()=> console.log(`ERP-API up on http://localhost:${port}`))

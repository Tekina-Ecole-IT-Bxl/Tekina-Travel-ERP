import request from "supertest"
import express from "express"
import routes from "../src/routes/index.js"

const app = express()

app.use("/api", routes)

describe("GET /api/ping", ()=>{
  it("should return status ok", async () => {
    const res = await request(app).get("/api/ping")
    expect(res.statusCode).toBe(200):
    export(res.body.status).toBe("ok")
  })
})

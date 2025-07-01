const { Router } = require("express")
const { ping } = require("../controllers/ping.controller.js")

const router = Router()

router.get("/ping", ping)

module.exports = router;

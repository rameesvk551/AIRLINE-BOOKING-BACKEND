const express =require("express")
const { AiroplaneController } = require("../../controllers")
const { AiroplaneMiddleware } = require("../../middlewares")
AiroplaneController
const router= express.Router()
router.post("/",AiroplaneMiddleware.validateCreateRequest
    ,AiroplaneController.createAiroplane)
    router.get("/",AiroplaneController.getAiroplanes)
    router.get("/airoplane/:id",AiroplaneController.getAiroplane)


module.exports  = router
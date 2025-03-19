const express = require('express');

const { InfoController } = require('../../controllers');
const airoplaneRoutes=require ("./airoplane-route")
const router = express.Router();
router.use("/airoplane",airoplaneRoutes)

router.get('/info', InfoController.info);

module.exports = router;
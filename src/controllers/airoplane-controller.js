const { StatusCodes } = require("http-status-codes");
const { AiroplaneService } = require("../services");
const { SuccessResponse, ErrorResponse } = require("../utils/common");

async function createAiroplane(req, res) {
  try {
    const airoplane = await AiroplaneService.createAiroplane({
      modelNumber: req.body.modelNumber,
      capacity: req.body.capacity,
    });
    SuccessResponse.data = airoplane;
    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.message = "something went wrong in create airoplane   ";
    ErrorResponse.error = error;
    return res.status(error.StatusCode).json(ErrorResponse);
  }
}

async function getAiroplanes(req,res) {
    
    try {
        const airoplanes= await AiroplaneService.getAiroplanes()
        SuccessResponse.data = airoplanes;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.message = "something went wrong in getting all airoplanes airoplane   ";
    ErrorResponse.error = error;
    return res.status(error.StatusCode).json(ErrorResponse);
        
    }
    
}
async function getAiroplane(req,res) {
    
    try {
        const airoplane= await AiroplaneService.getAiroplane(req.params.id)
        SuccessResponse.data = airoplane;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.message = "something went wrong in getting  airoplane by id    ";
    ErrorResponse.error = error;
    return res.status(error.StatusCode).json(ErrorResponse);
        
    }
    
}

module.exports = { createAiroplane,getAiroplanes,getAiroplane };

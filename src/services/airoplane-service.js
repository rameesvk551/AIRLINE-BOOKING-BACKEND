const { StatusCodes } = require("http-status-codes")
const { AiroplaneRepository } = require("../repositories")
const AppError = require("../utils/errors/app-error")


 const airoplaneRepository= new AiroplaneRepository()


 const createAiroplane=async(data)=>{
   try {
    const airoplane =await airoplaneRepository.create(data)
   } catch (error) {
    if(error.name === "SuquelizeValidationError"){
        let explanation=[]
        error.errors.forEach(err => {
            explanation.push(err.message)
            
        });
                throw new AppError("Cannot create an airoplane object ",StatusCodes.INTERNAL_SERVER_ERROR)
    }
    throw error
   }

 }
 const getAiroplanes=async()=>{
    try {
     const airoplanes =await airoplaneRepository.getAll()
     return airoplanes
    } catch (error) {
        throw new AppError("Cannot  ",StatusCodes.INTERNAL_SERVER_ERROR)
    
    }
 
  }
  const getAiroplane=async(id)=>{
    try {
     const airoplane =await airoplaneRepository.get()

     return airoplane
    } catch (error) {
        if(error.statusCode=== StatusCodes.NOT_FOUND){
            throw new AppError("The airoplane  you requested is not found",error.statusCode)
        }
        throw new AppError ("Cannot fined an airplane with id  ",StatusCodes.INTERNAL_SERVER_ERROR)
    
    }
 
  }


 module.exports ={createAiroplane,getAiroplanes,getAiroplane}
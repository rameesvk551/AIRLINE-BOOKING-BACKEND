const CrudRepository= require("./crud-repository");
const {Airoplane}=require("../models/airoplane")

class AiroplaneRepository extends CrudRepository{
    constructor(){
        super(Airoplane)
    }
   
}
module.exports=  AiroplaneRepository
const { where } = require("sequelize")
const {Logger}=require("../config")
const AppError = require("../utils/errors/app-error")
const { StatusCodes } = require("http-status-codes")

class CrudRepository{
    constructor(model){
 this.model=model
    }


    async create(data){
        try {
            
            const response=await this.model.create(data)
            return response
        } catch (error) {
            Logger.error("something went wrong in create Crud Repo ")
            throw error
            
        }

    }
    async destroy(data){
        try {
            
            const response=await this.model.destroy({
               where:{
                id:data
               } 
            })
            return response
        } catch (error) {
            Logger.error("something went wrong in destroy Crud Repo ")
            throw error
            
        }

    }

    async get(data){
        try {
            
            const response=await this.model.findByPk(data)
            if (!response){
                throw new AppError("Resourses not found",StatusCodes.NOT_FOUND)
            }
            return response
        } catch (error) {
            Logger.error("something went wrong in get Crud Repo ")
            throw error
            
        }

    }
    async getAll(){
        try {
            
            const response=await this.model.findAll()
            return response
        } catch (error) {
            Logger.error("something went wrong in getAll Crud Repo ")
            throw error
            
        }

    }

    async update(id,data){  //data object
        try {
            
            const response=await this.model.update(data,{
                where:{
                    id:id
                }

            })
            return response
        } catch (error) {
            Logger.error("something went wrong in update Crud Repo ")
            throw error
            
        }

    }
}


module.exports= CrudRepository
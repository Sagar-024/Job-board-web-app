import {StatusCodes} from 'http-status-codes'
import CustomAPIError from '../error/custom-api.js'

const errorHandlerMiddleware = (err, req, res, next) => {
  let customerror = {
    message :  err.message  || " Something went wrong ", 
    statuscode : err.statusCode 
  }
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ msg: err.message })
  }
  if( err.code && err.code === 11000){
    customerror.message = `Duplicate value for the ${Object.keys(err.keyValue)} field , please choose another `
  }
  if( err)
  return res.status(customerror.statuscode).json({ msg: customerror.message })
}
export default errorHandlerMiddleware
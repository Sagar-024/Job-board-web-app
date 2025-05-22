import { StatusCodes} from 'http-status-codes'
import Job from '../DB/model.js/job.js'
import  BadRequestError from '../error/bad-request.js'

const createjob = async (req, res) => {
    try {
        const { company, position , status } = req.body;
       
         if (!company || !position ) {
            return res.status(StatusCodes.BAD_REQUEST).json({ error: "Provide company and position" });
        }
         req.body.createdBy = req.user.userId;
        
          const createdJob = await Job.create({ company, position, createdBy: req.user.userId  });

        
       
        if (!createdJob) {
            return res.status(StatusCodes.BAD_REQUEST).json({ error: "Invalid credentials" });
        }

        res.status(StatusCodes.CREATED).json({ createdJob });
    } catch (e) {
        
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(
          {
            "message": e.message
          }
        );
    }
};

const getalljob = async ( req , res)=>{

  try{
    const { company , position , status , sort} = req.query ;
  const searchattribute = {}

  if( company){
    searchattribute.company = company
  }
  if( status){
    searchattribute.status = status
  }
  if( position){
    searchattribute.position = position
  }



  let query = Job.find({ createdBy: req.user.userId, ...searchattribute });

  if (sort) {
    const sortList = sort.split(',').join(' ');
    query = query.sort(sortList);
  } else {
    query = query.sort('createdAt');
  }

  const allJob = await query;

  if (allJob.length === 0) {
    return res.status(StatusCodes.OK).json({
      message: `No jobs created by ${req.user.name}`,
    });
  }

  res.status(StatusCodes.OK).json({ allJob });
  }catch(e){
    res.status(StatusCodes.CREATED).json({"message":e.message})
  }

  
    
}
const deletejob = async (req, res) => {
    try {
      const { id } = req.params;
  
      if (!id) {
        throw new BadRequestError("Please provide the job ID");
      }
  
      const job = await Job.findOneAndDelete({ _id: id });
  
      if (!job) { 
        return res.status(StatusCodes.NOT_FOUND).json({
          message: "No such job exists",
        });
      }
  
      return res.status(StatusCodes.OK).json({
        message: "Job deleted successfully",
        deletedJob: job,
      });
  
    } catch (error) {
      return res.status(StatusCodes.CREATED).json({
        message: error.message,
      });
    }
  };
  const updatejob = async (req, res) => {
    try {
      const { id } = req.params;
      const { company, position, status , sort } = req.body;
  
     
      if (!id) {
        throw new BadRequestError("Please provide the job ID");
      }
  
      
      const job = await Job.findOneAndUpdate(
        { _id: id , createdBy: req.userId }, 
        { company, position, status }, 
        { new: true, runValidators: true } 
      );
  
      
      if (!job) {
        return res.status(StatusCodes.NOT_FOUND).json({
          message: "Job not found",
        });
      }
  
      return res.status(StatusCodes.OK).json({
        message: "Job updated successfully",
        job,
      });
  
    } catch (error) {
      return res.status(StatusCodes.CREATED).json({
        message: error.message,
      });
    }
  };

const getjob = async ( req , res)=>{

    try{
        const {id} = req.params ;
         if(!id){
            throw new BadRequestError("Provide id")
         }
         const job = await  Job.find({createdBy : req.user.userId , _id :id });
         if( !job){
            res.json("No job found")
         }

         res.status(StatusCodes.CREATED).json({
            job
         })
         

    }catch(e){
        res.status(StatusCodes.CREATED).json({
                "message": e.message ,
        })
    }
}
export { createjob , getalljob , deletejob , updatejob , getjob }
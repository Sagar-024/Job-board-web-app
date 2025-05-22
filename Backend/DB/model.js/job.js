import { Schema, model , mongoose} from 'mongoose'


const jobschema = new Schema({
    company :{
        type : String ,
        require:[ true , "Please provide the company name "],
        maxlength : 50 , 
        trim : true
    },
    position :{
        type : String ,
        require:[ true , "Please provide the  position  "],
        maxlength : 50 , 
        trim : true 
    },
    status :{
        type: String , 
        enum :[ "Interview" , "Declined" ,"Pending"], 
        trim : true , 
        default : "Pending"
    }, 
     createdBy:{
        type : mongoose.Schema.Types.ObjectId , 
        ref :"User", 
        require : [true , "Please provide the user"]
    }
    
} , { timestamps :true})
const Job =  model("Job" , jobschema);
export default Job ;

import mongoose from "mongoose"

const connect = async(url)=> {
   
   try{
    await mongoose.connect(url);
   }catch( e){
    console.log(`Error : ${e}`);
   }
}
export default connect ;
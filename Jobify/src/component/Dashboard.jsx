import  { useState, useEffect } from "react";
import axios from "axios";
import Unitjob from "./Unitjob.jsx";
import { useSelector } from "react-redux";


const Dashboard = ()=>{

  const [jobs, setJobs] = useState([]);
  const token = useSelector( ( state)=>state.auth.user)

  useEffect(() => {

    const fetchJobs = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/v1/job", {
          headers: { Authorization: `Bearer ${token}` },
        });
       const data = response.data;
       setJobs(data.allJob); 
       
      }catch (err) {
       
       alert(err.response?.data?.message || "Failed to Fetch jobs")

      }
    };
    fetchJobs();
  }, []);
  console.log(jobs)
  let Listofjob = ""
  if(jobs){
     Listofjob = jobs.map( (ele)=>{
      return(
        <Unitjob
        company={ele.company}
        position={ele.position}
        status={ele.status}
        />
      )
     
    })
  }
 
  


  return (
   
    <div className="flex w-4/5 p-5 flex-row  flex-wrap gap-4 items-center justify-between mx-auto rounded-xl  bg-zinc-800 mb-20  mt-10 border-b-4 border-t-4  border-t-blue-500">
         {jobs ? Listofjob : <h1 className=" italic text-4xl text-blue-500 font-semibold "> NO job created  </h1>}
    </div>
    

    
  )
}

export default Dashboard;

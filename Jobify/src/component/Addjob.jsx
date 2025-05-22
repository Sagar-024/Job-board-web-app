import { useState  , useEffect} from "react"
import axios from 'axios' 
import { useSelector } from "react-redux"
function Addjob() {
  const [position, setPosition] = useState('')
  const [status, setStatus] = useState('')
  const [company, setCompany] = useState('')
  const token = useSelector( (state)=>state.auth.user)
 
  
  const handleSubmit = async(e)=>{
    
    e.preventDefault();
   
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/job",
        { position, company, status },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      const { createdJob } = response.data;
      alert(`Successfully created job of  ${createdJob.company}`);
      setPosition("");
      setCompany("");
      setStatus("");
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
      alert(`Failed to create job: ${error.response?.data?.message || error.message}`);
    }
    
  }

  return (
    <div className='w-3/5 mx-auto border-2 mt-8 border-blue-500 h-full flex flex-col items-center rounded-2xl p-4 bg-zinc-800 ' >

      <h1 className='text-3xl font-serif  m-4  font-bold text-black bg-white w-fit  p-3 rounded-lg'>
        Add Job
      </h1>

      <div className='w-2/5  flex flex-col  m-6'>

      <form   onSubmit={handleSubmit}   class="bg-white shadow-md rounded-xl p-4 w-full ">
 
    
    <div >
      <label className="block text-gray-700 font-semibold mb-2" for="position">Position</label>
      <input type="text" id="position" placeholder="Enter position" value={position}
        onChange={(e)=>setPosition(e.target.value)}
        class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
    </div>

   
    <div className="mt-4">
  <label className="block text-gray-700 font-semibold mb-2" htmlFor="status">
    Status
  </label>
  <select
    id="status"
    value={status}
    onChange={(e) => setStatus(e.target.value)}
    className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
  >
    <option value="interview">Interview</option>
    <option value="pending">Pending</option>
    <option value="rejected">Rejected</option>
  </select>
</div>


    
    <div className='mt-4'>
      <label className="block text-gray-700 font-semibold mb-2" for="company">Company</label>
      <input type="text" id="company" placeholder="Enter company name" 
      onChange={(e)=> setCompany(e.target.value)}
      value={company}
        class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
    </div>
  

  
    <div className='flex justify-center p-3'>
    <button type="submit" 
      class="w-1/2 bg-blue-600 text-white font-semibold p-3 rounded-lg hover:bg-blue-700 transition-all">
      Submit
    </button>
    </div>
   
  
      </form>

      </div>

    </div>
  )
}

export default Addjob
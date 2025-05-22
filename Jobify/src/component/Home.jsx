import React from 'react'
import image from '../asset/Job hunt-amico.png'
import Marquee from '../Marquee'
import { useSelector } from 'react-redux'
function Home() {
  
  return (
    <div className=' w-5/6 px-4 flex flex-col items-center  mx-auto'>

    <div className="flex flex-row justify-evenly items-center w-full px-20 my-10">
      <h1 className="text-6xl text-white font-bold max-w-xl  self-start font-serif ">
        Find the most <br /> exciting jobs <br /> in tech
      </h1>
      <img src={image} className="w-3/5 h-25" />
    </div>

    <div className="p-10 max-w-4xl mx-auto border-2 border-white rounded-lg mb-20 bg-zinc-800 ">
     <h2 className="text-6xl text-white font-bold text-center mb-6">Why Choose us?</h2>
  
    <div className="flex justify-around broder-2 border-white ">
    <div className=" p-4">
      <h3 className="text-xl text-white font-semibold">Find Your Dream Job</h3>
      <p className="text-gray-600">Discover the best job opportunities tailored for you.</p>
    </div>

    <div className="p-4">
      <h3 className="text-xl text-white font-semibold">Top Recruiters</h3>
      <p className="text-gray-600">Get hired by top companies and industry leaders.</p>
    </div>

    <div className=" p-4">
      <h3 className="text-xl text-white font-semibold">Easy Application</h3>
      <p className="text-gray-600">Apply for jobs with a single click and track applications.</p>
    </div>

    <div className="p-4">
      <h3 className="text-xl text-white font-semibold">Career Growth</h3>
      <p className="text-gray-600">Enhance your skills and move up in your career.</p>
    </div>
    </div>
</div>

    
    
  
    
      
    </div>
  )
}

export default Home
import React from 'react'

function Unitjob({company , status , position}) {
  return (
    <div className="flex flex-col justify-center items-center bg-white rounded-xl shadow-lg p-6 m-4 w-80 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
      <h1 className="text-2xl font-bold text-gray-800 mb-2">{company}</h1>
      <h1 className="text-lg font-medium text-gray-600 mb-1">{position}</h1>
      <h1 className={`text-sm font-semibold px-3 py-1 rounded-full ${status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
        {status}
      </h1>
    </div>
    
  )
}

export default Unitjob
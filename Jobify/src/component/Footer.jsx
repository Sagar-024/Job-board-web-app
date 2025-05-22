import React from 'react'

function Footer() {
  return (
    <div className="bg-gray-900 text-white py-10 ">
    <div className="max-w-6xl mx-auto px-5">
      
     
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        
        <div>
          <h3 className="text-xl font-semibold mb-3">SeekJOB</h3>
          <p className="text-gray-400">Your go-to platform for finding the best jobs in the tech industry.</p>
        </div>
  
        <div>
          <h3 className="text-lg font-semibold mb-3">Company</h3>
          <ul className="text-gray-400 space-y-2">
            <li>About Us</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>
  
        <div>
          <h3 className="text-lg font-semibold mb-3">Resources</h3>
          <ul className="text-gray-400 space-y-2">
            <li>Blog</li>
            <li>FAQs</li>
            <li>Support</li>
          </ul>
        </div>
  
        <div>
          <h3 className="text-lg font-semibold mb-3">Legal</h3>
          <ul className="text-gray-400 space-y-2">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
  
      </div>
  
      
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500">
        © {new Date().getFullYear()} SeekJOB. All Rights Reserved.
      </div>
  
    </div>
  </div>
  
  )
}

export default Footer
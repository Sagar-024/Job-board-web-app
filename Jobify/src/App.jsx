import { Outlet } from "react-router-dom"
import Header from "./component/Header"
import Footer from "./component/Footer"

function App(){
    

 
  return (
    <div>
      
      <Header/>
      <Outlet/>
      <Footer/>

    </div>
  )
}

export default App
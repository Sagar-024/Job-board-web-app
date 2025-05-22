
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider , createBrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './app/store.js'
import Home from './component/Home.jsx'
import Auth from './component/Auth.jsx'
import Dashboard from './component/Dashboard.jsx'
import Addjob from './component/Addjob.jsx'

const router = createBrowserRouter([
{
  path:'/',
  element : <App/>,
  children:[
    {
      index: true ,
      element:<Home/>
    },
    {
      path:'auth',
      element:<Auth/>
    },
    {
      path:'dashboard',
      element:<Dashboard/>
    },
    {
      path:'addjob',
      element:<Addjob/>
    },
    
  ]

}
])


createRoot(document.getElementById('root')).render(
 <Provider  store={store}>
  <RouterProvider router= { router }/>

 </Provider>

  
  
)

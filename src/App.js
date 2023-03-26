
import './App.css';
import About from "./About/About";
import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import Layout from "./Layout/Layout";
import Contact from "./Contact/Contact";
import Portfolio from "./Portfolio/Portfolio";
import Open from './Open/Open';





let routers= createBrowserRouter([
  {path:'',element:<Layout/>,children:[
    {index:true, element: <Open />},
    {path:'contact',element:<Contact/>},
    {path:'about',element:<About/>},
    {path:'portfolio',element:<Portfolio/>},
    {path:'open',element:<Open/>},

  ]}
])





export default function App(){
  
    return (
    <>
    <RouterProvider router={routers}></RouterProvider>
    {/* <Open/>
    <Portfolio/>
    <About/>
    <Contact /> */}
   
    
    
 
   
    </>
   
    )
  
}

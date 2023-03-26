import React from "react"
import { Outlet} from "react-router-dom"
import About from "../About/About"
import Footer from "../Footer/Footer"
import Navbar from "../Navbar/Navbar"
import Open from "../Open/Open"

export default function Layout(){
    return<>
     <Navbar/>


       <Outlet> </Outlet>
     
  
    <Footer/>
    </>
}
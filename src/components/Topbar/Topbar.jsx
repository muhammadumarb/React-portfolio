import React from 'react'
import { useState } from 'react'
import "./Topbar.scss"
import { FaUserAlt } from "react-icons/fa";
import { CgMail } from "react-icons/cg";


const Topbar = ({menuOpen,setMenuOpen}) => {
 
  return (
    <div className={'topbar '+ (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a className='logo' href="#portfolio">Umar</a>
          <div className="itemcontainer">
            <FaUserAlt/>
            <span>034434943</span>
          </div>
          <div className="itemcontainer">
            <CgMail size={25}/>
            <span>muhammadumarb576</span>
          </div>
        </div>
        <div className="right">
   <div  className="hamburger" onClick={()=>setMenuOpen(!menuOpen)} >
        <span className="line1"></span>
       <span className="line2"></span>
       <span className="line3"></span>
   </div>
        </div>
      </div>
    </div>
  )
}

export default Topbar
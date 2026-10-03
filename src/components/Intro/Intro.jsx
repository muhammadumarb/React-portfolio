import "./intro.scss"
import photo from '../../assets/p1.png'
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { init } from "ityped";
import React, { useEffect, useRef } from 'react'



const Intro = () => {
  const textRef = useRef();

  useEffect(()=>{
    init(textRef.current,{
      showCursor:true,
      backDelay:1200,
      backSpeed:60,
      strings:["Developer","Designer","MersStack Developer","FullStack Developer"]
    });
  },[])
  return (
    <div className='intro' id="intro">
      <div className="left">
        <div className="imageContainer">
          <img src={photo} alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Umar Bhatti</h1>
          <h3>Freelance <span ref={textRef}></span></h3>
        </div>
         <a href="#portfolio">
          <IoIosArrowDropdownCircle size={45} className='img'/>
        </a>
      </div>
    </div>
  )
}

export default Intro
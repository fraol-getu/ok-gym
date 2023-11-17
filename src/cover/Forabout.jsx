





import React from 'react'
import "./Forabout.css"
import BackGroundImage from '../img/cover2.jpg'
const Forabout = () => {
  return (
    <div className=" paddings" 
    style={{
     backgroundImage: `url(${BackGroundImage})`,
      backgroundPosition: "center",
       backgroundSize: "cover",
       backgroundRepeat: "no-repeat",
       width:"100%",
        height:"50vh",
         display: "flex",
        alignItems: "center",
        justifyContent: "center"
       }}>

     <h2 className='h2 for' >About us</h2>
    </div>
  )
}

export default Forabout
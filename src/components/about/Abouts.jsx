






import React from 'react'
import './About.css'
import { Link } from 'react-router-dom'
const Abouts = () => {
  return (
    <section className="a-wrapper">
<div className="a-container flexCenter  innerWidth">
<div className="a-left">

<img src="./a-img.jpg" alt="" className='a-img' />
</div>

<div className="a-right paddings ">
<h1 className="a-title primaryText">ABOUT OUR GYM</h1>
<p className='a-par secondaryText'>
At Good Gym, we believe that everyone deserves to live a healthy and happy life. That's why we offer a wide range of fitness programs and services to meet the needs of people of all ages, fitness levels, and goals.


</p>




<Link  to="/About us"><button className="button1">SEE ALL</button></Link>
</div>
</div>







    </section>
  )
}

export default Abouts
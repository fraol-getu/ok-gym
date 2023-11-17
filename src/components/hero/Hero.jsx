




import React from 'react'
import './Hero.css'
import { Link } from 'react-router-dom'
const Hero = () => {
  return (
    <section className="hero-wrapper">
<div className="paddings flexCenter innerWidth hero-container">
{/* left */}
<div className='hero-left'>
    <h1 className=" hero-title">START YOUR FITNESS <br/> 
    JOURNEY TO DAY</h1>

<div className="hero-des">
   <h2 className='hero-des'> GET FIT IN LESS 2 WEEKS</h2>
</div>
<span className='secondaryText'> fitness is a good thing for for us tobuild
    <br/> so we have to expriance daily
</span>

<div className="btn">
   
   <Link to="/About us"> <button className='button1'>Explore</button></Link>
   <Link to="/Contact"> <button className='button2'>Get in</button></Link>
</div>
</div>
{/* right */}

<div className="hero-right">
    <img src="./hero-image.png" className='img flexCenter' />
    </div>
    
</div>





    </section>
  )
}

export default Hero
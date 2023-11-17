





import React from 'react'
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react'
import data from '../../utils/slider.json'
import {sliderSetting} from '../../utils/Common'
import './Member.css'
const Members = () => {
  return (
    <section className="m-wrapper">
  <div className="  innerWidth m-container">
<div className="m-card">
<div className="flexColCenter m-center">
<div className=" flexCenter i-container"> 
<img className='m-img' src="./first.png" alt="" />
</div>
<h2 className='primaryText'>Happy Members</h2>
<p className='secondaryText'>what we have here is seven kilpno one <br/>  what we have here is seven kilpno one",
</p>
</div>


<div className="m-center flexColCenter">
<div className="flexCenter i-container">
<img className='m-img' src="./second.png" alt="" />
</div>
<h2 className='primaryText'>Qualify Instractor</h2>
<p className='secondaryText'>what we have here is seven kilpno one <br/> what we have here is seven kilpno one
</p>
</div>
<div className="m-center flexColCenter">
<div className="flexCenter i-container">
<img className="m-img flexCenter" src="./third.png" alt="" />
</div>
<h2 className='primaryText'>High Tech Gym</h2>
<p className='secondaryText'>what we have here is seven kilpno one <br/>  what we have here is seven kilpno one
</p>
</div>
</div>
  </div>








    </section>
  )
}

export default Members
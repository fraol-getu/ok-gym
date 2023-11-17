




import React from 'react'
import './Contact.css'
const Contact = () => {
  return (
    <section className="c-wrapper">
        <div className="c-container paddings innerWidth">
     <div className="c-head flexColCenter">
        <h1 className="primaryText c-title">
            CONTACT US
        </h1>
    <p className="secondaryText">
    fitness is a good thing for for us fitness is a good 
    </p>
     </div>
   <div className="c-m  innerWidth flexCenter">
   <div className="flexColCenter">
    <span className='p1-text flexCenter'>FirstName</span>
    <input type="text" className='input' />
    </div>
    <div className='flexColCenter'>
    <span className='p1-text flexCenter'>LastName</span>
    <input type="text" className='input' />
    </div>
   </div>

   <div className="c-m innerWidth flexCenter">
   <div className="flexColCenter">
    <span className='p1-text flexCenter'>YourEmail</span>
    <input type="text" className='input' />
    </div>
    <div className='flexColCenter'>
    <span className='p1-text flexCenter'>Phone</span>
    <input type="text" className='input' />
    </div>
   </div>
        <div className='c-m2 flexColCenter'>
        <div className="flexColCenter">
<span className='p2-text'>comments</span>
<input type="text" className='c-input'/>

        </div>
        </div>
        
        </div>
    </section>
  )
}

export default Contact
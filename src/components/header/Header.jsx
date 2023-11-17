




import React from 'react'
import './Header.css'
import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import {  AiOutlineMenu } from 'react-icons/ai'
import {  AiOutlineClose } from 'react-icons/ai'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import OutsideClickHandler, {outSideClickHandler} from 'react-outside-click-handler'
const Header = () => {
  

 
  
  
  const [menuOpen, setMenuOpen] = useState(false);

  
  
  
  return (
    <section className="h-wrapper">
<div className="paddings innerWidth flexCenter h-container">

<h2 className='h1'>fitness</h2>

<OutsideClickHandler onOutsideClick={() => {setMenuOpen(false)}}>
<ul className={menuOpen ? "h-mobile-menu" : "h-menu"}>
   <li className='h-item'> 
   <NavLink to="/"  activeClassName="active" className='h-link'>Home</NavLink>
   </li>
   <li className='h-item'> 
   <NavLink to="/About us" activeClassName="active" className='h-link'>About</NavLink>
   </li>
   <li className='h-item'>
   <NavLink to="/Trainer" activeClassName="active" className='h-link'>Trainer</NavLink>
   </li>
   <li className='h-item' >
   <NavLink to="/Class" activeClassName="active" className='h-link'>Class</NavLink>
   </li>
   <li className='h-item'>
   <NavLink to="/Contact"  className='h-link'>Contact</NavLink>
   </li>
 </ul>
    </OutsideClickHandler>
<div className=" flexCenter right">
<Link to="/Contact"><span>log in</span></Link>
<Link to="/Contact"><button className="button1">sign in</button></Link>
</div>
<button className='h-icon'
onClick={() => {setMenuOpen(!menuOpen)}}
>
  { menuOpen ?
   ( <AiOutlineClose/>) :
     ( <AiOutlineMenu/>)} 
</button>

</div>

    





    </section>
  )
}

export default Header
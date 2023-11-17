import React from 'react'
import Hero from '../components/hero/Hero'
import Service from '../servic/Service'

import Proffesions from '../components/professions/Proffesions'
import Member from '../components/members/Members'
import Abouts from '../components/about/Abouts'
import Middle from '../components/middle/Middle'

const Home = () => {
  return (
    <div>
<Hero/>
<Service/>
<Member/>
<Middle/>
<Abouts/>
  <Proffesions/>  
    </div>
  )
}

export default Home

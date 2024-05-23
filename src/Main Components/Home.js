import React from 'react'
import  Navbar  from './PageComponents/navbar/Navbar';
import Hero from './PageComponents/heroSec/Hero';
import Slides from './PageComponents/slide/Slides';
import CardSec from './PageComponents/cardSec/CardSec';
import Herosec2 from './PageComponents/buttomhero/Herosec2'
import { Nslide } from './PageComponents/nslide/Nslide';



export const Home = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <CardSec/>
    <Slides/>
    <Nslide/>
    <Herosec2/>
    </>
  )
}

export default Home

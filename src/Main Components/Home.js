import React from 'react'
import  Navbar  from './PageComponents/navbar/Navbar';
import Hero from './PageComponents/heroSec/Hero';
import Slides from './PageComponents/slide/Slides';
import CardSec from './PageComponents/cardSec/CardSec';
import { Nslide } from './PageComponents/nslide/Nslide';



export const Home = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <CardSec/>
    <Slides/>
    <Nslide/>
    </>
  )
}

export default Home

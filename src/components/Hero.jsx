import { useState  } from 'react'
import HeroImg from "../assets/Image/hero2.jpg"

import slide1 from '../assets/Image/slide1.jpg'
import slide2 from '../assets/Image/slide2.jpg'
import slide3 from '../assets/Image/slide3.jpg'
import { useEffect } from 'react';
import Slide from './Slide';

const Hero = () => {
  const [images, setImages] = useState([])

  useEffect(()=>{
    setImages([slide1,slide2,slide3])
  },[])
  return (
    <div className="h-[90vh] w-full">
      <Slide images={images}/>
    </div>
  )
}

{
  /*  */
}
export default Hero

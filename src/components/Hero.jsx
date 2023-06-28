import { useState } from 'react'
import { useEffect } from 'react';
import Slide from './Slide';
import { slide1, slide2, slide3 } from '../assets/Image';

const Hero = () => {
  const [images, setImages] = useState([])

  useEffect(()=>{
    setImages([slide1,slide2 ,slide3])
  },[])

  return (
    <div className="h-[90vh] w-full">
      <Slide images={images}/>
    </div>
  )
}

export default Hero
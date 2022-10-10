import React, { useRef } from 'react'
import style from './Cards.module.sass'
import {motion} from 'framer-motion'

const Card = ({ topText, number, bottomText, index }) => {

  const cardVariants = {
    hidden: {
      opacity: 0,
      translateX: -50
    },
    visible: i => ({
      opacity: 1,
      translateX: 0,
      transition: {
        delay: i * 0.15
      }
    })
  }

  const cardRef = useRef()
  const bgCardRed = useRef()
  
  const angle = (cx, cy, ex, ey) => {
    const dy = ey - cy;
    const dx = ex - cx;
    const rad = Math.atan2(dy, dx);
    const deg = rad * 180 / Math.PI;

    return deg
  }

  const handleMouseMove = (event) => {

    const mouseX = event.clientX
    const mouseY = event.clientY

    const rekt = cardRef.current.getBoundingClientRect()
    const anchorX = rekt.left + rekt.width / 2
    const anchorY = rekt.top + rekt.height / 2

    const angleDeg = angle(mouseX, mouseY, anchorX, anchorY)
    
    cardRef.current.style.borderImageSource = `linear-gradient(${angleDeg}deg, #09097900 60%, #ffffff73 100%)`
    cardRef.current.style.transition = `none`
    bgCardRed.current.style.backgroundImage = `linear-gradient(${angleDeg}deg, #09097900 56%, #ffffff3a 114%)`
  };

  const handleMouseLeave = () => {
    cardRef.current.style = ''
    bgCardRed.current.style = ''
    cardRef.current.style.transition = 'all .5s ease'
  }

  return (
    <motion.div
      initial='hidden'
      animate='visible'
      variants={cardVariants}
      custom={index}
      
      ref={cardRef} 
      onMouseMove={handleMouseMove} 
      onMouseLeave={handleMouseLeave}
      className={style.card}
    >
      <div ref={bgCardRed} className={style.cardBgGradient}></div>

      <span>{topText}</span>
      <span className={style.cardNumber}>{<span>{number}</span>}</span>
      <span>{bottomText}</span>
    </motion.div>
  )
}

export default Card
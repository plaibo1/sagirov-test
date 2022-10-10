import React, { useState } from 'react'
import style from './Navbar.module.sass'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const NavItem = ({title, pageLink, isSelected, handleClick = Function.prototype}) => {

  return (
    <motion.li 
      className={style.navItem}  
      onClick={handleClick}
    >
      <Link to={pageLink}>
        {title}
      </Link>
      
      {
        isSelected && 
        <motion.div 
          layoutId={'activeItem'}
          className='bg-[#3d3d3d] w-full h-[2px] absolute'
        >
        </motion.div>
      }
    </motion.li>
  )
}

export default NavItem
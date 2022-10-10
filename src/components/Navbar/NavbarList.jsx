import { AnimatePresence, motion } from 'framer-motion'
import React, { useState } from 'react'
import NavItem from './NavItem'
import style from './Navbar.module.sass'
import { useMatchMedia } from '../hooks/useMatchMedia'

const NavbarList = ({navShow, navbarData}) => {

  const [activeIndex, setActiveIndex] = useState(null)
  const {isDesktop} = useMatchMedia()

  return (
    <AnimatePresence>
      {
        (navShow || isDesktop) &&
        <motion.ul
          transition={{ default: { ease: 'easeInOut' } }}
          initial={{ opacity: 0, translateY: -100, height: 100, overflow: 'hidden' }}
          animate={{ opacity: 1, translateY: 0, height: 'auto' }}
          exit={{ opacity: 0, translateY: -100, height: 0 }}
          className={style.navbarItems}>
          {
            navbarData.map((item, index) => {
              return (
                <NavItem
                  key={item.sys.id}
                  title={item.fields.title}
                  pageLink={item.fields.link}
                  isSelected={index === activeIndex}
                  handleClick={() => setActiveIndex(index)}
                />
              )
            })
          }
        </motion.ul>
      }
    </AnimatePresence>
  )
}

export default NavbarList
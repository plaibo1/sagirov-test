import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import useContentful from '../../hooks/useContentful'
import style from '../Header.module.sass'
import { motion } from 'framer-motion'

const HeaderText = () => {

  const [headerData, setHeaderData] = useState({})
  const [headerTitle, setHeaderTitle] = useState('')

  const {getHeaderData} = useContentful()

  useEffect(() => {
    getHeaderData().then(res => {
      res && setHeaderData(res)
      res && setHeaderTitle(res.title)
    })
  }, [])

  return (
    <div>
      <div className={style.titleWrapper}>

        <motion.h1 
          initial={{opacity: 0, translateY: 50}} 
          animate={{opacity: 1, translateY: 0}}
          className={style.title} 
        >
          {/* all string without last symbol */}
          <span>{headerTitle.slice(0, headerTitle.length - 1)} </span>

          {/* last symbol */}
          <span>{headerTitle.slice(-1)}</span>
        </motion.h1>

        <motion.span 
          initial={{opacity: 0, translateX: -100}} 
          animate={{opacity: 1, translateX: 0}} 
          className='block'
        >
          <h2 className={style.subTitle}>{headerData.subtitle}</h2>
        </motion.span>

      </div>

      <motion.div 
        initial={{opacity: 0, translateY: -100}} 
        animate={{opacity: 1, translateY: 0}} 
        transition={{delay: 0.6}}
        className={style.headerButtonWrapper}
      >
        <Link to={'/example'} className={style.headerButton}>
          {headerData.buttonText}
          <motion.div transition={{delay: 1}} initial={{opacity: 0}} animate={{opacity: 1}} className={style.headerFigure} />
        </Link>
      </motion.div>
    </div>
  )
}

export default HeaderText
import React from 'react'
import style from './ContainerLayout.module.sass'

const ContainerLayout = ({children}) => {
  return (
    <div className={style.containerLayout}>
      {children}
    </div>
  )
}

export default ContainerLayout
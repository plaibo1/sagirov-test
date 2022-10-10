import React from 'react'

import ContainerLayout from '../layout/ContainerLayout'
import CardsWrapper from './Cards/CardsWrapper'

import style from './Header.module.sass'
import HeaderText from './HeaderText/HeaderText'


const Header = () => {
  return (
    <header className={style.header}>
      <ContainerLayout>
        <div className={style.headerContent}>
          <HeaderText />
          <CardsWrapper />
        </div>
      </ContainerLayout>
    </header>
  )
}

export default Header
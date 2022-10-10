import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import style from './Navbar.module.sass'
import logo from '../../img/logo.png'
import ContainerLayout from '../layout/ContainerLayout'
import useContentful from '../hooks/useContentful'

import { GiHamburgerMenu } from 'react-icons/gi'
import { IoMdClose } from 'react-icons/io'
import NavbarList from './NavbarList'

const Navbar = () => {

  const [navShow, setNavShow] = useState(false)

  const [navbarData, setNavbarData] = useState([])

  const { getNavbarData } = useContentful()


  useEffect(() => {
    getNavbarData().then((res) => res && setNavbarData(res)) // get and set cards data
  }, [])


  return (
    <nav className={style.navbar}>
      <ContainerLayout>
        <div className={style.navbarContent}>

          <Link to={'/'}>
            <div className={style.logo}>
              <div className={style.cornerBottom}></div>
              <img src={logo} alt="logo" />
            </div>
          </Link>

          <button
            onClick={() => setNavShow(prev => prev = !prev)}
            className={style.navButton}
          >
            {!navShow ? <GiHamburgerMenu /> : <IoMdClose />}
          </button>

          <NavbarList 
            navbarData={navbarData}
            navShow={navShow}
          />

        </div>
      </ContainerLayout>
    </nav>
  )
}

export default Navbar
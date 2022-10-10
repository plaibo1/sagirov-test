import React, {useEffect, useState} from 'react'
import useContentful from '../../hooks/useContentful'
import Card from './Card'

import style from './Cards.module.sass'

const CardsWrapper = () => {

  const {getCardsData} = useContentful()

  const [cardsData, setCardsData] = useState([])

  useEffect(() => {
    getCardsData().then((res) => res && setCardsData(res)) // get and set cards data
  }, [])

  return (
    <div className={style.cardWrapper}>

      {
        cardsData.map((item, index) => {
          return (
            <Card 
              key={item.sys.id}
              topText={item.fields.topText}
              number={item.fields.number}
              bottomText={item.fields.bottomText}
              index={index}
            />
          )
        })
      }

    </div>
  )
}

export default CardsWrapper
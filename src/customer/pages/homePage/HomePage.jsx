import React from 'react'
import MainCarousel from '../../components/homeCarousel/MainCarousel'
import HomeSectionCarousel from '../../components/homeSectionCarousel/HomeSectionCarousel'
import { mens_kurta } from '../../../data/mensKurta'
import { mensShoesPage1 } from '../../../data/mens_shoes'
import { sareePage1 } from '../../../data/saree'
import { lengha_page1 } from '../../../data/women'
import { mens_shirt } from '../../../data/mens_shirt'

const HomePage = () => {
  return (
    <div>
      <div className='z-1'>
        <MainCarousel />
      </div>
      
      <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
        <HomeSectionCarousel dataKurta={mens_kurta} sectionName={"Men's Kurta"} />
        <HomeSectionCarousel dataKurta={mensShoesPage1} sectionName={"Men's Shoes"} />
        <HomeSectionCarousel dataKurta={mens_shirt} sectionName={"Men's Shirt"} />
        <HomeSectionCarousel dataKurta={sareePage1} sectionName={"Women's Saree"} />
        <HomeSectionCarousel dataKurta={lengha_page1} sectionName={"Women's dress"} />

      </div>
      
    </div>
  )
}

export default HomePage

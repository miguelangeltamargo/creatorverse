import React from 'react'
import EmblaCarousel from '../../components/Carousel/EmblaCarousel'
import { EmblaOptionsType } from 'embla-carousel'
import '../../components/Carousel/css/embla.scss'
import './HomePage.scss'

const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true}

const HomePage: React.FC = () => (
  <>
    <h1 className='title_content'>Creatoverse</h1>
    <div className='top5'>TOP 5 Creators</div>
    <div className='carousel'>
      <EmblaCarousel options={OPTIONS} />
    </div>
  </>
)
export default HomePage

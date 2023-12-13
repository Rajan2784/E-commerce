import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { mainCarouselData } from './mainCaouselData';

const MainCarousel = () => {

    const items = mainCarouselData.map((item) => <img src={item.image} className='cursor-pointer z-1' role='presentation' alt="" /> )

    return (
        <AliceCarousel
        mouseTracking
        items={items}
        autoPlay
        infinite
        disableButtonsControls
        autoPlayInterval={2000}
        animationDuration={1000}
    />
    )};

export default MainCarousel;
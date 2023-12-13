import React, { useRef, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeCard from "../homeCard/HomeCard";
import { Button } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

const HomeSectionCarousel = ({dataKurta,sectionName}) => {
  const [activeIndex,setActiveIndex] = useState(0);
  const carouselRef = useRef(null);
  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };

  const slidePrev = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
      carouselRef.current.slidePrev();
    }
  };

  const slideNext = () => {
    if (activeIndex < items.length - 1) {
      setActiveIndex(activeIndex + 1);
      carouselRef.current.slideNext();
    }
  };

  const items = Array.isArray(dataKurta)
  ? dataKurta.map((item, index) => <HomeCard key={index} item={item} />)
  : [];


  return (
    <div className="border z-1">
      <h2 className="text-2xl font-extrabold text-gray-800 py-5">{sectionName}</h2>
      <div className="relative p-5" >
        <div>
          <AliceCarousel
            responsive={responsive}
            ref={carouselRef}
            items={items}
            disableDotsControls
            disableButtonsControls
            activeIndex={activeIndex}
          />
        </div>


        { activeIndex !== items.length-5 && <Button
          variant="contained"
          onClick={slideNext}
          sx={{
            position: "absolute",
            top: "8rem",
            right: "0rem",
            transform: "translateX(50%) rotate(90deg)",
          }}
          color="primary" // Use 'primary' color instead of 'white' for Material-UI buttons
          aria-label="next"
        >
          <KeyboardArrowLeftIcon sx={{ transform: "rotate(90deg)", color: "black" }} />
        </Button>}

        { activeIndex !== 0 && <Button
          variant="contained"
          onClick={slidePrev}
          sx={{
            position: "absolute",
            top: "8rem",
            left: "0rem",
            transform: "translateX(-50%) rotate(-90deg)",
          }}
          color="primary" // Use 'primary' color instead of 'white' for Material-UI buttons
          aria-label="next"
        >
          <KeyboardArrowLeftIcon sx={{ transform: "rotate(90deg)", color: "black" }} />
        </Button>}
      </div>
    </div>
  );
};

export default HomeSectionCarousel;

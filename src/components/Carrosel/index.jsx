import React, { useRef } from "react"
import Slider from "react-slick"
import { Container, ImageContainer, Image } from "./styles"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6"


export function Carrosel() {
  const sliderRef = useRef(null)

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2.1,
    slidesToScroll: 1,
  }

  const handlePrevious = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev()
    }
  }

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext()
    }
  }

  return (
    <Container>
      <Slider ref={sliderRef} {...settings}>
        <ImageContainer>
          <Image src="public/images/feature1.png" />
          <p>GO ON AN ADVENTURE</p>
        </ImageContainer>
        <ImageContainer>
          <Image src="public/images/feature2.png" />
          <p>BATTLE AND CAPTURE</p>
        </ImageContainer>
        <ImageContainer>
          <Image src="public/images/feature3.png" />
          <p>COLLECT ALL PORBLES</p>
        </ImageContainer>
        <ImageContainer>
          <Image src="public/images/feature4.png" />
          <p>OPTIMIZE YOUR TEAM</p>
        </ImageContainer>
        <ImageContainer>
          <Image src="public/images/feature5.png" />
          <p>CREATE YOUR WORLD</p>
        </ImageContainer>
      </Slider>
      <div className="buttons" style={{ textAlign: "center" }}>
        <button className="button" onClick={handlePrevious}>
          <FaArrowLeft/>
        </button>
        <button className="button" onClick={handleNext}>
          <FaArrowRight/>
        </button>
      </div>
    </Container>
  )
}

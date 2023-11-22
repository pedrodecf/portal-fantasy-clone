import React, { useRef } from "react"
import Slider from "react-slick"
import { Container, ImageContainer, Image } from "./styles"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6"
import feature1 from "/public/images/feature1.png"
import feature2 from "/public/images/feature2.png"
import feature3 from "/public/images/feature3.png"
import feature4 from "/public/images/feature4.png"
import feature5 from "/public/images/feature5.png"


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
          <Image src={feature1} />
          <p>GO ON AN ADVENTURE</p>
        </ImageContainer>
        <ImageContainer>
          <Image src={feature2} />
          <p>BATTLE AND CAPTURE</p>
        </ImageContainer>
        <ImageContainer>
          <Image src={feature3} />
          <p>COLLECT ALL PORBLES</p>
        </ImageContainer>
        <ImageContainer>
          <Image src={feature4} />
          <p>OPTIMIZE YOUR TEAM</p>
        </ImageContainer>
        <ImageContainer>
          <Image src={feature5} />
          <p>CREATE YOUR WORLD</p>
        </ImageContainer>
      </Slider>
      <div className="buttons" style={{ textAlign: "center" }}>
        <button className="button" onClick={handlePrevious}>
          <FaArrowLeft />
        </button>
        <button className="button" onClick={handleNext}>
          <FaArrowRight />
        </button>
      </div>
    </Container>
  )
}

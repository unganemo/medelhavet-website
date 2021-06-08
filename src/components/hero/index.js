import React, {useState} from 'react'
import {
    HeroContainer, 
    HeroBG, 
    HeroSlide, 
    HeroSlider, 
    HeroImage, 
    SliderButtons, 
    PrevArrow, 
    NextArrow,
    HeroContentWrap,
    HeroTitle1, 
    HeroTitle2} from './HeroElements'

const Hero = ({ slides }) => {

    const [current, setCurrent] = useState(0)
    const length = slides.length
    
    const nextSlide = () => {
        setCurrent(current === length-1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length-1 : current - 1)
    }

    if(!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <HeroContainer>
            <HeroContentWrap>
                    <HeroTitle1>EN LITEN BIT AV</HeroTitle1>
                    <HeroTitle2>MEDELHAVET</HeroTitle2>
                </HeroContentWrap>
            <HeroBG>
                {slides.map((slide, index) => {
                    return (
                        <HeroSlide key={index}>
                            {index === current && (
                                <HeroSlider>
                                    <HeroImage src={slide.image} alt={slide.alt}/>
                                </HeroSlider> 
                            )}
                        </HeroSlide>
                    )
                })}
                <SliderButtons>
                    <PrevArrow onClick={prevSlide}/>
                    <NextArrow onClick={nextSlide}/>
                </SliderButtons>
            </HeroBG>
        
        </HeroContainer>
    )
}

export default Hero

import styled, { css } from 'styled-components'
import {IoIosArrowForward, IoIosArrowBack} from 'react-icons/io'

export const HeroContainer = styled.div`
    background: #ECF7FF;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 100vh;
    position: relative;
    z-index: 1;
    margin-top: -60px;
    opacity: 1;
`

export const HeroBG = styled.div`
    background: #ECF7FF;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const HeroContentWrap = styled.div`
    background: rgba(3, 169, 244, 0.75);
    z-index: 5;
    max-width: 1100px;
    position: absolute;
    padding: 45px 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.8);
`

export const HeroTitle1 = styled.h1`
    color: #fff;
    font-size: 1.5rem;
    text-align: center;
    opacity: 1;
    font-family: 'Times New Roman', serif;
    font-weight: normal;

    @media screen and (max-width: 768px) {
        font-size: 1.2rem;
    }

    @media screen and (max-width: 480px) {
        font-size: 1rem;
    }
`

export const HeroTitle2 = styled.h1`
    color: #fff;
    font-size: 3rem;
    text-align: center;
    font-family: 'Times New Roman', serif;
    font-weight: normal;

    @media screen and (max-width: 768px) {
        font-size: 2.5rem
    }

    @media screen and (max-width: 480px) {
        font-size: 2rem
    }

`

export const HeroSlide = styled.div`
    z-index: 1;
    width: 100%;
    heigth: 100%;
`
export const HeroImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
`
export const HeroSlider = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    heigth: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const SliderButtons = styled.div`
    position: absolute;
    bottom: 30px;
    display: flex;
    z-index: 10;
    justify-content: center;
    width: 100%;
`

export const arrowButtons = css`
    width: 50px;
    height: 50px;
    color: #fff;
    cursor: pointer;
    background: #03A9F4;
    border-radius: 50px;
    padding: 10px;
    user-select: none;
    transition: 0.3s;
    opacity: 0.85;
    margin: 1rem;
`

export const PrevArrow = styled(IoIosArrowBack)`
    ${arrowButtons}
`

export const NextArrow = styled(IoIosArrowForward)`
    ${arrowButtons}
`


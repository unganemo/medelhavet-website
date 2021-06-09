import React from 'react'
import {Img, TitleWrapper, Title} from './HeaderImgElements'

const HeaderImg = ({title, img, alt, lightBg, darkText}) => {
    return (
        <>
            <TitleWrapper lightBg={lightBg}>
                <Title darkText={darkText}>{title}</Title>
            </TitleWrapper>
        </>
    )
}

export default HeaderImg

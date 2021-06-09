import React from 'react'
import HeaderImg from './HeaderImg'
import { 
    InfoContainer,
    InfoWrapper,
    InfoRow, 
    Column1,
    TextWrapper,
    Subtitle,
    Column2,
    ImgWrap, 
    Img
  } from './InfoElements'

const Info = ({lightBg, id, imgStart, darkText, description, img, alt, title}) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart} >
                        <Column1>
                            <TextWrapper>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <HeaderImg img={img} alt={alt} darkText={darkText} lightBg={lightBg} title={title}/>
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default Info

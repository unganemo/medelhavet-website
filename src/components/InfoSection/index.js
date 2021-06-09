import React from 'react'
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

const Info = ({lightBg, id, imgStart, darkText, description, img, alt}) => {
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
                                <Img src={img} alt={alt}/>
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default Info

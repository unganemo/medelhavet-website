import styled from 'styled-components'

export const InfoContainer = styled.div`
    color: #fff;
    background: ${({lightBg}) => (lightBg ? '#ECF7FF' : '#3B9CFF')};

    @media screen and (max-width: 768px) {
        padding: 100 0;
    }
`

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: auto;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;

`

export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col2' 'col1'` : `'col2 col2' 'col1 col1'`)};
`

export const Column1 = styled.div`
    margin: 50px;
    grid-area: col1;

    @media screen and (max-width: 768px) {
        margin: 0px;
        margin-bottom: 50px;
    }
`

export const Column2 = styled.div`
    margin: 50px;
    grid-area: col2;
`

export const TextWrapper = styled.div`
    max-width: 650px;
    padding-top: 0;
    justify-content: center;
    align-items: center;
`

export const Subtitle = styled.p`
    width: 100%;
    height: 100%;
    margin-bottom: 0px;
    font-size: 1.2rem;
    line-height: 28px;
    justify-content: center;
    color: ${({darkText}) => (darkText ? '#2C2C2C' : '#ECF7FF')};
`

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
    text-align: center;
`

export const Img = styled.img`
    width: 100%;
    max-width: 350px;
    padding-right: 0; 

    @media screen and (max-width: 768px) {
        max-width: 250px;
    }
`


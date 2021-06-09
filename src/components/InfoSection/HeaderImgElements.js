import styled from 'styled-components'

export const Img = styled.img`
    width: 100%;
    max-width: 350px;
    padding-right: 0; 

    @media screen and (max-width: 768px) {
        max-width: 250px;
    }
`

export const TitleWrapper = styled.div`
    width: 100%;
    padding: 24px 0;
    background: ${({lightBg}) => (lightBg ? '#2196F3' : '#ECF7FF')};
`

export const Title = styled.h1`
    color: ${({darkText}) => (darkText ? '#FFF' : '#2196F3')};
    font-size: 2.5rem;
    font-weight: 200;
`
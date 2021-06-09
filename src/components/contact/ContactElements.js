import styled from 'styled-components'
import { SocialIcon } from 'react-social-icons'

export const ContactContainer = styled.div`
    background: #ECF7FF;
    height: auto;
    color: #212121;
    padding: 50px;

    @media screen and (max-width: 768px) {
        padding: 100 0;
    }
`

export const ContactHeadWrap = styled.div`
    display: flex;
    z-index: 1;
    height: auto;
    width: 100%;
    max-width: 550px;
    margin-right: auto;
    margin-left: auto;
    padding: 20px 20px;
    justify-content: center;
    background: #2196F3;
    
`

export const ContactHeader = styled.h2`
    font-weight: 200;
    color: #fff;
    font-size: 3rem;
`

export const ContactDescWrap = styled.div`
    display: grid;
    z-index: 1;
    height: auto;
    width: 100%;
    max-width: 550px;
    margin-top: 50px;
    margin-right: auto;
    margin-left: auto;
    justify-content: center;
`

export const ContactDescr = styled.p`
    font-size: 1rem;
    margin-bottom: 1rem;
    line-height: 28px;
`

export const ContactIconWrap = styled.div`
    display: flex;
    z-index: 1;
    height: auto;
    width: 100%;
    max-width: 550px;
    margin-top: 2rem;
    margin-right: auto;
    margin-left: auto;
    justify-content: center;
`

export const ContactIcon = styled(SocialIcon)`
    margin-right: 25px;
    margin-left: 25px;

    @media screen and (max-width: 768px){
        margin-right: 12.5px;
        margin-left: 12.5px;
    }
`
import React from 'react'
import {
    ContactContainer, 
    ContactHeadWrap, 
    ContactHeader, 
    ContactDescWrap, 
    ContactDescr,
    ContactIconWrap,
    ContactIcon
} from './ContactElements'

const Contact = ({id, title, description1, description2}) => {  
    const ButtonMailto = () => {
        window.open('mailto:info@enlitenbit.se?subject=Ämnesrad%20här&body=Mailtext%20här')
    };

    return (
        <ContactContainer id={id}>
            <ContactHeadWrap>
                <ContactHeader>{title}</ContactHeader>
            </ContactHeadWrap>
            <ContactDescWrap>
                <ContactDescr>{description1}</ContactDescr>
                <ContactDescr>{description2}</ContactDescr>
            </ContactDescWrap>
            <ContactIconWrap>
            <ContactIcon 
                url="https://www.instagram.com/enlitenbitavmedelhavet" 
                bgColor='#2196F3' 
                fgColor='#fff'
                target="_blank" 
                rel="noopener noreferrer"
                ></ContactIcon>
                <ContactIcon 
                url="https://www.facebook.com/enlitenbitavmedelhavet" 
                bgColor='#2196F3' 
                fgColor='#fff'
                target="_blank" 
                rel="noopener noreferrer"
                ></ContactIcon>
                <ContactIcon 
                network='email'
                bgColor='#2196F3' 
                fgColor='#fff'
                onClick={ButtonMailto}
                style={{cursor:'pointer'}}
                ></ContactIcon>
            </ContactIconWrap>
        </ContactContainer>
    )
}

export default Contact
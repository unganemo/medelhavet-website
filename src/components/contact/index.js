import React from 'react'
import {
    ContactContainer, 
    ContactHeadWrap, 
    ContactHeader, 
    ContactDescWrap, 
    ContactDescr,
    ContactIconWrap,
    ContactIcon} 
    from './ContectElements'
import Linking from 'react'

const Contact = ({id, title, description1, description2, twitterUsername}) => {

    const twitterUrlScheme = `twitter://user?screen_name=${twitterUsername}`;

    const goInstagram = () => {
        
    }
    
    const goFacebook = () => {
        Linking.canOpenURL(twitterUrlScheme)
    .then((supported) =>
        Linking.openURL(
            supported
                ? twitterUrlScheme
                : `https://www.twitter.com/${twitterUsername}`
            )
        )
        .catch((err) => console.error('An error occurred', err));
    }

    const goMail = () => {

    }
    
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
                bgColor='#fff' 
                fgColor='#3B9CFF'
                ></ContactIcon>
                <ContactIcon 
                url="https://www.facebook.com/enlitenbitavmedelhavet" 
                bgColor='#fff' 
                fgColor='#3B9CFF'
                ></ContactIcon>
                <ContactIcon 
                url="info@enlitenbit.se" 
                bgColor='#fff' 
                fgColor='#3B9CFF'
                ></ContactIcon>
            </ContactIconWrap>
        </ContactContainer>
    )
}

export default Contact

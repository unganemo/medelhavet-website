import React, {useEffect, useState} from 'react'
import {FaBars} from 'react-icons/fa'
import {
    Nav, 
    NavbarContainer, 
    NavTimes, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks} from './NavbarElements'

const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false)
    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])
    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavTimes scrollNav={scrollNav}>Öppettider  Tor-Fre: 11-17, Lör-Sön: 11-15</NavTimes>
                    <MobileIcon onClick = {toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks 
                            to='about' 
                            smooth={true} 
                            duration={500} 
                            spy={true} 
                            exact='true' 
                            offset={-60}>Om oss</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks 
                            to='store'
                            smooth={true} 
                            duration={500} 
                            spy={true} 
                            exact='true' 
                            offset={-60}>Butik</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks 
                            to='garden'
                            smooth={true} 
                            duration={500} 
                            spy={true} 
                            exact='true' 
                            offset={-60}>Trädgård</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks 
                            to='cafe' 
                            smooth={true} 
                            duration={500} 
                            spy={true} 
                            exact='true' 
                            offset={-60}>Café</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks 
                            to='contact'
                            smooth={true} 
                            duration={500}
                            spy={true} 
                            exact='true' 
                            offset={-60}>Kontakt</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>    
            </Nav>
        </>    
    )
}

export default Navbar

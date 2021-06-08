import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarLink, SidebarWrapper, SidebarMenu, SidebarOpenWrap, SidebarOpen} from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink 
                    to='about' 
                    smooth={true} 
                    duration={500} 
                    spy={true} 
                    exact='true' 
                    offset={-60}
                    onClick={toggle}>Om oss</SidebarLink>
                    <SidebarLink 
                    to='store' 
                    smooth={true} 
                    duration={500} 
                    spy={true} 
                    exact='true' 
                    offset={-60}
                    onClick={toggle}>Butik</SidebarLink>
                    <SidebarLink 
                    to='garden' 
                    smooth={true} 
                    duration={500} 
                    spy={true} 
                    exact='true' 
                    offset={-60}
                    onClick={toggle}>Trädgård</SidebarLink>
                    <SidebarLink 
                    to='contact' 
                    smooth={true} 
                    duration={500} 
                    spy={true} 
                    exact='true' 
                    offset={-60}
                    onClick={toggle}>Kontakt</SidebarLink>
                </SidebarMenu>
                <SidebarOpenWrap>
                    <SidebarOpen>
                        Torsdag-Fredag: 11-17<br/>
                        Lördag-Söndag: 11-15
                    </SidebarOpen>
                </SidebarOpenWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
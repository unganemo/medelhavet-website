import styled from 'styled-components'
import {FaTimes} from 'react-icons/fa'
import {Link} from 'react-scroll'

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #3B9CFF;
    display: grid;
    align-items: center;
    top: 0;
    right: 0;
    transition: 0.3s ease-in-out;
    right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
`

export const CloseIcon = styled(FaTimes)`
    color: #fff;
`

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`

export const SidebarWrapper = styled.div`
    color: fff;
    margin-top: 25%;
`

export const SidebarLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: #fff;
    cursor: pointer;

    &:hover{
        transition: 0.2 ease-in-out;
        text-decoration: underline;
    }
` 

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-column: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;
`

export const SidebarOpenWrap = styled.div`
    display: flex;
    justify-content: center;
`

export const SidebarOpen = styled.h2`
    display: none;

    @media screen and (max-width: 480px) {
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1rem;
        text-decoration: none;
        list-style: none;
        transition: 0.2s ease-in-out;
        text-align: center;
        font-weight: normal;
    }

`
import styled from 'styled-components'
import { Link } from 'react-scroll'

export const Nav = styled.nav`
    background: ${({scrollNav}) => (scrollNav ? '#3B9CFF' : 'transparent')};
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    transition: 0.3s all ease;

    @media screen and (max-width: 768px) {
        transition: 0.3s all ease;
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 60px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`;

export const NavTimes = styled.h2`
    color: #fff;
    justify-self: flex-start;
    font-size: 1rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
    text-shadow: 0 0 10px rgba(0, 0, 0, 1);
    text-shadow: ${({scrollNav}) => (scrollNav ? '0 0 0px rgba(0, 0, 0, 0)' : '0 0 10px rgba(0, 0, 0, 1)')};
    transition: 0.3s all ease;

    @media screen and (max-width: 480px) {
        display: none;
    }
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute; 
        top: 0;
        right: 0;
        transform: translate(-100%, 40%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavItem = styled.li`
    height: 60px;
`;

export const NavLinks = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    font-size: 1.2rem;

    &.active {
        border-bottom: 3px solid #fff;
    }
    
`;



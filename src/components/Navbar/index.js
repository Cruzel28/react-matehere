import React from "react";
import Button from "./Button";
import {Link} from 'react-router-dom';

import styled from "styled-components";

const NavbarContainer = styled.div`
width: 100vw;
height: 65px;
margin: 0%;
border: 0%;
background-color: #562723;
opacity: 0.5;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction : row;
`;

const ButtonGroup = styled.span`
    display : flex;
    flex-direction : row;
    align-items: center;
`


const LogoNavbar = styled.div`
    margin: 0 1rem;
`;

function Navbar(){
    return (
     <NavbarContainer>
        <LogoNavbar>Icon </LogoNavbar>
        <ButtonGroup>
            <Link to="/" ><Button>Home</Button></Link>
            <Link to="/Havepost" ><Button>Have Post</Button></Link>
            <Link to="/Needpost" ><Button>Need Post</Button></Link>
        </ButtonGroup>
        
     </NavbarContainer>
    )
}

export default Navbar;
import React from "react";
import Button from "./Button"

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
      
`;

function Navbar(){
    return (
     <NavbarContainer>
        <div>Icon </div>
        <ButtonGroup>
        <Button>Home</Button>
        <Button>Home</Button>
        <Button>Home</Button>
        </ButtonGroup>
        
     </NavbarContainer>
    )
}

export default Navbar;
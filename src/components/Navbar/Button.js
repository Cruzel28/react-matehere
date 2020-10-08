import React from "react";
import styled from "styled-components";

const StyleButton = styled.div`
   display:flex;
    height: 65px;
   width: 100px ;
   color : white;
   align-items: center;
   font-size: 20px;
   margin: 0 .5rem;
`;

function Button({children}){
return(
    <StyleButton>{children}</StyleButton>
)
}

export default Button;
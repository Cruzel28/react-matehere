import React  from 'react'
import styled from 'styled-components'
import { FooterText } from "../components/Typography";


const Container = styled.div`
display: flex;
  width: 100%;
  z-index : 10000;
  background-color : #F98D28;
  color :  #fff ;

  justify-content: center;
  align-items: center;
`

function Footer () {

  return (
      <>
      <div>
       <Container>
         <FooterText>© 2020 Created By Team Project CAMT DII TEAM 4</FooterText>
       </Container>
   </div>
      </>
    )
}

export default Footer;
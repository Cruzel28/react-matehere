import React from 'react'
import logoImage from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import useScroll from '../../utils/useScroll'

const Container = styled.div`
  width: 100%;
  position : fixed;
  z-index : 10000;
  background-color : ${props => (props.isScroll ? '#F98D28' : 'transparent')};
  color :  #fff ;
  transition : background-color 0.5s;
  
  
 
`
const Wrapper = styled.div`
  display : flex;
  flex :1;
  padding : 1rem;  
  justify-content : flex-end ;  
  overflow-x: hidden;
  
`

const Logo = styled.span`
  font-weight: 600;
`

const Action = styled.li`
  padding : 0 1rem;  

  &:hover{
    text-shadow: 0 0 0.5rem #FFEC8B;
  }
`

const ActionContainer = styled.ul`
  display :flex;
  flex : 1 ;
  justify-content : flex-end ;
`


function NavBar () {
  const isScroll = useScroll({scrollRange:20})

  return (
  <Container isScroll={isScroll} >
    <Wrapper>
        <Logo>MateHere</Logo>
        <Logo src={logoImage}/>
        <ActionContainer>
          <Action><Link to='/' >หน้าแรก</Link></Action>
          <Action><Link to='/haveroom' >หาเมท</Link></Action>
          <Action><Link to='/needroom' >หาห้อง</Link></Action>
          <Action><Link to='/login' >เข้าสู่ระบบ</Link></Action>
          <Action><Link to='/account' >บัญชี</Link></Action>
        </ActionContainer>
    </Wrapper>

  </Container>)
}

export default NavBar;
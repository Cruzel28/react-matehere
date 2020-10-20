import React from 'react' ;
import HomeBackground from '../components/HomeBackground'


import backgroundImage1 from '../assets/bg.jpg'

import {Title ,Subtitle} from '../components/Typography'
import styled from 'styled-components'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'

const Button =  styled.button`

  padding : .5rem 1rem;
  background-color: transparent;
  border : white solid 1px;
  border-radius : 8px;  color : white;
  color : #fff;
  margin : 1rem ;
  cursor : pointer ;
  transition : background-color .3s;

  text-transform : uppercase ;

  &:hover{
    background-color: white;
    color : #000;

  }
  
`
const BackgroundImage1 = styled.div`

  height : 100vh;
  width : auto ;
  background-image : url(${props => props.src});
  background-repeat : no-repeat;
  background-size : cover ;
  background-position : center ;
  background-attachment :fixed ;


  position : relative;

`

const Input = styled.input``
// const options = [
//   'one', 'two', 'three'
// ];
// const defaultOption = options[0];

function Home () {
  return <>
        <div>
          <HomeBackground>
          <Subtitle>Easy to find your roomates</Subtitle>
          <Subtitle>with</Subtitle>
              <Title>MateHere</Title>
              <Subtitle>Search Now !</Subtitle>
             {/* <span> <Dropdown disabled onChange={this._onSelect} value={ defaultOption } placeholder="I want a room" />
              <Input placeholder="search"></Input></span> */}
              <a href="#content">or  Create your post</a>      
          </HomeBackground>
          <BackgroundImage1  id="content" src={backgroundImage1}></BackgroundImage1>
        </div>
    </>

}

export default Home;
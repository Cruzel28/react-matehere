import React from 'react' ;
import BackgroundBlock from '../components/BackgroundBlock'

import backgroundImage1 from '../assets/bg.jpg'
import searchIcon from '../assets/search.png'


import {Title ,Subtitle, SemiSubtitle} from '../components/Typography'
import styled from 'styled-components'

const TextBox = styled.div`

position : absolute;
  width : 80%;
  height : 75%;
  border : 2px solid #fff;
  
  display:flex;
  flex: 1;
  flex-direction :column;
  justify-content :center ;
  align-items : center ;
 
`

const SearchBar = styled.div`
  display: flex;
`

const InputBox = styled.input`
width: 100%;
height: fit-content;
  box-sizing: border-box;
  border: 2px solid #ccc;
 
  font-family : 'Kanit', sans-serif;
  font-size: 16px;
  background-color: #fff;
  padding: .5rem 1rem;

  &::placeholder{
    color: #ccc;
  }
`

const SearchDropdown = styled.select`
display : flex;
    width: auto;
  padding: 1rem ;
  border: none;
  background-color: #4192B0;

  color: #fff;

  font-family : 'Kanit', sans-serif;
  font-size: 1rem;

  &:hover{
    background-color: #F96C01;
    cursor: pointer;
  }

  option{
    padding: 1rem ;
    margin: 1rem;
    background-color: #fff;
    color :#000;

    &:hover{
      background-color: #FFF0CB;
      cursor: pointer;
    }
  }

`

const Button = styled.button`
display : flex;
    
  padding: 1rem ;
  border: none;
  background-color: #4192B0;
  color: #fff;

  font-family : 'Kanit', sans-serif;
  font-size: 1rem;

  &:hover{
    background-color: #F96C01;
    cursor: pointer;
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


function Home () {
  return <>
        <div>
        <BackgroundBlock>
          <TextBox>
          <Subtitle>ค้นหารูมเมทได้ง่าย ๆ</Subtitle>
          <Subtitle>ด้วย</Subtitle>
          <Title>MateHere</Title>
          <Subtitle>ค้นหาเลย !</Subtitle>

          <SearchBar>
          <SearchDropdown>
            <option>ต้องการหารูมเมท</option>
            <option>ต้องการหาห้องและรูมเมท</option>
          </SearchDropdown>
          <InputBox placeholder="ตัวอย่าง: หน้ามอ, 2คน, ตีนดอย"/>
          <Button>ค้นหา</Button>
          </SearchBar>
          <SemiSubtitle> หรือ 
            <a href="#content">  กดที่นี่เพื่อสร้างโพสต์</a>
          </SemiSubtitle>
          </TextBox>


        </BackgroundBlock>
          <BackgroundImage1  id="content" src={backgroundImage1}>
            
          </BackgroundImage1>
        </div>
    </>

}

export default Home;
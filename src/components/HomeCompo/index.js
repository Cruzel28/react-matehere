import React from "react";
import BackgroundBlock from "../BackgroundBlock";
import HomeBackground from "./HomeBackground";

import { Link } from 'react-router-dom'
import searchIcon from "../../assets/search.png";
import havePostIcon from "../../assets/haveRoom.jpg";
import NeedPostIcon from "../../assets/needRoom.jpg";

import { Title, Subtitle, SemiSubtitle } from "../Typography";
import styled from "styled-components";

const TextBox = styled.div`
  position: absolute;
  width: 70%;
  height: 60%;
  border: 2px solid #fff;

  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SearchBar = styled.div`
  display: flex;
  
`;

const InputBox = styled.input`
  width: 20rem;
  height: fit-content;
  box-sizing: border-box;
  border: 2px solid #ccc;

  font-family: "Kanit", sans-serif;
  font-size: 16px;
  background-color: #fff;
  padding: 0.5rem 1rem;

  &::placeholder {
    color: #ccc;
  }
`;

const SearchDropdown = styled.select`
  display: flex;
  position: relative;
  width: fit-content;
  height: fit-content;
  padding: 8px;
  border: none;
  background-color: #4192b0;

  color: #fff;

  font-family: "Kanit", sans-serif;
  font-size: 1rem;

  &:hover {
    background-color: #f96c01;
    cursor: pointer;
  }

  option {
    padding: 1rem;
    margin: 1rem;
    background-color: #fff;
    color: #000;

    &:hover {
      background-color: #fff0cb;
      cursor: pointer;
    }
  }
`;

const Button = styled.button`
  display: flex;
  width: 20%;
  height: -1rem;
  padding: 1rem;
  border: none;
  background-color: #4192b0;
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-size: 1rem 1.5rem;
  background-position: center;

  &:hover {
    background-color: #f96c01;
    cursor: pointer;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const Content = styled.button`
  display: flex;
  flex: 2;
  width: 100%;
  padding: 10rem;
  margin: 2rem 5rem;
  border: none;
  background-color: #4192b0;
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  &:hover {
    filter: drop-shadow(1px 1px 10px  #fff0cb );
    cursor: pointer;
    transition: filter 0.5s;
  }
`;

const Lane = styled.div`
  flex: 1;
display: flex;
flex-direction:column;
align-items: center;
  padding: 0 1rem;
`

function HomeCompo() {
  return (
    <>
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
              <InputBox placeholder="ตัวอย่าง: หน้ามอ, 2คน, ตีนดอย" />
              <Button src={searchIcon} />
            </SearchBar>
            <SemiSubtitle>
              {" "}
              หรือ
              <a href="#content"> กดที่นี่เพื่อสร้างโพสต์</a>
            </SemiSubtitle>
          </TextBox>
        </BackgroundBlock>
        <HomeBackground>
          <ContentContainer id="content">
            <Subtitle>สร้างโพสต์</Subtitle>
          </ContentContainer>
          <ContentContainer>
          <Link to="/addpost">
            <Lane>
             
            <Content  src={havePostIcon}/>
           
            <Subtitle>หารูมเมท</Subtitle>
            </Lane>
            </Link>

            <Link  to="/addpost">
            <Lane>
            <Content src={NeedPostIcon}/>
            <Subtitle>หาห้องและรูมเมท</Subtitle>
            </Lane>
            </Link>
          </ContentContainer>
        </HomeBackground>
      </div>
    </>
  );
}

export default HomeCompo;



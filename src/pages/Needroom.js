import React from "react";
import BackgroundBlock from "../components/BackgroundBlock";
import AddPost from '../assets/addpost.png'

import { TitlePost, SemiSubtitle } from "../components/Typography";
import styled from "styled-components";

const Container = styled.div`
   position: absolute;
  width: 70%;
  height: auto;
  background-color:#81C0C5;
  display: flex;
  flex: 1;
  flex-direction: row;
 
   
`
const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

`
const Content2 = styled.div`
display: flex;
  flex: 2;
  flex-direction: column;
`

const Button = styled.button`
display: flex;


  width: 45%;
  padding: 4.5rem;
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

function Needroom() {
    return (
      <>
        <div>
          <BackgroundBlock>
          <Container>
            <Content>
            <TitlePost>
           ตามหาห้องพักและรูมเมท
           </TitlePost>
          
           <SemiSubtitle>
              {" "}
              หรือ
              <a href="/haveroom"> กดที่นี่หากคุณมีห้องอยู่แล้ว</a>
              <Button src={AddPost}/>
              
            </SemiSubtitle>
            </Content>
            <Content>
              
            </Content>
          </Container>
          </BackgroundBlock>
        </div>
      </>
    );
  }
  
  export default Needroom;
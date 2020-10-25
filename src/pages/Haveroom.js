import React from "react";
import BackgroundBlock from "../components/BackgroundBlock";
import AddPost from '../assets/addpost.png'
import Post from '../assets/coverBlog.png'

import { Link } from 'react-router-dom'
import { TitlePost, SemiSubtitle } from "../components/Typography";
import styled from "styled-components";

const Container = styled.div`
   position: absolute;
  width: auto;
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
const LayoutContent = styled.div`
 flex: 1;
display: flex;
flex-direction:row;
align-items: center;
  padding: 1rem 1rem;
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

function Haveroom() {
    return (
      <>
        <div>
          <BackgroundBlock>
          <Container>
            <Content>
            <TitlePost>
           ตามหารูมเมท
           </TitlePost>
          
           <SemiSubtitle>
              {" "}
              หรือ
              <a href="/needroom"> กดที่นี่หากคุณยังไม่มีแม้กระทั่งห้อง</a>
              <LayoutContent>

                <Link to="/addpost">
              <Button src={AddPost}/>
              </Link>
              <Link to="/seepost">
              <Button src={Post}/>
              </Link>
              </LayoutContent>
              
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
  
  export default Haveroom;
import React from "react";
import AddPost from "../assets/addpost.png";
import Post from "../assets/coverBlog.png";

import { Link } from "react-router-dom";
import { AccountTitle, AccountSubTitle } from "../components/Typography";
import styled from "styled-components";

const Background = styled.div`
  height: 150vh;
  width: 100vw;
  background-color: #fbc71c;
  background-size: cover;
  background-position: center;
  background-repeat: repeat;

  position: relative;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  position: absolute;
  width: auto;
  height: 80%;
  background-color: #81c0c5;
  display: flex;
  flex: 1;
  flex-direction: row;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;

const RandomColor = styled.div`
  position: absolute;
  width: 100%;
  height: 20%;
  background-color: #ccc;
  display: flex;
  flex: 1;
  flex-direction: row;
`;

const ContentContainer = styled.div`
  font-size: 1.5rem;
  padding-bottom: 1rem;
  color: #fff;
  margin: 0.5rem;
`;

const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  z-index: 100;
  margin-left: 8.2rem;
  align-items: center;
`;
const LayoutContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1rem 1rem;
`;

const Btn = styled.button`
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
  border-radius: 50%;

  &:hover {
    filter: drop-shadow(1px 1px 10px #fff0cb);
    cursor: pointer;
    transition: filter 0.5s;
  }
`;


const Button = styled.button`
  display: flex;

  width: 4rem;
  padding: 4.5rem;
  margin-right: 2rem;

  border: none;
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  &:hover {
    filter: drop-shadow(1px 1px 10px #fff0cb);
    cursor: pointer;
    transition: filter 0.5s;
  }
`;


const LogoutBtn = styled.button`
  height: 2rem;
  width: 6rem;
  border: none;
  background-color: #f00;
  color: #fff;
  font-family: "Kanit", sans-serif;
  font-size: 14px;
  margin-top: 8.5rem;
  margin-left: 23.6rem;

  &:hover {
    background-color:#B30000;
    cursor: pointer;
   
  }
`;

function Haveroom() {
  return (
    <>
      <div>
        <Background>
          <Container>
            <RandomColor />
            <Content>
              <ContentContainer>
                <LayoutContent>
                  <Link to="#choosefile">
                    <Btn src={AddPost} />
                    <AccountTitle>username</AccountTitle>
                  </Link>
                </LayoutContent>

                <LayoutContent>
                  <Link to="/addpost">
                    <Button src={AddPost} />
                  </Link>
                  <Link to="#editpost">
                    <Button src={Post} />
                    </Link>
                </LayoutContent>

                <LayoutContent>
                  <AccountSubTitle>Contact</AccountSubTitle>
                </LayoutContent>

                <LogoutBtn>
                    <Link to="/">
                    ออกจากระบบ
                    </Link>
                    </LogoutBtn>
              </ContentContainer>
            </Content>
          </Container>
        </Background>
      </div>
    </>
  );
}

export default Haveroom;

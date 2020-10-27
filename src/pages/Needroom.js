import React, { useEffect, useState } from "react";
import BackgroundBlock from "../components/BackgroundBlock";
import AddPost from "../assets/addpost.png";
import { getNeedpost } from "../service/APIservice";
import { Link } from "react-router-dom";
import { TitlePost, SemiSubtitle } from "../components/Typography";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: auto;
  background-color: #81c0c5;
  display: flex;
  flex: 1;
  flex-direction: row;
`;
const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;
const LayoutContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1rem 1rem;
`;

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
    filter: drop-shadow(1px 1px 10px #fff0cb);
    cursor: pointer;
    transition: filter 0.5s;
  }
`;

const Description = styled.div`
  padding: 2px 16px;
`

function Needroom() {
  const [page, setPage] = useState();
  const [dataAll, setDataAll] = useState();

  useEffect(() => {
    getNeedpost(page).then((response) => setDataAll(response));
  }, [page]);

  return (
    <>
      <div>
        <BackgroundBlock>
          <Container>
            <Content>
              <TitlePost>ตามหาห้องพักและรูมเมท</TitlePost>

              <SemiSubtitle>
                {" "}
                หรือ
                <a href="/haveroom"> กดที่นี่หากคุณมีห้องอยู่แล้ว</a>
                <LayoutContent>
                  <Link to="/addpost">
                    <Button src={AddPost} />
                  </Link>
                  {dataAll?.data.data.map((item, index) => (
                  <Link to={`/seepost/${index}`}>
                    <Button src={item.cover_img_url} />
                  <Description>ประเภท :{item.need_type}<p/>ที่อยู่{item.need_location}</Description>
                  </Link>
                ))}
                </LayoutContent>
              </SemiSubtitle>
            </Content>
            <Content></Content>
          </Container>
        </BackgroundBlock>
      </div>
    </>
  );
}

export default Needroom;

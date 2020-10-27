import React, { useEffect, useState } from "react";
import BackgroundBlock from "../components/BackgroundBlock";
import AddPost from "../assets/addpost.png";
import { getNeedpost } from "../service/APIservice";
import { Link } from "react-router-dom";
import { TitlePost, SemiSubtitle } from "../components/Typography";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  width: 60%;
  height: auto;
  background-color: #81c0c5;

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
  flex:1;

  width: 45%;
  padding: 4rem;
  margin: 2rem 2rem;
  border: none;
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
   cursor: pointer;
`

const AddButton = styled.button`
display: flex;


  width: 45%;
  padding: 4.5rem;
  margin: 2rem 2.5rem;
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
const Card = styled.div`

box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;

  background-color:#004B62;
  margin: 0 1rem;

  &:hover{
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
`
const Description = styled.div`
  padding-bottom: 1rem;
  padding-left: 1rem;
`

function Needroom() {
  const [page, setPage] = useState(1);
  const [dataAll, setDataAll] = useState(null);

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
                    <AddButton src={AddPost} />
                  </Link>
                  {/* {dataAll?.data.data.map((item, index) => (
                  <Link to={`/seepost/${index}`}>
                    <Button src={item.cover_img_url} />
                  <Description>ประเภท :{item.need_type}<p/>ที่อยู่{item.need_location}</Description>
                  </Link>
                ))} */}
                    <Card>
                    <Link to={`/seepost/1`}>
                    <Button src={AddPost} />
                  <Description>ประเภท :<p/>ที่อยู่dssds</Description>
                  </Link>
                  </Card>

                  <Card>
                    <Link to={`/seepost/1`}>
                    <Button src={AddPost} />
                  <Description>ประเภท :<p/>ที่อยู่dssds</Description>
                  </Link>
                  </Card>

                   


                </LayoutContent>

                <LayoutContent>
                  <Card>
                <Link to={`/seepost/1`}>
                    <Button src={AddPost} />
                  <Description>ประเภท :<p/>ที่อยู่dssds</Description>
                  </Link>
                  </Card>

                  <Card>
                    <Link to={`/seepost/1`}>
                    <Button src={AddPost} />
                  <Description>ประเภท :<p/>ที่อยู่dssds</Description>
                  </Link>
                  </Card>

                  <Card>
                    <Link to={`/seepost/1`}>
                    <Button src={AddPost} />
                  <Description>ประเภท :<p/>ที่อยู่dssds</Description>
                  </Link>
                  </Card>
                </LayoutContent>
              </SemiSubtitle>
            </Content>

          </Container>
        </BackgroundBlock>
      </div>
    </>
  );
}

export default Needroom;

import React from 'react'
import  BackgroundBlock from '../components/BackgroundBlock';
import {Container} from '../components/Form/index'
import { TitlePost, Subtitle, SemiSubtitle } from "../components/Typography";
import Post from '../assets/coverBlog.png'
import styled from "styled-components";

const ContentBox = styled.div`
display:flex;

flex-direction:row;
`

const Content = styled.div`
display:flex;
flex:1;

`

const BoxFacilities = styled.div`

 background-color: #FBC71C;
 padding: 1.5rem 3rem ;
 margin: 1rem;
 display:flex;
 flex-direction:column;
`

const InboxContent = styled.div`

display:flex;
 flex-direction:row;
 margin-left:0;
`

function Seepost() {


    return (
        <>
        <BackgroundBlock>
            <Container>
            <TitlePost>
           ตามหารูมเมท
           </TitlePost>
           <Subtitle>#username</Subtitle>

           <ContentBox>
            <Content>
                <img src={Post}/>
                <SemiSubtitle>#detail</SemiSubtitle>
                <SemiSubtitle>#detail</SemiSubtitle>
                <SemiSubtitle>#detail</SemiSubtitle>
                <SemiSubtitle>#detail</SemiSubtitle>
                <SemiSubtitle>#detail</SemiSubtitle>
                <SemiSubtitle>#detail</SemiSubtitle>
            </Content>
           </ContentBox>

           <ContentBox>
               
                <BoxFacilities>

                <Subtitle>Room</Subtitle>

                <InboxContent>
                <SemiSubtitle>#เครื่องปรับอากาศ</SemiSubtitle>
                <SemiSubtitle>#จำนวนห้องน้ำ</SemiSubtitle>
                </InboxContent>

                <InboxContent>
                <SemiSubtitle>#จำนวนห้องนอน</SemiSubtitle>
                <SemiSubtitle>#สัตว์เลี้ยง</SemiSubtitle>
                </InboxContent>

                <InboxContent>
                <SemiSubtitle>#พื้นที่สูบบุหรี่</SemiSubtitle>
                <SemiSubtitle>#สัญญาณอินเตอร์เน็ต</SemiSubtitle>
                </InboxContent>
                
                <InboxContent>
                <SemiSubtitle>#เฟอร์นิเจอร์</SemiSubtitle>
                <SemiSubtitle>#เครื่องทำน้ำอุ่น</SemiSubtitle>
                </InboxContent>
                
                </BoxFacilities>

                <BoxFacilities>
                <Subtitle>Central</Subtitle>

                <InboxContent>
                <SemiSubtitle>#ลานจอดรภ</SemiSubtitle>
                <SemiSubtitle>#ลิฟต์</SemiSubtitle>
                </InboxContent>

                <InboxContent>
                <SemiSubtitle>#คีย์การ์ด</SemiSubtitle>
                <SemiSubtitle>#ระบบรักษาความปลอดภัย</SemiSubtitle>
                </InboxContent>

                <InboxContent>
                <SemiSubtitle>#สระว่ายน้ำ</SemiSubtitle>
                <SemiSubtitle>#ฟิตเนส</SemiSubtitle>
                </InboxContent>

                <InboxContent>
                <SemiSubtitle>#บริการซักกรีด</SemiSubtitle>
              
                </InboxContent>
                
                </BoxFacilities>
              
           </ContentBox>
            </Container>
            </BackgroundBlock>
 
        </>
    );
}

export default Seepost
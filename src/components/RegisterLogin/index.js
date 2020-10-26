import React from 'react'
import styled from 'styled-components'



export const LoginForm = styled.form`
    display: flex;
    flex: 1;
    flex-direction: column;
    padding: 1rem;

    position: relative;

`

const Background = styled.div`
 height : 130vh;
  width : 100vw ;
   background-color: #FBC71C;
   background-size : cover;
  background-position : center ;
  background-repeat : repeat;

  position: relative;

  display:flex;
  flex-direction :row;
  justify-content :center ;
  align-items : center ;
 
`

const ContainerBox = styled.div`
    position: absolute;
  width: 65%;
  height: 70%;
  background-color:#fff;
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content :center ;
  align-items : center ;
  
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 
			0 10px 10px rgba(0,0,0,0.22);
  margin: 1rem;
 
`

export const Input = styled.input`
  width: 90%;
  border: 1px solid #000;
  margin-top: 1rem;
  margin-left: 1.1rem;
  font-size: 1rem;
  font-family : 'Kanit', sans-serif;
  padding: 5px;

  &::placeholder{
    color: #ccc;
  }
`
export const InputRegister = styled.input`
  width: 90%;
  border: 1px solid #000;
  margin-top: 5px;
  margin-left: 1.1rem;
  font-size: .9rem;
  font-family : 'Kanit', sans-serif;
  padding: 5px;

  &::placeholder{
    color: #ccc;
  }
`

export const RegisterLoginImage = styled.div`

  display: flex;
    flex: 1;
    flex-direction: column;  
  height : 100%;
  width : 100% ;
  background-image : url(${props => props.src});
  background-repeat : no-repeat;
  background-size: 100% 100%;
  
`

export const Button = styled.button`

width: 10rem;
background-color: #4192B0;
color: #fff;

font-family : 'Kanit', sans-serif;
font-size: 1rem;
margin-top: 7.6rem;
margin-left: 7rem;
border: none;


text-align:center;
justify-content :center ;


 &:hover{
  background-color: #f96c01;
    cursor: pointer;
 }
`
export const RegisterButton = styled.button`

width: 10rem;
background-color: #4192B0;
color: #fff;

font-family : 'Kanit', sans-serif;
font-size: 1rem;
margin-top: 2rem;
margin-left: 7rem;
border: none;


text-align:center;
justify-content :center ;


 &:hover{
  background-color: #f96c01;
    cursor: pointer;
 }
`


export const FormContainer = styled.div`
position: absolute;
	top: 0;
	height: 100%;
	transition: all 0.6s ease-in-out;
`
export const InputContainer = styled.div`
  margin-top: 5rem;
`
export const InputContainerRe = styled.div`
  margin-top: 3rem;
`




function RegisterLogin({src,children}) {
   return (
     <Background >
     <ContainerBox>
             {children}
             </ContainerBox>
     </Background>
 
 
   )
 
 }
 export default RegisterLogin

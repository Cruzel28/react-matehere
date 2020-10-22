import React from 'react'
import backgroundImage from '../assets/background.jpg'
import styled from 'styled-components'

const BackgroundImage = styled.div`

  height : 100vh;
  width : 100vw ;
  background-image : url(${props => props.src});
  background-repeat : no-repeat;
  background-size : cover;
  background-position : center ;
  background-attachment :fixed ;
  
  position : relative;

`
const BackgroundOvertlay = styled.div`
  position : absolute;
  width : 100%;
  height : 100%;
  background-color : rgba(0,0,0,0.4);

  display:flex;
  flex-direction :column;
  justify-content :center ;
  align-items : center ;

  

`
function BackgroundBlock({src,children}) {
  return (
    <BackgroundImage src={backgroundImage} >
        <BackgroundOvertlay>
            {children}
        </BackgroundOvertlay>
    </BackgroundImage>


  )

}
export default BackgroundBlock
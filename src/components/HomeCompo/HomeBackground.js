import React from 'react'
import backgroundImage1 from '../../assets/bg.jpg'
import styled from 'styled-components'

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
function HomeBackground({src,children}) {
  return (
    <BackgroundImage1 src={backgroundImage1} >
        <BackgroundOvertlay>
            {children}
        </BackgroundOvertlay>
    </BackgroundImage1>


  )

}
export default HomeBackground
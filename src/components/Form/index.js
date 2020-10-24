import React, { useState,useContext } from 'react';
import StepForm from './StepForm'
import BackgroundBlock from '../BackgroundBlock';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import styled from 'styled-components'

import ActionForm from '../../contexts/ActionForm'

const Container = styled.div`
   position: absolute;
  width: 70%;
  height: fit;
  background-color:#81C0C5;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 4rem;
  
`

const SelectorDiv = styled.div`
   display:flex;
   flex:1;
    margin-top: .5rem;
    flex-direction :column;
  justify-content :center ;
  align-items : center ;
  color: #fff;
  font-family : 'Kanit', sans-serif;
    
`
const Selector = styled(Select)`
   width : 20vw; 
   background-color: #F9B401;
   color: #fff;
   font-family : 'Kanit', sans-serif;
`

function Form() {

    //ActionContext Form Obj State
    const { Active } = useContext(ActionForm );
    const { activeStep } = Active;
    
    //type for type form to post
    const [typePost, setTypePost] = useState("");
      
    const handleTypePost = (event) => {
        setTypePost(event.target.value);
    }

    return (
        <>
        <BackgroundBlock>
            <Container>
            <SelectorDiv>
                <FormControl >
                   
                    <InputLabel id="SelectStyle">TYPE</InputLabel>
                    
                        <Selector disabled={(activeStep !== 0 ? true : false)} id="SelectStyle" value={typePost} onChange={handleTypePost} >
                            <MenuItem value={"HavePost"}>หาเมท</MenuItem>
                            <MenuItem value={"NeedPost"}>หาห้อง</MenuItem>
                        </Selector>
                       
                </FormControl>
                <StepForm>{typePost}</StepForm>
            </SelectorDiv>
            </Container>
            </BackgroundBlock>
 
        </>
    );
}

export default Form;
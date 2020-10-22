import React, { useState,useContext } from 'react';
import StepForm from './StepForm'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import styled from 'styled-components'

import ActionForm from '../../contexts/ActionForm'

const Selector = styled(Select)`
   width : 20vw; 
`
const SelectorDiv = styled.div`
    margin-top:100px;
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
            <SelectorDiv>
                <FormControl>
                        <InputLabel id="SelectStyle">TYPE</InputLabel>
                        <Selector disabled={(activeStep !== 0 ? true : false)} id="SelectStyle" value={typePost} onChange={handleTypePost} >
                            <MenuItem value={"HavePost"}>HavePost</MenuItem>
                            <MenuItem value={"NeedPost"}>NeedPost</MenuItem>
                        </Selector>
                </FormControl>
                <StepForm>{typePost}</StepForm>
            </SelectorDiv>

        </>
    );
}

export default Form;
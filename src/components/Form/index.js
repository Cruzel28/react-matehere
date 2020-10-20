import React, { useEffect, useState,useContext } from 'react';
import StepForm from './StepForm'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import styled from 'styled-components'

import ActionForm from '../../contexts/ActionForm'

const SelectStyled = styled(Select)`
    width : 20vw;
`

function Form() {

    //ActionContext Form Obj State
    const { Active } = useContext(ActionForm );
    const { activeStep } = Active;
    
    //Disable lock list HavePost NeedPost
    const [isDisabled, setIsDisabled] = useState(false)
    //type for type form to post
    const [typePost, setTypePost] = useState("");
      
    const handleTypePost = (event) => {
        setTypePost(event.target.value);
    }


    useEffect( () => { 
        if (activeStep !== 0){
            setIsDisabled(true)
        } else {
            setIsDisabled(false)
        }
     }, [activeStep])

     
    return (
        <>
            <FormControl>
                <InputLabel >Type</InputLabel>
                <SelectStyled disabled={isDisabled} id="SelectStyle" value={typePost} onChange={handleTypePost} >
                    <MenuItem value={"HavePost"}>HavePost</MenuItem>
                    <MenuItem value={"NeedPost"}>NeedPost</MenuItem>
                </SelectStyled>

            </FormControl>
            
            <StepForm>{typePost}</StepForm>

        </>
    );
}

export default Form;
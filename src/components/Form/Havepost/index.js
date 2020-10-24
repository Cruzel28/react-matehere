import React,{useContext} from 'react';
import styled from 'styled-components';
import ActionForm from '../../../contexts/ActionForm';
import useValidator from '../../../hook/useValidator'

const Container = styled.form`
`

const BaseInput = styled.input`
  outline: none;
  padding: 0.5rem 0;
  font-size: 1rem;
`
const StyledInput = styled(BaseInput)`
  border-radius : 5px;
  border: none;
  width: 70%;
  transition: border 1s;
  &:focus {
    background-color : grey ;
  }
  &::placeholder {
    color: #aaa;
  }
`
const Button = styled.button`

`

const ErrorMassage = styled.label`
  color :red;
`

export function HavePost1() {
    //state global Step
    const {Active,Steps,HandleButton,HavePost } = useContext(ActionForm );
    const {activeStep } = Active;
    //state function handle event buttonClick steponForm );
    const { handleNext,handleBack  } = HandleButton;
    const { steps } = Steps
    //ActionContext Form Havepost Information State 
    const { infoHavePost , setInfoHavePost } = HavePost;

    const [validator, showValidationMessage] = useValidator()

    const handleSubmitFont = () => {
      if (validator.allValid()) {
        handleNext();
      } else {
        showValidationMessage(true);
      }
    };
    const handleSubmitBack = () => {
      if (validator.allValid()) {
        handleBack();
      } else {
        showValidationMessage(true);
      }
    };
 
    return (
        <>
            <Container>
              <StyledInput 
                          name={"university"}
                          onChange={(e) => {setInfoHavePost({...infoHavePost,University : e.target.value})}}
                          value={infoHavePost.University} 
                          placeholder="มหาวิทยาลัยเชียงใหม่" 
                          onBlur={( infoHavePost.University=== '' ?validator.showMessageFor("university") : '')}
                          
              />
              <ErrorMassage>{validator.message("university", infoHavePost.University, "required", {messages: {required: "กรุณากรอก"}})}</ErrorMassage>
            </Container>

            <Button onClick={handleSubmitBack} disabled={activeStep === 0} >Back</Button>
            <Button onClick={handleSubmitFont} > {activeStep === steps.length - 1 ? 'Finish' : 'Next'} </Button>            
        </>
    );
}


export function HavePost2() {
    //state global Step
    const {Active,Steps,HandleButton,HavePost } = useContext(ActionForm );
    const {activeStep } = Active;
    //state function handle event buttonClick steponForm );
    const { handleNext,handleBack  } = HandleButton;
    const { steps } = Steps
    //ActionContext Form Havepost Information State 
    const { infoHavePost , setInfoHavePost } = HavePost;

    const [validator, showValidationMessage] = useValidator()

    const handleSubmitFont = () => {
      if (validator.allValid()) {
        handleNext();
      } else {
        showValidationMessage(true);
      }
    };
    const handleSubmitBack = () => {
      if (validator.allValid()) {
        handleBack();
      } else {
        showValidationMessage(true);
      }
    };
 
    return (
        <>
            <Container>
              <StyledInput 
                          name={"university"}
                          onChange={(e) => {setInfoHavePost({...infoHavePost,University : e.target.value})}}
                          value={infoHavePost.University} 
                          placeholder="มหาวิทยาลัยเชียงใหม่" 
                          onBlur={( infoHavePost.University=== '' ?validator.showMessageFor("university") : '')}
                          
              />
              <ErrorMassage>{validator.message("university", infoHavePost.University, "required", {messages: {required: "กรุณากรอก"}})}</ErrorMassage>
            </Container>

            <Button onClick={handleSubmitBack} disabled={activeStep === 0} >Back</Button>
            <Button onClick={handleSubmitFont} > {activeStep === steps.length - 1 ? 'Finish' : 'Next'} </Button>            
        </>
    );
}
export function HavePost3() {

  
  return (
      <>

      </>
  );
}
export function HavePost4() {

  
  return (
      <>

      </>
  );
}
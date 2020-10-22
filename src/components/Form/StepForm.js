import React, { useContext} from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

import ActionForm from '../../contexts/ActionForm'

import { HavePost1,HavePost2,HavePost3,HavePost4 } from './Havepost/index';
import { NeedPost1,NeedPost2,NeedPost3,NeedPost4 } from './Needpost/index';


const StepperStyled = styled(Stepper)`
    transform: scale(0.5);
`

const ContentFormDiv = styled.div`
`

function getSteps() {
  return ['General Information', 'Personal Information', 'Central Information','Room Information'];
}

function getStepContentHavePost(stepIndex) {
  switch (stepIndex) {
    case 0:
      return <HavePost1/>;
    case 1:
      return <HavePost2/>;
    case 2:
      return <HavePost3/>;
    case 3:
        return <HavePost4/>;
    default:
      return 'Unknown stepIndex';
  }
}

function getStepContentNeedPost(stepIndex) {
    switch (stepIndex) {
      case 0:
        return <NeedPost1/>;
      case 1:
        return <NeedPost2/>;
      case 2:
        return <NeedPost3/>;
      case 3:
          return <NeedPost4/>;
      default:
        return 'Unknown stepIndex';
    }
  }


export default function StepFrom(props) {

  const {Active } = useContext(ActionForm );
  const {activeStep, setActiveStep } = Active;

  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div >
      <StepperStyled activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </StepperStyled>
      <div>
        {activeStep === steps.length ? (
          <div>
            <ContentFormDiv >All steps completed</ContentFormDiv>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <ContentFormDiv>
              {props.children === "HavePost" ? getStepContentHavePost(activeStep) : getStepContentNeedPost(activeStep) }
            </ContentFormDiv>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
              >
                Back
              </Button>
              <Button  onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

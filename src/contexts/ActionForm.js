import React, { useState, createContext } from 'react'

export const ActionForm = createContext({})

export const ActionFormProvider = ({ children }) => {

    const [activeStep, setActiveStep] = useState(0);

    const [ infoHavePost, setInfoHavePost ] = useState({ 

        University : undefined,TestInfo2 : undefined
    })

    const [infoNeedPost, setInfoNeedPost] = useState({ 
        
        TestInfo : undefined,TestInfo2 : undefined
    })

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      };
    
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    
    const handleReset = () => {
        setActiveStep(0);
    };

    
    function getSteps() {
        return ['General Information', 'Personal Information', 'Central Information','Room Information'];
    }

    const steps = getSteps();

    const InfoPost = {
        HavePost : { infoHavePost :infoHavePost, setInfoHavePost : setInfoHavePost},
        NeedPost : { infoNeedPost :infoNeedPost, setInfoNeedPost : setInfoNeedPost },
        Active : { activeStep: activeStep, setActiveStep :setActiveStep},
        HandleButton : { handleNext: handleNext, handleBack :handleBack , handleReset :handleReset },
        Steps :{steps : steps}

        
    }

        

    return <ActionForm.Provider value={InfoPost}> {children} </ActionForm.Provider>
}


export default ActionForm;
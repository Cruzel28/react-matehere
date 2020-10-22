import React, { useState, createContext } from 'react'

export const ActionForm = createContext({})

export const ActionFormProvider = ({ children }) => {

    const [activeStep, setActiveStep] = useState(0);

    const [ infoHavePost, setInfoHavePost ] = useState({ 

        University : undefined,
        TypeRoom : undefined,
        Fullcost : undefined,
        Halfcost : undefined,
        AmountOfMate : undefined,
        Location : undefined,
        Faculty : undefined,
        WantMateFaculty : undefined,
        Habit : undefined,
        WantMateHabit : undefined,
        Routine : undefined,
        Like : undefined,
        Dislike : undefined,
        Other : undefined,
    })

    const [infoNeedPost, setInfoNeedPost] = useState({ 
        
        need_university_name :undefined ,
        need_type : undefined,
        need_full_cost :undefined ,
        need_half_cost : undefined,
        need_amount_of_mate :undefined ,
        need_location : undefined,
        need_faculty : undefined,
        need_faculty_mate : undefined,
        need_habit : undefined,
        need_habit_mate : undefined,
        need_routine:undefined,
        need_like_thing : undefined,
        need_dislike : undefined,
        need_other_information : undefined,
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
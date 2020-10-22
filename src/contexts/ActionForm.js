import React, { useState, createContext } from 'react'

export const ActionForm = createContext({})

export const ActionFormProvider = ({ children }) => {

    const [activeStep, setActiveStep] = useState(0);

    const [ infoHavePost, setInfoHavePost ] = useState({ 

        TestInfo1 : undefined,TestInfo2 : undefined
    })

    const [infoNeedPost, setInfoNeedPost] = useState({ 
        
        TestInfo : undefined,TestInfo2 : undefined
    })

    const [ test, settest] = useState({ Email : undefined})

    const InfoPost = {
        HavePost : { infoHavePost :infoHavePost, setInfoHavePost : setInfoHavePost},
        NeedPost : { infoNeedPost :infoNeedPost, setInfoNeedPost : setInfoNeedPost },
        Active : { activeStep: activeStep, setActiveStep :setActiveStep},
        Test : {test: test, settest :settest}
        
    }

        

    return <ActionForm.Provider value={InfoPost}> {children} </ActionForm.Provider>
}


export default ActionForm;
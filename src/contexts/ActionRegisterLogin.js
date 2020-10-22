import React, { useState, createContext } from 'react'

export const ActionRegisterLogin = createContext({})

export const ActionRegisterLoginProvider = ({ children }) => {

    const [ infoLogin, setInfoLogin ] = useState({ 


    })

    const [infoRegister, setInRegister] = useState({ 
        
        
    })

 


    const InfoRegisterLogin = {
        LoginState : { infoLogin :infoLogin, setInfoLogin: setInfoLogin},
        RegisterState : { infoRegister :infoRegister, setInRegister : setInRegister },
        
    }
        
    return <ActionRegisterLogin.Provider value={InfoRegisterLogin}> {children} </ActionRegisterLogin.Provider>
}


export default ActionRegisterLogin;
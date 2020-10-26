import React, { useState, createContext } from 'react'

export const ActionRegisterLogin = createContext({})

export const ActionRegisterLoginProvider = ({ children }) => {

    const [ image ,setImage] = useState(null)

    const [ infoLogin, setInfoLogin ] = useState({ 
        
        username : undefined,
        password : undefined,

    })

    const [infoRegister, setInRegister] = useState({ 
        
        
    })

 


    const InfoRegisterLogin = {
        LoginState : { infoLogin :infoLogin, setInfoLogin: setInfoLogin},
        RegisterState : { infoRegister :infoRegister, setInRegister : setInRegister },
        Uploaded : {image:image ,setImage:setImage}
        
    }
        
    return <ActionRegisterLogin.Provider value={InfoRegisterLogin}> {children} </ActionRegisterLogin.Provider>
}


export default ActionRegisterLogin;
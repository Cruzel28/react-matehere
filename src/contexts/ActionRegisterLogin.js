import React, { useState, createContext } from 'react'

export const ActionRegisterLogin = createContext({})

export const ActionRegisterLoginProvider = ({ children }) => {

    const [ image ,setImage] = useState(null)

    const [ infoLogin, setInfoLogin ] = useState({ 
        
        username : undefined,
        password : undefined,

    })

    const [infoRegister, setInRegister] = useState({ 
        
        first_name:undefined,
        last_name:undefined,
        username : undefined,
        password : undefined,
        email:undefined,
        telephone_number:undefined,
        line_id:undefined,
        facebook_name:undefined,
        gender:undefined,
        profile_picture:undefined,

    })


    const InfoRegisterLogin = {
        LoginState : { infoLogin :infoLogin, setInfoLogin: setInfoLogin},
        RegisterState : { infoRegister :infoRegister, setInRegister : setInRegister },
        Uploaded : {image:image ,setImage:setImage}
        
    }
        
    return <ActionRegisterLogin.Provider value={InfoRegisterLogin}> {children} </ActionRegisterLogin.Provider>
}


export default ActionRegisterLogin;
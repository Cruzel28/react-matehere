import React,{useContext} from 'react'
import RegisterLogin,{LoginForm,RegisterLoginImage,Button,Input,InputContainer} from '../components/RegisterLogin'
import RegisterImage from '../assets/WayToRegister.png'
import { Link } from 'react-router-dom'
import { RegisterLoginTilte ,Register } from "../components/Typography";
import styled from 'styled-components'
import {login} from '../service/APIservice'
import ActionRegisterLogin from '../../src/contexts/ActionRegisterLogin'

function Login() {

    const {LoginState } = useContext(ActionRegisterLogin)
    const { infoLogin, setInfoLogin} = LoginState 

    const handleSubmited = () => {
        // login(infoLogin).then(response => )
    }


    return (

        <>
        <div>
        <RegisterLogin>
            <LoginForm>
            <RegisterLoginTilte>ลงชื่อเข้าใช้</RegisterLoginTilte>
            
            <InputContainer>
            <Input placeholder="ชื่อผู้ใช้" onChange={(event) => {setInfoLogin({infoLogin,username : event.target.value})} }/>
            <Input placeholder="รหัสผ่าน" onChange={(event) => {setInfoLogin({infoLogin,password : event.target.value})} }/>
            </InputContainer>

            <Button>ลงชื่อเข้าใช้</Button>
            </LoginForm>

          
            <RegisterLoginImage src={RegisterImage}>
            
                <Register>
                    <Link to="/register">ลงทะเบียน</Link>
                    </Register>
        
            </RegisterLoginImage>
            
        </RegisterLogin>
            
        </div>
        </>
    )
}

export default Login
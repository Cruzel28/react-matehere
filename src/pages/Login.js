import React from 'react'

import RegisterLogin,{LoginForm,RegisterLoginImage,Button,Input,InputContainer} from '../components/RegisterLogin'
import RegisterImage from '../assets/WayToRegister.png'

import { Link } from 'react-router-dom'
import { RegisterLoginTilte ,Register } from "../components/Typography";
import styled from 'styled-components'



function Login() {

    return (

        <>
        <div>
        <RegisterLogin>
            <LoginForm>
            <RegisterLoginTilte>ลงชื่อเข้าใช้</RegisterLoginTilte>
            
            <InputContainer>
            <Input placeholder="ชื่อผู้ใช้"/>
            <Input placeholder="รหัสผ่าน"/>
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
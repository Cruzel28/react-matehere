import React from 'react'

import RegisterLogin,{LoginForm,RegisterLoginImage,Button,Input,InputContainer} from '../components/RegisterLogin'
import LoginImage from '../assets/WayToLogin.png'

import { Link } from 'react-router-dom'
import { RegisterLoginTilte ,Register } from "../components/Typography";




function RegisterP() {

    return (

        <>
        <div>
        <RegisterLogin>
            <RegisterLoginImage src={LoginImage}>
            
                <Register>
                    <Link to="/login">เข้าสู่ระบบ</Link>
                    </Register>
        
            </RegisterLoginImage>
            <LoginForm>
            <RegisterLoginTilte>ลงทะเบียน</RegisterLoginTilte>
            
            <InputContainer>
            <Input placeholder="ชื่อ-นามสกุล"/>
            <Input placeholder="ชื่อผู้ใช้"/>
            </InputContainer>
                
            
            <Button>
                <Link to="/register2">ถัดไป</Link>
                </Button>
            </LoginForm>

          
            
        </RegisterLogin>
            
        </div>
        </>
    )
}

export default RegisterP
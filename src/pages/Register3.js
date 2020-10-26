import React from 'react'

import RegisterLogin,{LoginForm,RegisterLoginImage,Button,Input,InputContainer} from '../components/RegisterLogin'
import LoginImage from '../assets/WayToLogin.png'

import { Link } from 'react-router-dom'
import { RegisterLoginTilte ,Register } from "../components/Typography";



function Register2() {

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
            <Input  placeholder="อีเมลล์"/>
            <Input  placeholder="เบอร์โทรศัพท์"/>
            </InputContainer>
                

            <Button><Link to="/register4">ถัดไป</Link></Button>
            </LoginForm>

          
            
        </RegisterLogin>
            
        </div>
        </>
    )
}

export default Register2
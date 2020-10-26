import React from 'react'

import RegisterLogin,{LoginForm,RegisterLoginImage,RegisterButton,InputRegister,InputContainerRe} from '../components/RegisterLogin'
import LoginImage from '../assets/WayToLogin.png'

import { Link } from 'react-router-dom'
import { RegisterLoginTilte ,Login } from "../components/Typography";




function RegisterP() {

    return (

        <>
        <div>
        <RegisterLogin>
            <RegisterLoginImage src={LoginImage}>
            
                <Login>
                    <Link to="/login">เข้าสู่ระบบ</Link>
                    </Login>
        
            </RegisterLoginImage>
            <LoginForm>
            <RegisterLoginTilte>ลงทะเบียน</RegisterLoginTilte>
            
            <InputContainerRe>
            <InputRegister placeholder="ชื่อ-นามสกุล"/>
            <InputRegister placeholder="ชื่อผู้ใช้"/>
            <InputRegister type="password" placeholder="รหัสผ่าน"/>
            <InputRegister type="password" placeholder="ยืนยันรหัสผ่าน"/>
            <InputRegister  placeholder="อีเมลล์"/>
            <InputRegister  placeholder="เบอร์โทรศัพท์"/>
            <InputRegister  placeholder="Facebook"/>
            <InputRegister  placeholder="LineID"/>
            </InputContainerRe>
                
            <RegisterButton>ลงทะเบียน</RegisterButton>
            </LoginForm>

          
            
        </RegisterLogin>
            
        </div>
        </>
    )
}

export default RegisterP
import React,{useCallback, useContext, useState} from 'react'

import RegisterLogin,{LoginForm,RegisterLoginImage,RegisterButton,InputRegister,InputContainerRe} from '../components/RegisterLogin'
import LoginImage from '../assets/WayToLogin.png'

import { Link } from 'react-router-dom'
import { RegisterLoginTilte ,Login } from "../components/Typography";
import {register,storeImg} from '../service/APIservice'
import ActionRegisterLogin from '../../src/contexts/ActionRegisterLogin'



function RegisterP() {

    const [ img,setImg ] = useState(null)
    const {RegisterState } = useContext(ActionRegisterLogin)
    const { infoRegister, setInRegister} = RegisterState 

    const handleSubmited = (e) => {
        e.preventDefault() 
        register(infoRegister,"http://127.0.0.1:3333/api/v1/assets/1603734138408.jpg")
    }

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
            <InputRegister placeholder="ชื่อ"onChange={(event) => {setInRegister({infoRegister,first_name : event.target.value})} }/>
            <InputRegister placeholder="นามสกุล"onChange={(event) => {setInRegister({infoRegister,last_name : event.target.value})} }/>
            <InputRegister placeholder="ชื่อผู้ใช้"onChange={(event) => {setInRegister({infoRegister,username : event.target.value})} }/>
            <InputRegister type="password" placeholder="รหัสผ่าน"onChange={(event) => {setInRegister({infoRegister,password : event.target.value})} }/>
            <InputRegister type="password" placeholder="ยืนยันรหัสผ่าน" />
            <InputRegister  placeholder="อีเมลล์"onChange={(event) => {setInRegister({infoRegister,email : event.target.value})} }/>
            <InputRegister  placeholder="เบอร์โทรศัพท์" onChange={(event) => {setInRegister({infoRegister,telephone_number : event.target.value})} }/>
            <InputRegister  placeholder="LineID"onChange={(event) => {setInRegister({infoRegister,line_id : event.target.value})} }/>
            <InputRegister  placeholder="Facebook" onChange={(event) => {setInRegister({infoRegister,facebook_name : event.target.value})} }/>
            <InputRegister  placeholder="เพศ" onChange={(event) => {setInRegister({infoRegister,gender : event.target.value})} }/>
            <InputRegister type="file" onChange={(event) => {setInRegister({infoRegister,profile_picture: event.target.files[0]})}} />
            </InputContainerRe>
                
            <RegisterButton onClick={(e) => handleSubmited(e) }>ลงทะเบียน</RegisterButton>
            </LoginForm>

          
            
        </RegisterLogin>
            
        </div>
        </>
    )
}

export default RegisterP
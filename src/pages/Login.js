import React from 'react'

import RegisterLogin,{RegisterLoginImage,Button,Input} from '../components/RegisterLogin'
import RegisterImage from '../assets/WayToRegister.png'

import { Link } from 'react-router-dom'
import { RegisterLoginTilte ,Register } from "../components/Typography";
import styled from 'styled-components'


const LoginForm = styled.form`
    display: flex;
    flex: 1;
    flex-direction: column;
    padding: 1rem;

    position: relative;

    transition: all 0.6s ease-in-out;

`




function Login() {

    return (

        <>
        <div>
        <RegisterLogin>
            <LoginForm>
            <RegisterLoginTilte>ลงชื่อเข้าใช้</RegisterLoginTilte>
            
            <Input placeholder="Username"/>
            <Input placeholder="Password"/>
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
import React,{useContext} from 'react';
import { Formik, Form, Field} from 'formik'
import * as yup from "yup";
import TextField from '@material-ui/core/TextField'

import Button from '@material-ui/core/Button';
import styled from 'styled-components'


import ActionForm from '../../../contexts/ActionForm'

const accountSchema = yup.object().shape({
    email: yup
        .string()
        .email('Invalid email.')
        .required('This field is required.')
});


export function HavePost1() {

    //ActionContext Form Obj State
    const { Test } = useContext(ActionForm );
    const { test,settest } = Test;


    return (
        
        <>
            <Formik
                    initialValues={{ //กำหนด initialValues
                        email: ''
                    }}
                    validationSchema={accountSchema} //กำหนด validationSchema
                    
                    onSubmit={values => {
                        settest({Email : values.email})
                      }}
            >
                { props => (
                    <Form >
                            <Field
                                name="email"
                                render={ () => (
                                    <TextField 
                                        id="outlined-error-helper-text"
                                        variant="outlined"
                                        label="Email"
                                        name={"email"}
                                        error= { 
                                            Boolean(props.errors.email && props.touched.email)
                                        }
                                        defaultValue={test.Email}
                                        onChange={props.handleChange}
                                        onBlur={props.handleBlur}
                                        helperText={
                                            (props.touched.email && props.errors.email ? String(props.errors.email) : '')
                                        }
                                    />  
                                )}
                            />
                            <Button type="submit" >KKKKKKKKKKK</Button>
                    </Form>
                )}
            </Formik>
        </>
    );
}
export function HavePost2() {
    return (
        <div>

        </div>
    );
}
export function HavePost3() {
    return (
        <div>

        </div>
    );
}
export function HavePost4() {
    return (
        <div>

        </div>
    );
}


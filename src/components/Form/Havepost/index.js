import React,{useContext} from 'react';
import { Formik, Form, Field} from 'formik'
import * as Yup from 'yup';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import styled from 'styled-components'


import ActionForm from '../../../contexts/ActionForm'

const accountSchema = Yup.object().shape({
    university : Yup.string().required('This field is required.')
});


export function HavePost1() {
    //state global Step
    const {Active,Steps,HandleButton,HavePost } = useContext(ActionForm );

    const {activeStep } = Active;
    //state function handle event buttonClick steponForm );
    const { handleNext,handleBack  } = HandleButton;

    const { steps } = Steps

    //ActionContext Form Havepost Information State 
    const { infoHavePost , setInfoHavePost } = HavePost;


    return (
        
        <>
            <Formik
                    initialValues={{ //กำหนด initialValues
                        university: '',
                    }}
                    validationSchema={accountSchema} //กำหนด validationSchema
                    
                    onSubmit={values => {
                        setInfoHavePost(...infoHavePost,{University : values.university})
                      }}
            >
                { props => (
                    <Form >
                            <Field
                                name="university"
                                render={ () => (
                                    <TextField 
                                        id="outlined-error-helper-text"
                                        variant="outlined"
                                        label="University"
                                        name={"university"}
                                        error= { 
                                            Boolean(props.errors.university  && props.touched.university )
                                        }
                                        defaultValue={infoHavePost.University}
                                        onChange={props.handleChange}
                                        onBlur={props.handleBlur}
                                        helperText={
                                            (props.touched.university  && props.errors.university  ? String(props.errors.university ) : '')
                                        }
                                    />  
                                )}
                            />
                        <Button disabled={activeStep === 0} onClick={handleBack}>Back</Button>
                        <Button  onClick={handleNext}> {activeStep === steps.length - 1 ? 'Finish' : 'Next'} </Button>
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


import React,{useContext} from 'react';
import { Formik, Form, Field} from 'formik'
import * as Yup from 'yup';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import styled from 'styled-components'

import ActionForm from '../../../contexts/ActionForm'

const NeedPostSchema = Yup.object().shape({

});


export function NeedPost1() {

    //state global Step
    const {Active,Steps,HandleButton,NeedPost } = useContext(ActionForm );

    const {activeStep } = Active;
    //state function handle event buttonClick steponForm );
    const { handleNext,handleBack  } = HandleButton;

    const { steps } = Steps

    //ActionContext Form Havepost Information State 
    const { infoNeedPost , setInfoNeedPost } = NeedPost;

    return (
        
        <>
            <Formik
                    initialValues={{ //กำหนด initialValues
  
                    }}
                    validationSchema={NeedPostSchema} //กำหนด validationSchema
                    
                    onSubmit={values => {
                        setInfoNeedPost()
                      }}
            >
                { props => (
                    <Form >

                        <Button disabled={activeStep === 0} onClick={handleBack}>Back</Button>
                        <Button  onClick={handleNext}> {activeStep === steps.length - 1 ? 'Finish' : 'Next'} </Button>
                    </Form>
                )}
            </Formik>
        </>
    );
}
export function NeedPost2() {
    return (
        <div>
            Need 2
        </div>
    );
}
export function NeedPost3() {
    return (
        <div>
            Need 3
        </div>
    );
}
export function NeedPost4() {
    return (
        <div>
            Need 4
        </div>
    );
}

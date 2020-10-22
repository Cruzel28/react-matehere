import React,{useContext} from 'react';
import { Formik, Form, Field} from 'formik'
import * as Yup from 'yup';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import styled from 'styled-components'


import ActionForm from '../../../contexts/ActionForm'

const accountSchema = Yup.object().shape({
    university : Yup.string().required('This field is required.'),
    typeroom : Yup.string().required('This field is required.'),
    fullcost : Yup.string().required('This field is required.'),
    halfcost : Yup.string().required('This field is required.'),
    amountofmate : Yup.string().required('This field is required.'),
    location : Yup.string().required('This field is required.'),
    faculty : Yup.string().required('This field is required.'),
    wantmatefaculty : Yup.string().required('This field is required.'),
    habit : Yup.string().required('This field is required.'),
    wantmatehabit : Yup.string().required('This field is required.'),
    routine : Yup.string().required('This field is required.'),
    like : Yup.string().required('This field is required.'),
    dislike : Yup.string().required('This field is required.'),
    other : Yup.string().required('This field is required.'),
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
                        typeroom : '',
                        fullcost : '',
                        halfcost : '',
                        amountofmate : '',
                        location : '',
                    }}
                    validationSchema={accountSchema} //กำหนด validationSchema
                    
                    onSubmit={values => {
                        setInfoHavePost({University : values.university},{ TypeRoom : values.typeroom},
                            { Fullcost : values.fullcost},{ Halfcost: values.halfcost},
                            { AmountOfMate : values.amountofmate},{ Location : values.location})
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
                                        label="มหาวิทยาลัย"
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

                            <Field
                                name="typeroom"
                                render={ () => (
                                    <TextField 
                                        id="outlined-error-helper-text"
                                        variant="outlined"
                                        label="ประเภทห้อง (เช่น คอนโด)"
                                        name={"typeroom"}
                                        error= { 
                                            Boolean(props.errors.typeroom  && props.touched.typeroom )
                                        }
                                        defaultValue={infoHavePost.Typeroom}
                                        onChange={props.handleChange}
                                        onBlur={props.handleBlur}
                                        helperText={
                                            (props.touched.typeroom  && props.errors.typeroom  ? String(props.errors.typeroom ) : '')
                                        }
                                    />  
                                    
                                )}
                            />

                            <Field
                                name="fullcost"
                                render={ () => (
                                    <TextField 
                                        id="outlined-error-helper-text"
                                        variant="outlined"
                                        label="ราคาเต็ม"
                                        name={"fullcost"}
                                        error= { 
                                            Boolean(props.errors.fullcost  && props.touched.fullcost )
                                        }
                                        defaultValue={infoHavePost.Fullcost}
                                        onChange={props.handleChange}
                                        onBlur={props.handleBlur}
                                        helperText={
                                            (props.touched.fullcost  && props.errors.fullcost  ? String(props.errors.fullcost ) : '')
                                        }
                                    />  
                                    
                                )}
                            />

                            <Field
                                name="halfcost"
                                render={ () => (
                                    <TextField 
                                        id="outlined-error-helper-text"
                                        variant="outlined"
                                        label="ราคาหาร"
                                        name={"halfcost"}
                                        error= { 
                                            Boolean(props.errors.halfcost  && props.touched.halfcost )
                                        }
                                        defaultValue={infoHavePost.Halfcost}
                                        onChange={props.handleChange}
                                        onBlur={props.handleBlur}
                                        helperText={
                                            (props.touched.halfcost  && props.errors.halfcost  ? String(props.errors.halfcost ) : '')
                                        }
                                    />  
                                    
                                )}
                            />

                            <Field
                                name="amountofmate"
                                render={ () => (
                                    <TextField 
                                        id="outlined-error-helper-text"
                                        variant="outlined"
                                        label="จำนวนเมทที่ต้องการ"
                                        name={"amountofmate"}
                                        error= { 
                                            Boolean(props.errors.amountofmate  && props.touched.amountofmate )
                                        }
                                        defaultValue={infoHavePost.AmountOfMate}
                                        onChange={props.handleChange}
                                        onBlur={props.handleBlur}
                                        helperText={
                                            (props.touched.amountofmate  && props.errors.amountofmate  ? String(props.errors.amountofmate ) : '')
                                        }
                                    />  
                                    
                                )}
                            />

                            <Field
                                name="location"
                                render={ () => (
                                    <TextField 
                                        id="outlined-error-helper-text"
                                        variant="outlined"
                                        label="ที่ตั้ง"
                                        name={"location"}
                                        error= { 
                                            Boolean(props.errors.location  && props.touched.location )
                                        }
                                        defaultValue={infoHavePost.Location}
                                        onChange={props.handleChange}
                                        onBlur={props.handleBlur}
                                        helperText={
                                            (props.touched.location  && props.errors.location  ? String(props.errors.location ) : '')
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
                       faculty: '',
                       wantmatefaculty: '',
                       habit: '',
                       wantmatehabit: '',
                       routine: '',
                       like: '',
                       dislike: '',
                       other: '',
                    }}
                    validationSchema={accountSchema} //กำหนด validationSchema
                    
                    onSubmit={values => {
                        setInfoHavePost({Faculty : values.faculty},{ Wantmatefaculty: values.wantmatefaculty},
                           { Habit: values.habit},
                            { Wantmatehabit: values.wantmatehabit},
                            { Routine: values.routine},
                            { Like: values.like},
                            { Dislike: values.dislike},
                            { Other: values.other},
                            )
                      }}
            >
                { props => (
                    <Form >

                            <Field
                                name="faculty"
                                render={ () => (
                                    <TextField 
                                        id="outlined-error-helper-text"
                                        variant="outlined"
                                        label="คณะ"
                                        name={"faculty"}
                                        error= { 
                                            Boolean(props.errors.faculty  && props.touched.faculty )
                                        }
                                        defaultValue={infoHavePost.Faculty}
                                        onChange={props.handleChange}
                                        onBlur={props.handleBlur}
                                        helperText={
                                            (props.touched.faculty  && props.errors.faculty  ? String(props.errors.faculty ) : '')
                                        }
                                    />  
                                )}
                            />

                            <Field
                                name="wantmatefaculty"
                                render={ () => (
                                    <TextField 
                                        id="outlined-error-helper-text"
                                        variant="outlined"
                                        label="คณะของรูมเมท"
                                        name={"wantmatefaculty"}
                                        error= { 
                                            Boolean(props.errors.wantmatefaculty  && props.touched.wantmatefaculty )
                                        }
                                        defaultValue={infoHavePost.Wantmatefaculty}
                                        onChange={props.handleChange}
                                        onBlur={props.handleBlur}
                                        helperText={
                                            (props.touched.wantmatefaculty  && props.errors.wantmatefaculty  ? String(props.errors.wantmatefaculty ) : '')
                                        }
                                    />  
                                )}
                            />
                            
                            <Field
                                name="habit"
                                render={ () => (
                                    <TextField 
                                        id="outlined-error-helper-text"
                                        variant="outlined"
                                        label="ลักษณะนิสัย"
                                        name={"habit"}
                                        error= { 
                                            Boolean(props.errors.habit  && props.touched.habit )
                                        }
                                        defaultValue={infoHavePost.Habit}
                                        onChange={props.handleChange}
                                        onBlur={props.handleBlur}
                                        helperText={
                                            (props.touched.habit  && props.errors.habit  ? String(props.errors.habit ) : '')
                                        }
                                    />  
                                )}
                            />

                            <Field
                                name="wantmatehabit"
                                render={ () => (
                                    <TextField 
                                        id="outlined-error-helper-text"
                                        variant="outlined"
                                        label="นิสัยเมทที่ต้องการ"
                                        name={"wantmatehabit"}
                                        error= { 
                                            Boolean(props.errors.wantmatehabit  && props.touched.wantmatehabit )
                                        }
                                        defaultValue={infoHavePost.Wantmatehabit}
                                        onChange={props.handleChange}
                                        onBlur={props.handleBlur}
                                        helperText={
                                               (props.touched.wantmatehabit  && props.errors.wantmatehabit  ? String(props.errors.wantmatehabit ) : '')
                                        }
                                    />  
                                )}
                            />

                            <Field
                                name="routine"
                                render={ () => (
                                    <TextField 
                                        id="outlined-error-helper-text"
                                        variant="outlined"
                                        label="กิจวัตรประจำวัน"
                                        name={"routine"}
                                        error= { 
                                            Boolean(props.errors.routine  && props.touched.routine )
                                        }
                                        defaultValue={infoHavePost.Routine}
                                        onChange={props.handleChange}
                                        onBlur={props.handleBlur}
                                        helperText={
                                            (props.touched.routine  && props.errors.routine  ? String(props.errors.routine ) : '')
                                        }
                                    />  
                                )}
                            />

                            <Field
                                name="like"
                                render={ () => (
                                    <TextField 
                                        id="outlined-error-helper-text"
                                        variant="outlined"
                                        label="สิ่งที่ชอบ"
                                        name={"like"}
                                        error= { 
                                            Boolean(props.errors.like  && props.touched.like )
                                        }
                                        defaultValue={infoHavePost.Like}
                                        onChange={props.handleChange}
                                        onBlur={props.handleBlur}
                                        helperText={
                                            (props.touched.like  && props.errors.like  ? String(props.errors.like ) : '')
                                        }
                                    />  
                                )}
                            />

                            <Field
                                name="dislike"
                                render={ () => (
                                    <TextField 
                                        id="outlined-error-helper-text"
                                        variant="outlined"
                                        label="สิ่งที่ไม่ชอบ"
                                        name={"dislike"}
                                        error= { 
                                            Boolean(props.errors.dislike  && props.touched.dislike )
                                        }
                                        defaultValue={infoHavePost.Dislike}
                                        onChange={props.handleChange}
                                        onBlur={props.handleBlur}
                                        helperText={
                                            (props.touched.dislike  && props.errors.dislike  ? String(props.errors.dislike ) : '')
                                        }
                                    />  
                                )}
                            />
                            
                            <Field
                                name="other"
                                render={ () => (
                                    <TextField 
                                        id="outlined-error-helper-text"
                                        variant="outlined"
                                        label="อื่นๆ"
                                        name={"other"}
                                        error= { 
                                            Boolean(props.errors.other  && props.touched.other )
                                        }
                                        defaultValue={infoHavePost.Other}
                                        onChange={props.handleChange}
                                        onBlur={props.handleBlur}
                                        helperText={
                                            (props.touched.other  && props.errors.other  ? String(props.errors.other ) : '')
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


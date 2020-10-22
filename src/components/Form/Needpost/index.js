import React,{useContext} from 'react';
import { Formik, Form, Field} from 'formik'
import * as Yup from 'yup';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import BackgroundBlock from '../../BackgroundBlock';
import styled from 'styled-components'

import ActionForm from '../../../contexts/ActionForm'



const NeedPostSchema = Yup.object().shape({
    needuniversityname :Yup.string().required('This field is required.'),
    needtype : Yup.string().required('This field is required.'),
    needfullcost :Yup.string().required('This field is required.'),
    needhalfcost : Yup.string().required('This field is required.'),
    needamountofmate :Yup.string().required('This field is required.'),
    needlocation : Yup.string().required('This field is required.'),
    needfaculty : Yup.string().required('This field is required.'),
    needfacultymate : Yup.string().required('This field is required.'),
    needhabit : Yup.string().required('This field is required.'),
    needhabitmate : Yup.string().required('This field is required.'),
    needroutine:Yup.string().required('This field is required.'),
    needlikething : Yup.string().required('This field is required.'),
    needdislike : Yup.string().required('This field is required.'),
    needotherinformation : Yup.string().required('This field is required.'),
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
        <BackgroundBlock>
       
            <Formik
                    initialValues={{ //กำหนด initialValues
                        needuniversityname: '',
                        needtype: '',
                        needfullcost: '',
                        needhalfcost: '',
                        needamountofmate: '',
                        need_location: '',
                    }}
                    validationSchema={NeedPostSchema} //กำหนด validationSchema
                    
                    onSubmit={values => {
                        setInfoNeedPost(
                            { need_university_name: values.needuniversityname},
                            { need_type: values.needtype},
                            { need_full_cost: values.needfullcost},
                            { need_half_cost: values.needhalfcost},
                            { need_amount_of_mate: values.needamountofmate},
                            { need_location: values.needlocation},
                        )
                      }}
            >
                { props => (
                    <Form >
                        <Field
                                name="needuniversityname"
                                render={ () => (
                                    <TextField 
                                        id="outlined-error-helper-text"
                                        variant="outlined"
                                        label="มหาวิทยาลัย"
                                        name={"needuniversityname"}
                                        error= { 
                                            Boolean(props.errors.needuniversityname  && props.touched.needuniversityname )
                                        }
                                        defaultValue={infoNeedPost.need_university_name}
                                        onChange={props.handleChange}
                                        onBlur={props.handleBlur}
                                        helperText={
                                            (props.touched.needuniversityname  && props.errors.needuniversityname  ? String(props.errors.needuniversityname ) : '')
                                        }
                                    />  
                                )}
                            />


                            <Field
                                name="needtype"
                                render={ () => (
                                    <TextField 
                                        id="outlined-error-helper-text"
                                        variant="outlined"
                                        label="ประเภทห้องที่ต้องการ (เช่น คอนโด)"
                                        name={"needtype"}
                                        error= { 
                                            Boolean(props.errors.needtype  && props.touched.needtype )
                                        }
                                        defaultValue={infoNeedPost.need_type}
                                        onChange={props.handleChange}
                                        onBlur={props.handleBlur}
                                        helperText={
                                            (props.touched.needtype  && props.errors.needtype  ? String(props.errors.needtype ) : '')
                                        }
                                    />  
                                    
                                )}
                            />

                            <Field
                                name="needfullcost"
                                render={ () => (
                                    <TextField 
                                        id="outlined-error-helper-text"
                                        variant="outlined"
                                        label="ราคาเต็ม"
                                        name={"needfullcost"}
                                        error= { 
                                            Boolean(props.errors.needfullcost  && props.touched.needfullcost )
                                        }
                                        defaultValue={infoNeedPost.need_full_cost}
                                        onChange={props.handleChange}
                                        onBlur={props.handleBlur}
                                        helperText={
                                            (props.touched.needfullcost  && props.errors.needfullcost  ? String(props.errors.needfullcost ) : '')
                                        }
                                    />  
                                    
                                )}
                            />

                            <Field
                                name="needhalfcost"
                                render={ () => (
                                    <TextField 
                                        id="outlined-error-helper-text"
                                        variant="outlined"
                                        label="ราคาหาร"
                                        name={"needhalfcost"}
                                        error= { 
                                            Boolean(props.errors.needhalfcost  && props.touched.needhalfcost )
                                        }
                                        defaultValue={infoNeedPost.need_half_cost}
                                        onChange={props.handleChange}
                                        onBlur={props.handleBlur}
                                        helperText={
                                            (props.touched.needhalfcost  && props.errors.needhalfcost  ? String(props.errors.needhalfcost ) : '')
                                        }
                                    />  
                                    
                                )}
                            />

                            <Field
                                name="needamountofmate"
                                render={ () => (
                                    <TextField 
                                        id="outlined-error-helper-text"
                                        variant="outlined"
                                        label="จำนวนเมทที่ต้องการ"
                                        name={"needamountofmate"}
                                        error= { 
                                            Boolean(props.errors.needamountofmate  && props.touched.needamountofmate )
                                        }
                                        defaultValue={infoNeedPost.need_amount_of_mate}
                                        onChange={props.handleChange}
                                        onBlur={props.handleBlur}
                                        helperText={
                                            (props.touched.needamountofmate  && props.errors.needamountofmate  ? String(props.errors.needamountofmate ) : '')
                                        }
                                    />  
                                    
                                )}
                            />

                            <Field
                                name="needlocation"
                                render={ () => (
                                    <TextField 
                                        id="outlined-error-helper-text"
                                        variant="outlined"
                                        label="ที่ตั้งที่ต้องการ"
                                        name={"needlocation"}
                                        error= { 
                                            Boolean(props.errors.needlocation  && props.touched.needlocation )
                                        }
                                        defaultValue={infoNeedPost.need_location}
                                        onChange={props.handleChange}
                                        onBlur={props.handleBlur}
                                        helperText={
                                            (props.touched.needlocation  && props.errors.needlocation  ? String(props.errors.needlocation ) : '')
                                        }
                                    />  
                                    
                                )}
                            />

                        <Button disabled={activeStep === 0} onClick={handleBack}>Back</Button>
                        <Button  onClick={handleNext}> {activeStep === steps.length - 1 ? 'Finish' : 'Next'} </Button>
                    </Form>
                )}
            </Formik>
        
    
        
        </BackgroundBlock>
    );
}
export function NeedPost2() {

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
        <BackgroundBlock>
            <Formik
                    initialValues={{ //กำหนด initialValues
                       needfaculty: '',
                       needfacultymate: '',
                       needhabit: '',
                       needhabitmate: '',
                       needroutine: '',
                       needlikething: '',
                       needdislike: '',
                       needotherinformation: '',
                    }}
                    validationSchema={NeedPostSchema} //กำหนด validationSchema
                    
                    onSubmit={values => {
                        setInfoNeedPost(
                            {need_faculty : values.needfaculty},
                            { need_faculty_mate: values.needfacultymate},
                           { need_habit: values.needhabit},
                            { need_habit_mate: values.needhabitmate},
                            { need_routine: values.needroutine},
                            { need_like_thing: values.needlike},
                            { need_dislike: values.dislike},
                            { need_other_information: values.other},
                            )
                      }}
            >
                { props => (
                    <Form >
                        <Field
                                name="needfaculty"
                                render={ () => (
                                    <TextField 
                                        id="outlined-error-helper-text"
                                        variant="outlined"
                                        label="คณะ"
                                        name={"needfaculty"}
                                        error= { 
                                            Boolean(props.errors.needfaculty  && props.touched.needfaculty )
                                        }
                                        defaultValue={infoNeedPost.need_faculty}
                                        onChange={props.handleChange}
                                        onBlur={props.handleBlur}
                                        helperText={
                                            (props.touched.needfaculty  && props.errors.needfaculty  ? String(props.errors.needfaculty ) : '')
                                        }
                                    />  
                                )}
                            />

                            <Field
                                name="needfacultymate"
                                render={ () => (
                                    <TextField 
                                        id="outlined-error-helper-text"
                                        variant="outlined"
                                        label="คณะของรูมเมท"
                                        name={"needfacultymate"}
                                        error= { 
                                            Boolean(props.errors.needfacultymate  && props.touched.needfacultymate )
                                        }
                                        defaultValue={infoNeedPost.need_faculty_mate}
                                        onChange={props.handleChange}
                                        onBlur={props.handleBlur}
                                        helperText={
                                            (props.touched.needfacultymate  && props.errors.needfacultymate  ? String(props.errors.needfacultymate ) : '')
                                        }
                                    />  
                                )}
                            /> 

                            <Field
                                name="needhabit"
                                render={ () => (
                                    <TextField 
                                        id="outlined-error-helper-text"
                                        variant="outlined"
                                        label="ลักษณะนิสัย"
                                        name={"needhabit"}
                                        error= { 
                                            Boolean(props.errors.needhabit  && props.touched.needhabit )
                                        }
                                        defaultValue={infoNeedPost.need_habit}
                                        onChange={props.handleChange}
                                        onBlur={props.handleBlur}
                                        helperText={
                                            (props.touched.needhabit  && props.errors.needhabit  ? String(props.errors.needhabit ) : '')
                                        }
                                    />  
                                )}
                            />

                            <Field
                                name="needhabitmate"
                                render={ () => (
                                    <TextField 
                                        id="outlined-error-helper-text"
                                        variant="outlined"
                                        label="นิสัยเมทที่ต้องการ"
                                        name={"needhabitmate"}
                                        error= { 
                                            Boolean(props.errors.needhabitmate  && props.touched.needhabitmate )
                                        }
                                        defaultValue={infoNeedPost.need_habit_mate}
                                        onChange={props.handleChange}
                                        onBlur={props.handleBlur}
                                        helperText={
                                               (props.touched.needhabitmate  && props.errors.needhabitmate  ? String(props.errors.needhabitmate ) : '')
                                        }
                                    />  
                                )}
                            />

                            <Field
                                name="needroutine"
                                render={ () => (
                                    <TextField 
                                        id="outlined-error-helper-text"
                                        variant="outlined"
                                        label="กิจวัตรประจำวัน"
                                        name={"needroutine"}
                                        error= { 
                                            Boolean(props.errors.needroutine  && props.touched.needroutine )
                                        }
                                        defaultValue={infoNeedPost.need_routine}
                                        onChange={props.handleChange}
                                        onBlur={props.handleBlur}
                                        helperText={
                                            (props.touched.needroutine  && props.errors.needroutine  ? String(props.errors.needroutine ) : '')
                                        }
                                    />  
                                )}
                            />

<Field
                                name="needlikething"
                                render={ () => (
                                    <TextField 
                                        id="outlined-error-helper-text"
                                        variant="outlined"
                                        label="สิ่งที่ชอบ"
                                        name={"needlikething"}
                                        error= { 
                                            Boolean(props.errors.needlikething  && props.touched.needlikething )
                                        }
                                        defaultValue={infoNeedPost.need_like_thing}
                                        onChange={props.handleChange}
                                        onBlur={props.handleBlur}
                                        helperText={
                                            (props.touched.needlikething  && props.errors.needlikething  ? String(props.errors.needlikething ) : '')
                                        }
                                    />  
                                )}
                            />

                            <Field
                                name="needdislike"
                                render={ () => (
                                    <TextField 
                                        id="outlined-error-helper-text"
                                        variant="outlined"
                                        label="สิ่งที่ไม่ชอบ"
                                        name={"needdislike"}
                                        error= { 
                                            Boolean(props.errors.needdislike  && props.touched.needdislike )
                                        }
                                        defaultValue={infoNeedPost.need_dislike}
                                        onChange={props.handleChange}
                                        onBlur={props.handleBlur}
                                        helperText={
                                            (props.touched.needdislike  && props.errors.needdislike  ? String(props.errors.needdislike ) : '')
                                        }
                                    />  
                                )}
                            />

                            <Field
                                name="needotherinformation"
                                render={ () => (
                                    <TextField 
                                        id="outlined-error-helper-text"
                                        variant="outlined"
                                        label="อื่นๆ"
                                        name={"needotherinformation"}
                                        error= { 
                                            Boolean(props.errors.needotherinformation  && props.touched.needotherinformation )
                                        }
                                        defaultValue={infoNeedPost.need_other_information}
                                        onChange={props.handleChange}
                                        onBlur={props.handleBlur}
                                        helperText={
                                            (props.touched.needotherinformation  && props.errors.needotherinformation  ? String(props.errors.needotherinformation ) : '')
                                        }
                                    />  
                                )}
                            />

                        <Button disabled={activeStep === 0} onClick={handleBack}>Back</Button>
                        <Button  onClick={handleNext}> {activeStep === steps.length - 1 ? 'Finish' : 'Next'} </Button>
                    </Form>
                )}
            </Formik>
            </BackgroundBlock>
        </>
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

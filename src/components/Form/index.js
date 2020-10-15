import React, { useContext ,useState} from 'react'
// import Information from './Information'
// import Account from './Account'
// import * as yup from "yup";
// import { StoreContext } from '../Context/store'



// const informationSchema = yup.object().shape({
//     firstName: yup.string().required('This field is required.'),
//     lastName: yup.string().required('This field is required.'),
//     nickname: yup.string().required('This field is required.'),
// });

// const accountSchema = yup.object().shape({
//     email: yup
//         .string()
//         .email('Invalid email.')
//         .required('This field is required.'),
//     password: yup
//         .string()
//         .required('This field is required.')
//         .min(3, 'Please Enter less then 3 letters'),
//     confirmPassword: yup
//         .string()
//         .required('This field is required.')
//         .min(3, 'This field at least 3 characters.')
//         .oneOf([yup.ref('password'), null], "Password not match."),
// });


export default function StepperForm() {
    // const { information, account } = useContext(StoreContext)



    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        setActiveStep(prevActiveStep => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep(prevActiveStep => prevActiveStep - 1);
    };

    // const handleReset = () => {
    //     // information[1]({})
    //     // account[1]({})
    //     setActiveStep(0);
    // };

    // const onSubmit = data => {
    //     console.log(data);
    //     if(activeStep === 0){
    //         information[1](data)
    //     }
    //     else if(activeStep === 1){
    //         account[1](data)
    //     }
    //     handleNext()
    // };

    // function getStepContent(stepIndex) {
    //     switch (stepIndex) {
    //         case 0:
    //             return <Information />;
    //         case 1:
    //             return <Account  />;
    //         default:
    //             return 'Unknown stepIndex';
    //     }
    // }
    switch (activeStep) {
        case 0:
            return ( <><h1>Doge</h1><button onClick={handleNext}>F</button></> )
        case 1:
            return (<><h1>DogeWOW</h1> <button onClick={handleBack}> B </button> </>)
        default:
            return 'Unknown stepIndex';
    }

}
import React,{useContext} from 'react';
import styled from 'styled-components';
import ActionForm from '../../../contexts/ActionForm';
import useValidator from '../../../hook/useValidator'

/*แต่งสไตล์*/
const Container = styled.form`
display:flex;
 flex-direction: column;


`

const BaseInput = styled.input`
  outline: none;
  font-size: 16px;
`

const StyledInput = styled(BaseInput)`
  border-radius : 5px;
  border: none;
  width: 70%;
  transition: border 1s;
  font-family : 'Kanit', sans-serif;
  margin-bottom: 10px;
  margin-left: 5.4rem;

  &:focus {
    background-color : #ccc ;
  }
  &::placeholder {
    color: #aaa;
  }
`
const ButtonContainer = styled.div`
   margin-left: 13.8rem;
`

const Button = styled.button`
  border:none;
  background-color:#F9B401;
  font-size: 20px;
  font-family : 'Kanit', sans-serif;
  margin: 1rem;

  &:hover{
    cursor: pointer;
    background-color: #f96c01;
  }

`

const ErrorMassage = styled.label`
  color: #CD0000;
  font-size:14px;
  margin-left:5.5rem;
  margin-top:0;
`
/*แต่งสไตล์*/
export function NeedPost1() {
    //state global Step
    const {Active,Steps,HandleButton,NeedPost } = useContext(ActionForm );
    const {activeStep } = Active;
    //state function handle event buttonClick steponForm );
    const { handleNext,handleBack  } = HandleButton;
    const { steps } = Steps
    //ActionContext Form Havepost Information State 
    const { infoNeedPost , setInfoNeedPost } = NeedPost;

    const [validator, showValidationMessage] = useValidator()

    const handleSubmitFont = () => {
      if (validator.allValid()) {
        handleNext();
      } else {
        showValidationMessage(true);
      }
    };
 
 
    return (
        <>
            <Container>
              <StyledInput 
                          name={"university"}
                          onChange={(e) => {setInfoNeedPost({...infoNeedPost,need_university_name : e.target.value})}}
                          value={infoNeedPost.need_university_name} 
                          placeholder="ชื่อมหาวิทยาลัย" 
                          onBlur={( infoNeedPost.need_university_name=== '' ?validator.showMessageFor("university") : '')}

              />
              <ErrorMassage>{validator.message("university", infoNeedPost.need_university_name, "required", {messages: {required: "กรุณากรอก"}})}</ErrorMassage>
            
              <StyledInput 
                          name={"needtype"}
                          onChange={(e) => {setInfoNeedPost({...infoNeedPost,need_type : e.target.value})}}
                          value={infoNeedPost.need_type} 
                          placeholder="ประเภทห้องที่ต้องการ (เช่น คอนโด)" 
                          onBlur={( infoNeedPost.need_type=== '' ?validator.showMessageFor("needtype") : '')}
                          
              />
              <ErrorMassage>{validator.message("needtype", infoNeedPost.need_type, "required", {messages: {required: "กรุณากรอก"}})}</ErrorMassage>
            
              <StyledInput 
                          name={"needfullcost"}
                          onChange={(e) => {setInfoNeedPost({...infoNeedPost,need_full_cost : e.target.value})}}
                          value={infoNeedPost.need_full_cost} 
                          placeholder="ราคาเต็ม" 
                          onBlur={( infoNeedPost.need_full_cost=== '' ?validator.showMessageFor("needfullcost") : '')}
                          
              />
              <ErrorMassage>{validator.message("needfullcost", infoNeedPost.need_full_cost, "required", {messages: {required: "กรุณากรอก"}})}</ErrorMassage>
            
            
              <StyledInput 
                          name={"needhalfcost"}
                          onChange={(e) => {setInfoNeedPost({...infoNeedPost,need_half_cost : e.target.value})}}
                          value={infoNeedPost.need_half_cost} 
                          placeholder="ราคาหาร" 
                          onBlur={( infoNeedPost.need_half_cost=== '' ?validator.showMessageFor("needhalfcost") : '')}
                          
              />
              <ErrorMassage>{validator.message("needhalfcost", infoNeedPost.need_half_cost, "required", {messages: {required: "กรุณากรอก"}})}</ErrorMassage>
            
              <StyledInput 
                          name={"needamountofmate"}
                          onChange={(e) => {setInfoNeedPost({...infoNeedPost,need_amount_of_mate : e.target.value})}}
                          value={infoNeedPost.need_amount_of_mate} 
                          placeholder="จำนวนรูมเมทที่ต้องการ" 
                          onBlur={( infoNeedPost.need_amount_of_mate=== '' ?validator.showMessageFor("needamountofmate") : '')}
                          
              />
              <ErrorMassage>{validator.message("needamountofmate", infoNeedPost.need_amount_of_mate, "required", {messages: {required: "กรุณากรอก"}})}</ErrorMassage>
            
              <StyledInput 
                          name={"needlocation"}
                          onChange={(e) => {setInfoNeedPost({...infoNeedPost,need_location : e.target.value})}}
                          value={infoNeedPost.need_location} 
                          placeholder="ตำแหน่งที่ตั้งที่ต้องการ" 
                          onBlur={( infoNeedPost.need_location=== '' ?validator.showMessageFor("needlocation") : '')}
                          
              />
              <ErrorMassage>{validator.message("needlocation", infoNeedPost.need_location, "required", {messages: {required: "กรุณากรอก"}})}</ErrorMassage>
           
            
            </Container>
             
            <ButtonContainer> 
            <Button onClick={handleBack} disabled={activeStep === 0} >Back</Button>
            <Button onClick={handleSubmitFont} > {activeStep === steps.length - 1 ? 'Finish' : 'Next'} </Button>            
            </ButtonContainer>
        </>
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

    const [validator, showValidationMessage] = useValidator()

    const handleSubmitFont = () => {
      if (validator.allValid()) {
        handleNext();
      } else {
        showValidationMessage(true);
      }
    };
 
 
    return (
        <>
            <Container>
              <StyledInput 
                          name={"needfaculty"}
                          onChange={(e) => {setInfoNeedPost({...infoNeedPost,need_faculty : e.target.value})}}
                          value={infoNeedPost.need_faculty} 
                          placeholder="คณะ" 
                          onBlur={( infoNeedPost.need_faculty=== '' ?validator.showMessageFor("needfaculty") : '')}
                          
              />
              <ErrorMassage>{validator.message("needfaculty", infoNeedPost.need_faculty, "required", {messages: {required: "กรุณากรอก"}})}</ErrorMassage>
            
        
              <StyledInput 
                          name={"needfacultymate"}
                          onChange={(e) => {setInfoNeedPost({...infoNeedPost,need_faculty_mate : e.target.value})}}
                          value={infoNeedPost.need_faculty_mate} 
                          placeholder="คณะของเมท" 
                          onBlur={( infoNeedPost.need_faculty_mate=== '' ?validator.showMessageFor("needfacultymate") : '')}
                          
              />
              <ErrorMassage>{validator.message("needfacultymate", infoNeedPost.need_faculty_mate, "required", {messages: {required: "กรุณากรอก"}})}</ErrorMassage>
            
        
              <StyledInput 
                          name={"needhabit"}
                          onChange={(e) => {setInfoNeedPost({...infoNeedPost,need_habit : e.target.value})}}
                          value={infoNeedPost.need_habit} 
                          placeholder="ลักษณะนิสัย" 
                          onBlur={( infoNeedPost.need_habit=== '' ?validator.showMessageFor("needhabit") : '')}
                          
              />
              <ErrorMassage>{validator.message("needhabit", infoNeedPost.need_habit, "required", {messages: {required: "กรุณากรอก"}})}</ErrorMassage>
              
              <StyledInput 
                          name={"needhabitmate"}
                          onChange={(e) => {setInfoNeedPost({...infoNeedPost,need_habit_mate : e.target.value})}}
                          value={infoNeedPost.need_habit_mate} 
                          placeholder="ลักษณะนิสัยของเมทที่ต้องการ" 
                          onBlur={( infoNeedPost.need_habit_mate=== '' ?validator.showMessageFor("needhabitmate") : '')}
                          
              />
              <ErrorMassage>{validator.message("needhabitmate", infoNeedPost.need_habit_mate, "required", {messages: {required: "กรุณากรอก"}})}</ErrorMassage>
            
              <StyledInput 
                          name={"needroutine"}
                          onChange={(e) => {setInfoNeedPost({...infoNeedPost,need_routine : e.target.value})}}
                          value={infoNeedPost.need_routine} 
                          placeholder="กิจวัตรประจำวัน" 
                          onBlur={( infoNeedPost.need_routine=== '' ?validator.showMessageFor("needroutine") : '')}
                          
              />
              <ErrorMassage>{validator.message("needroutine", infoNeedPost.need_routine, "required", {messages: {required: "กรุณากรอก"}})}</ErrorMassage>
            
              <StyledInput 
                          name={"needlikething"}
                          onChange={(e) => {setInfoNeedPost({...infoNeedPost,need_like_thing : e.target.value})}}
                          value={infoNeedPost.need_like_thing} 
                          placeholder="สิ่งที่ชอบ" 
                          onBlur={( infoNeedPost.need_like_thing=== '' ?validator.showMessageFor("likething") : '')}
                          
              />
              <ErrorMassage>{validator.message("needlikething", infoNeedPost.need_like_thing, "required", {messages: {required: "กรุณากรอก"}})}</ErrorMassage>
            
              <StyledInput 
                          name={"needdislike"}
                          onChange={(e) => {setInfoNeedPost({...infoNeedPost,need_dislike : e.target.value})}}
                          value={infoNeedPost.need_dislike} 
                          placeholder="สิ่งที่ไม่ชอบ" 
                          onBlur={( infoNeedPost.need_dislike=== '' ?validator.showMessageFor("needdislike") : '')}
                          
              />
              <ErrorMassage>{validator.message("needdislike", infoNeedPost.need_dislike, "required", {messages: {required: "กรุณากรอก"}})}</ErrorMassage>
            
              <StyledInput 
                          name={"needotherinformation"}
                          onChange={(e) => {setInfoNeedPost({...infoNeedPost,need_other_information : e.target.value})}}
                          value={infoNeedPost.need_other_information} 
                          placeholder="ข้อมูลอื่นๆ" 
                          onBlur={( infoNeedPost.need_other_information=== '' ?validator.showMessageFor("needotherinformation") : '')}
                          
              />
              <ErrorMassage>{validator.message("needotherinformation", infoNeedPost.need_other_information, "required", {messages: {required: "กรุณากรอก"}})}</ErrorMassage>
            
            
            </Container>

            <ButtonContainer>
            <Button onClick={handleBack} disabled={activeStep === 0} >Back</Button>
            <Button onClick={handleSubmitFont} > {activeStep === steps.length - 1 ? 'Finish' : 'Next'} </Button>            
        </ButtonContainer>
        </>
    );
}

const SearchDropdown = styled.select`
  display: flex;
  /* position: relative; */
  width: fit-content;
  height: fit-content;
  padding: 5px;
  border: none;
  font-family : 'Kanit', sans-serif;
margin-bottom:4px;
margin-top: -8px;
  margin-left: 27rem;
  background-color: #F9B401;

  color: #fff;

  font-family: "Kanit", sans-serif;
  font-size: 1rem;

  &:hover {
    background-color: #f96c01;
    cursor: pointer;
  }

  option {
    padding: 1rem;
    margin: 1rem;
    background-color: #fff;
    color: #000;

    &:hover {
      background-color: #fff0cb;
      cursor: pointer;
    }
  }
`;

const StyledInputContainer = styled.div`
 margin:0 1rem;
 

  &:focus {
    background-color : #ccc ;
  }
  &::placeholder {
    color: #aaa;
  }
`


const FacilText = styled.div`
 
  z-index:1000;
  margin-left: 3rem;
  outline-width:none;
  

`
export function NeedPost3() {
//state global Step
const {Active,Steps,HandleButton,NeedPost } = useContext(ActionForm );
const {activeStep } = Active;
//state function handle event buttonClick steponForm );
const { handleNext,handleBack  } = HandleButton;
const { steps } = Steps
//ActionContext Form Havepost Information State 
const { infoNeedPost , setInfoNeedPost } = NeedPost;

const [validator, showValidationMessage] = useValidator()

const handleSubmitFont = () => {
  if (validator.allValid()) {
    handleNext();
  } else {
    showValidationMessage(true);
  }
};

  return (
      <>
        <FacilText>ลานจอดรถ</FacilText>
          <SearchDropdown onChange={(e) => {setInfoNeedPost({...infoNeedPost,parking : e.target.value})}} value={infoNeedPost.parking} >
                <option selected value="มี">ต้องการ</option>
                <option value="ไม่มี">ไม่ต้องการ</option>
          </SearchDropdown>

          <FacilText>ลิฟต์</FacilText>
          <SearchDropdown onChange={(e) => {setInfoNeedPost({...infoNeedPost,lift : e.target.value})}} value={infoNeedPost.lift} >
                <option selected value="มี">ต้องการ</option>
                <option value="ไม่มี">ไม่ต้องการ</option>
          </SearchDropdown>

          <FacilText>คีย์การ์ด</FacilText>
          <SearchDropdown onChange={(e) => {setInfoNeedPost({...infoNeedPost,keycard : e.target.value})}} value={infoNeedPost.keycard} >
                <option selected value="มี">ต้องการ</option>
                <option value="ไม่มี">ไม่ต้องการ</option>
          </SearchDropdown>

          <FacilText>ระบบรักษาความปลอดภัย</FacilText>
          <SearchDropdown onChange={(e) => {setInfoNeedPost({...infoNeedPost,security : e.target.value})}} value={infoNeedPost.security} >
                <option selected value="มี">ต้องการ</option>
                <option value="ไม่มี">ไม่ต้องการ</option>
          </SearchDropdown>

          <FacilText>สระว่ายน้ำ</FacilText>
          <SearchDropdown onChange={(e) => {setInfoNeedPost({...infoNeedPost,pool : e.target.value})}} value={infoNeedPost.pool} >
                <option selected value="มี">ต้องการ</option>
                <option value="ไม่มี">ไม่ต้องการ</option>
          </SearchDropdown>

          <FacilText>ฟิตเนส</FacilText>
          <SearchDropdown onChange={(e) => {setInfoNeedPost({...infoNeedPost,gym : e.target.value})}} value={infoNeedPost.gym} >
                <option selected value="มี">ต้องการ</option>
                <option value="ไม่มี">ไม่ต้องการ</option>
          </SearchDropdown>

          <FacilText>บริการซักรีด</FacilText>
          <SearchDropdown onChange={(e) => {setInfoNeedPost({...infoNeedPost,luandry : e.target.value})}} value={infoNeedPost.luandry} >
                <option selected value="มี">ต้องการ</option>
                <option value="ไม่มี">ไม่ต้องการ</option>
          </SearchDropdown>

          <ButtonContainer>
            <Button onClick={handleBack} disabled={activeStep === 0} >Back</Button>
            <Button onClick={handleSubmitFont} > {activeStep === steps.length - 1 ? 'Finish' : 'Next'} </Button>            
        </ButtonContainer>
      </>
  );
}
export function NeedPost4() {

   //state global Step
   const {Active,Steps,HandleButton,NeedPost } = useContext(ActionForm );
   const {activeStep } = Active;
   //state function handle event buttonClick steponForm );
   const { handleNext,handleBack  } = HandleButton;
   const { steps } = Steps
   //ActionContext Form Havepost Information State 
   const { infoNeedPost , setInfoNeedPost } = NeedPost;

   const [validator, showValidationMessage] = useValidator()

   const handleSubmitFont = () => {
     if (validator.allValid()) {
       handleNext();
     } else {
       showValidationMessage(true);
     }
   };
  return (
      <>  
        <Container>
        
        <FacilText>เครื่องปรับอากาศ</FacilText>
        <SearchDropdown onChange={(e) => {setInfoNeedPost({...infoNeedPost,air_conditioner : e.target.value})}} value={infoNeedPost.air_conditioner} >
                <option selected value="มี">ต้องการ</option>
                <option value="ไม่มี">ไม่ต้องการ</option>
          </SearchDropdown>

          <StyledInputContainer>
          <StyledInput 
                          name={"numberoftoilet"}
                          onChange={(e) => {setInfoNeedPost({...infoNeedPost,number_of_toilet : e.target.value})}}
                          value={infoNeedPost.number_of_toilet} 
                          placeholder="จำนวนห้องน้ำที่ต้องการ" 
                       
                          
              />
             
              <StyledInput 
                          name={"numberofbedroom"}
                          onChange={(e) => {setInfoNeedPost({...infoNeedPost,number_of_bedroom : e.target.value})}}
                          value={infoNeedPost.number_of_bedroom} 
                          placeholder="จำนวนห้องนอนที่ต้องการ" 
                      
                          
              />
              </StyledInputContainer> 
              
            
        <FacilText>สัตว์เลี้ยง</FacilText>
        <SearchDropdown onChange={(e) => {setInfoNeedPost({...infoNeedPost,pets : e.target.value})}} value={infoNeedPost.pets} >
                <option selected value="มี">ต้องการ</option>
                <option value="ไม่มี">ไม่ต้องการ</option>
          </SearchDropdown>
            
          <FacilText>พื้นที่สูบบุหรี่</FacilText>
        <SearchDropdown onChange={(e) => {setInfoNeedPost({...infoNeedPost,smoking : e.target.value})}} value={infoNeedPost.smoking} >
                <option selected value="มี">ต้องการ</option>
                <option value="ไม่มี">ไม่ต้องการ</option>
          </SearchDropdown>
            
          <FacilText>สัญญาณอินเตอร์เน็ต</FacilText>
        <SearchDropdown onChange={(e) => {setInfoNeedPost({...infoNeedPost,internet_wifi : e.target.value})}} value={infoNeedPost.internet_wifi} >
                <option selected value="มี">ต้องการ</option>
                <option value="ไม่มี">ไม่ต้องการ</option>
          </SearchDropdown>
            
          <FacilText>เฟอร์นิเจอร์</FacilText>
        <SearchDropdown onChange={(e) => {setInfoNeedPost({...infoNeedPost,furniture : e.target.value})}} value={infoNeedPost.furniture} >
                <option selected value="มี">ต้องการ</option>
                <option value="ไม่มี">ไม่ต้องการ</option>
          </SearchDropdown>

          <FacilText>เครื่องทำน้ำอุ่น</FacilText>
        <SearchDropdown onChange={(e) => {setInfoNeedPost({...infoNeedPost,water_heater : e.target.value})}} value={infoNeedPost.water_heater} >
                <option selected value="มี">ต้องการ</option>
                <option value="ไม่มี">ไม่ต้องการ</option>
          </SearchDropdown>

        </Container>

        <ButtonContainer>
            <Button onClick={handleBack} disabled={activeStep === 0} >Back</Button>
            <Button onClick={handleSubmitFont} > {activeStep === steps.length - 1 ? 'Finish' : 'Next'} </Button>            
</ButtonContainer>
      </>
  );
}
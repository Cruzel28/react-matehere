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
export function HavePost1() {
    //state global Step
    const {Active,Steps,HandleButton,HavePost } = useContext(ActionForm );
    const {activeStep } = Active;
    //state function handle event buttonClick steponForm );
    const { handleNext,handleBack  } = HandleButton;
    const { steps } = Steps
    //ActionContext Form Havepost Information State 
    const { infoHavePost , setInfoHavePost } = HavePost;

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
                          onChange={(e) => {setInfoHavePost({...infoHavePost,need_university_name : e.target.value})}}
                          value={infoHavePost.need_university_name} 
                          placeholder="ชื่อมหาวิทยาลัย" 
                          onBlur={( infoHavePost.need_university_name=== '' ?validator.showMessageFor("university") : '')}

              />
              <ErrorMassage>{validator.message("university", infoHavePost.need_university_name, "required", {messages: {required: "กรุณากรอก"}})}</ErrorMassage>
            
              <StyledInput 
                          name={"typeroom"}
                          onChange={(e) => {setInfoHavePost({...infoHavePost,type_room : e.target.value})}}
                          value={infoHavePost.type_room} 
                          placeholder="ประเภทห้อง (เช่น คอนโด)" 
                          onBlur={( infoHavePost.type_room=== '' ?validator.showMessageFor("typeroom") : '')}
                          
              />
              <ErrorMassage>{validator.message("typeroom", infoHavePost.type_room, "required", {messages: {required: "กรุณากรอก"}})}</ErrorMassage>
            
              <StyledInput 
                          name={"fullcost"}
                          onChange={(e) => {setInfoHavePost({...infoHavePost,full_cost : e.target.value})}}
                          value={infoHavePost.full_cost} 
                          placeholder="ราคาเต็ม" 
                          onBlur={( infoHavePost.full_cost=== '' ?validator.showMessageFor("fullcost") : '')}
                          
              />
              <ErrorMassage>{validator.message("fullcost", infoHavePost.full_cost, "required", {messages: {required: "กรุณากรอก"}})}</ErrorMassage>
            
            
              <StyledInput 
                          name={"halfcost"}
                          onChange={(e) => {setInfoHavePost({...infoHavePost,half_cost : e.target.value})}}
                          value={infoHavePost.half_cost} 
                          placeholder="ราคาหาร" 
                          onBlur={( infoHavePost.half_cost=== '' ?validator.showMessageFor("halfcost") : '')}
                          
              />
              <ErrorMassage>{validator.message("halfcost", infoHavePost.half_cost, "required", {messages: {required: "กรุณากรอก"}})}</ErrorMassage>
            
              <StyledInput 
                          name={"amountofmate"}
                          onChange={(e) => {setInfoHavePost({...infoHavePost,amount_of_mate : e.target.value})}}
                          value={infoHavePost.amount_of_mate} 
                          placeholder="จำนวนรูมเมท" 
                          onBlur={( infoHavePost.amount_of_mate=== '' ?validator.showMessageFor("amountofmate") : '')}
                          
              />
              <ErrorMassage>{validator.message("amountofmate", infoHavePost.amount_of_mate, "required", {messages: {required: "กรุณากรอก"}})}</ErrorMassage>
            
              <StyledInput 
                          name={"location"}
                          onChange={(e) => {setInfoHavePost({...infoHavePost,location : e.target.value})}}
                          value={infoHavePost.location} 
                          placeholder="ตำแหน่งที่ตั้ง" 
                          onBlur={( infoHavePost.location=== '' ?validator.showMessageFor("location") : '')}
                          
              />
              <ErrorMassage>{validator.message("location", infoHavePost.location, "required", {messages: {required: "กรุณากรอก"}})}</ErrorMassage>
           
            
            </Container>
             
            <ButtonContainer> 
            <Button onClick={handleBack} disabled={activeStep === 0} >Back</Button>
            <Button onClick={handleSubmitFont} > {activeStep === steps.length - 1 ? 'Finish' : 'Next'} </Button>            
            </ButtonContainer>
        </>
    );
}


export function HavePost2() {
    //state global Step
    const {Active,Steps,HandleButton,HavePost } = useContext(ActionForm );
    const {activeStep } = Active;
    //state function handle event buttonClick steponForm );
    const { handleNext,handleBack  } = HandleButton;
    const { steps } = Steps
    //ActionContext Form Havepost Information State 
    const { infoHavePost , setInfoHavePost } = HavePost;

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
                          name={"faculty"}
                          onChange={(e) => {setInfoHavePost({...infoHavePost,faculty : e.target.value})}}
                          value={infoHavePost.faculty} 
                          placeholder="คณะ" 
                          onBlur={( infoHavePost.faculty=== '' ?validator.showMessageFor("faculty") : '')}
                          
              />
              <ErrorMassage>{validator.message("faculty", infoHavePost.faculty, "required", {messages: {required: "กรุณากรอก"}})}</ErrorMassage>
            
        
              <StyledInput 
                          name={"facultymate"}
                          onChange={(e) => {setInfoHavePost({...infoHavePost,faculty_mate : e.target.value})}}
                          value={infoHavePost.faculty_mate} 
                          placeholder="คณะของเมท" 
                          onBlur={( infoHavePost.faculty_mate=== '' ?validator.showMessageFor("facultymate") : '')}
                          
              />
              <ErrorMassage>{validator.message("facultymate", infoHavePost.faculty_mate, "required", {messages: {required: "กรุณากรอก"}})}</ErrorMassage>
            
        
              <StyledInput 
                          name={"habit"}
                          onChange={(e) => {setInfoHavePost({...infoHavePost,habit : e.target.value})}}
                          value={infoHavePost.habit} 
                          placeholder="ลักษณะนิสัย" 
                          onBlur={( infoHavePost.habit=== '' ?validator.showMessageFor("habit") : '')}
                          
              />
              <ErrorMassage>{validator.message("habit", infoHavePost.habit, "required", {messages: {required: "กรุณากรอก"}})}</ErrorMassage>
              
              <StyledInput 
                          name={"habitmate"}
                          onChange={(e) => {setInfoHavePost({...infoHavePost,habit_mate : e.target.value})}}
                          value={infoHavePost.habit_mate} 
                          placeholder="ลักษณะนิสัยของเมท" 
                          onBlur={( infoHavePost.habit_mate=== '' ?validator.showMessageFor("habitmate") : '')}
                          
              />
              <ErrorMassage>{validator.message("habitmate", infoHavePost.habit_mate, "required", {messages: {required: "กรุณากรอก"}})}</ErrorMassage>
              
              <StyledInput 
                          name={"routine"}
                          onChange={(e) => {setInfoHavePost({...infoHavePost,routine : e.target.value})}}
                          value={infoHavePost.routine} 
                          placeholder="กิจวัตรประจำวัน" 
                          onBlur={( infoHavePost.routine=== '' ?validator.showMessageFor("routine") : '')}
                          
              />
              <ErrorMassage>{validator.message("routine", infoHavePost.routine, "required", {messages: {required: "กรุณากรอก"}})}</ErrorMassage>
            
              
              <StyledInput 
                          name={"likething"}
                          onChange={(e) => {setInfoHavePost({...infoHavePost,like_thing : e.target.value})}}
                          value={infoHavePost.like_thing} 
                          placeholder="สิ่งที่ชอบ" 
                          onBlur={( infoHavePost.like_thing=== '' ?validator.showMessageFor("likething") : '')}
                          
              />
              <ErrorMassage>{validator.message("likething", infoHavePost.like_thing, "required", {messages: {required: "กรุณากรอก"}})}</ErrorMassage>
            
              <StyledInput 
                          name={"dislike"}
                          onChange={(e) => {setInfoHavePost({...infoHavePost,dislike : e.target.value})}}
                          value={infoHavePost.dislike} 
                          placeholder="สิ่งที่ไม่ชอบ" 
                          onBlur={( infoHavePost.dislike=== '' ?validator.showMessageFor("dislike") : '')}
                          
              />
              <ErrorMassage>{validator.message("dislike", infoHavePost.dislike, "required", {messages: {required: "กรุณากรอก"}})}</ErrorMassage>
            
              <StyledInput 
                          name={"otherinformation"}
                          onChange={(e) => {setInfoHavePost({...infoHavePost,other_information : e.target.value})}}
                          value={infoHavePost.other_information} 
                          placeholder="ข้อมูลอื่นๆ" 
                          onBlur={( infoHavePost.other_information=== '' ?validator.showMessageFor("otherinformation") : '')}
                          
              />
              <ErrorMassage>{validator.message("otherinformation", infoHavePost.other_information, "required", {messages: {required: "กรุณากรอก"}})}</ErrorMassage>
            
            
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

export function HavePost3() {
    //state global Step
    const {Active,Steps,HandleButton,HavePost } = useContext(ActionForm );
    const {activeStep } = Active;
    //state function handle event buttonClick steponForm );
    const { handleNext,handleBack  } = HandleButton;
    const { steps } = Steps
    //ActionContext Form Havepost Information State 
    const { infoHavePost , setInfoHavePost } = HavePost;

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
         
          <FacilText>ลานจอดรถ</FacilText>
          <SearchDropdown onChange={(e) => {setInfoHavePost({...infoHavePost,parking : e.target.value})}} value={infoHavePost.parking} >
                <option selected value="มี">มี</option>
                <option value="ไม่มี">ไม่มี</option>
          </SearchDropdown>

          <FacilText>ลิฟต์</FacilText>
          <SearchDropdown onChange={(e) => {setInfoHavePost({...infoHavePost,lift : e.target.value})}} value={infoHavePost.lift} >
                <option selected value="มี">มี</option>
                <option value="ไม่มี">ไม่มี</option>
          </SearchDropdown>

          <FacilText>คีย์การ์ด</FacilText>
          <SearchDropdown onChange={(e) => {setInfoHavePost({...infoHavePost,keycard : e.target.value})}} value={infoHavePost.keycard} >
                <option selected value="มี">มี</option>
                <option value="ไม่มี">ไม่มี</option>
          </SearchDropdown>

          <FacilText>ระบบรักษาความปลอดภัย</FacilText>
          <SearchDropdown onChange={(e) => {setInfoHavePost({...infoHavePost,security : e.target.value})}} value={infoHavePost.security} >
                <option selected value="มี">มี</option>
                <option value="ไม่มี">ไม่มี</option>
          </SearchDropdown>

          <FacilText>สระว่ายน้ำ</FacilText>
          <SearchDropdown onChange={(e) => {setInfoHavePost({...infoHavePost,pool : e.target.value})}} value={infoHavePost.pool} >
                <option selected value="มี">มี</option>
                <option value="ไม่มี">ไม่มี</option>
          </SearchDropdown>

          <FacilText>ฟิตเนส</FacilText>
          <SearchDropdown onChange={(e) => {setInfoHavePost({...infoHavePost,gym : e.target.value})}} value={infoHavePost.gym} >
                <option selected value="มี">มี</option>
                <option value="ไม่มี">ไม่มี</option>
          </SearchDropdown>

          <FacilText>บริการซักรีด</FacilText>
          <SearchDropdown onChange={(e) => {setInfoHavePost({...infoHavePost,luandry : e.target.value})}} value={infoHavePost.luandry} >
                <option selected value="มี">มี</option>
                <option value="ไม่มี">ไม่มี</option>
          </SearchDropdown>
        
          </Container>

          <ButtonContainer>
            <Button onClick={handleBack} disabled={activeStep === 0} >Back</Button>
            <Button onClick={handleSubmitFont} > {activeStep === steps.length - 1 ? 'Finish' : 'Next'} </Button>            
        </ButtonContainer>
      </>
  );
}
export function HavePost4() {

   //state global Step
   const {Active,Steps,HandleButton,HavePost } = useContext(ActionForm );
   const {activeStep } = Active;
   //state function handle event buttonClick steponForm );
   const { handleNext,handleBack  } = HandleButton;
   const { steps } = Steps
   //ActionContext Form Havepost Information State 
   const { infoHavePost , setInfoHavePost } = HavePost;

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
        <SearchDropdown onChange={(e) => {setInfoHavePost({...infoHavePost,air_conditioner : e.target.value})}} value={infoHavePost.air_conditioner} >
                <option selected value="มี">มี</option>
                <option value="ไม่มี">ไม่มี</option>
          </SearchDropdown>

          <StyledInputContainer>
          <StyledInput 
                          name={"numberoftoilet"}
                          onChange={(e) => {setInfoHavePost({...infoHavePost,number_of_toilet : e.target.value})}}
                          value={infoHavePost.number_of_toilet} 
                          placeholder="จำนวนห้องน้ำ" 
                       
                          
              />
             
              <StyledInput 
                          name={"numberofbedroom"}
                          onChange={(e) => {setInfoHavePost({...infoHavePost,number_of_bedroom : e.target.value})}}
                          value={infoHavePost.number_of_bedroom} 
                          placeholder="จำนวนห้องนอน" 
                      
                          
              />
              </StyledInputContainer> 
              
            
        <FacilText>สัตว์เลี้ยง</FacilText>
        <SearchDropdown onChange={(e) => {setInfoHavePost({...infoHavePost,pets : e.target.value})}} value={infoHavePost.pets} >
                <option selected value="มี">ได้</option>
                <option value="ไม่มี">ไม่ได้</option>
          </SearchDropdown>
            
          <FacilText>พื้นที่สูบบุหรี่</FacilText>
        <SearchDropdown onChange={(e) => {setInfoHavePost({...infoHavePost,smoking : e.target.value})}} value={infoHavePost.smoking} >
                <option selected value="มี">มี</option>
                <option value="ไม่มี">ไม่มี</option>
          </SearchDropdown>
            
          <FacilText>สัญญาณอินเตอร์เน็ต</FacilText>
        <SearchDropdown onChange={(e) => {setInfoHavePost({...infoHavePost,internet_wifi : e.target.value})}} value={infoHavePost.internet_wifi} >
                <option selected value="มี">มี</option>
                <option value="ไม่มี">ไม่มี</option>
          </SearchDropdown>
            
          <FacilText>เฟอร์นิเจอร์</FacilText>
        <SearchDropdown onChange={(e) => {setInfoHavePost({...infoHavePost,furniture : e.target.value})}} value={infoHavePost.furniture} >
                <option selected value="มี">มี</option>
                <option value="ไม่มี">ไม่มี</option>
          </SearchDropdown>

          <FacilText>เครื่องทำน้ำอุ่น</FacilText>
        <SearchDropdown onChange={(e) => {setInfoHavePost({...infoHavePost,water_heater : e.target.value})}} value={infoHavePost.water_heater} >
                <option selected value="มี">มี</option>
                <option value="ไม่มี">ไม่มี</option>
          </SearchDropdown>

        </Container>

        <ButtonContainer>
            <Button onClick={handleBack} disabled={activeStep === 0} >Back</Button>
            <Button onClick={handleSubmitFont} > {activeStep === steps.length - 1 ? 'Finish' : 'Next'} </Button>            
</ButtonContainer>
      </>
  );
}
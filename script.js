function formValidation(){
event.preventDefault()

let name= inputStudentName.value 
let nameValidation= true

if(name.length >= 3){
    nameValidation= true
    errorName.innerHTML=""
}else{
    nameValidation= false
    errorName.innerHTML="The name must be at least 3 characters long"
}

let course= inputCourse.value
let courseValidation= true 

if(course === ""){
    
    courseValidation= false 
    errorCourse.innerHTML="Please select a course "
}else{
    courseValidation= true 
    errorCourse.innerHTML=""
}

if(nameValidation === true && courseValidation === true){
    validationMessage.innerHTML= `<h2>Thank you for your submission!</h2>
    <ul>
    <li>Your name is ${inputStudentName.value}</li>
    <li> Your email is ${inputEmail.value}</li> 
    <li>Your age is ${inputAge.value} </li> 
    <li>You have selected course ${inputCourse.value}</li>
    </ul>`
}else{
    validationMessage.innerHTML=""
}

}
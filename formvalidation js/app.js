class FormValidation{
    formvalues = {
        username : "",
        email : "",
        phoneno : "",
        password : "",
        confirmpassword : "",
    }
    errorValues = {
        usernameerr : "",
        emailerr : "",
        phonenoerr : "",
        passworderr : "",
        confirmpassworderr : "",
    }
    showErrorMsg(index,msg){
       const form_group = document.getElementsByClassName
       ('form-group')
       [index]
       form_group.classList.add('error')
       form_group.getElementsByTagName('span')[0].textContent = msg
    } 
    showSuccessMsg(index){
       const form_group = document.getElementsByClassName
       ('form-group')
       [index]
       form_group.classList.remove('error')
       form_group.classList.add('success')
    }
    getInputs(){
        this.formvalues.username = document.getElementById('username')
        .value.trim()
        this.formvalues.email = document.getElementById('email')
        .value.trim()
        this.formvalues.phoneno = document.getElementById('phoneno')
        .value.trim()
        this.formvalues.password = document.getElementById('password')
        .value.trim()
        this.formvalues.confirmpassword = document.getElementById('confirmpassword')
        .value.trim()
    }
    validateUsername(){
        if(this.formvalues.username === ''){
            this.errorValues.usernameerr = "*Please Enter Your Name"
            this.showErrorMsg(0,
                this.errorValues.usernameerr)
        }else if (this.formvalues.username.length <= 4){
            this.errorValues.usernameerr = "*Username must be atleast 5 Character"
            this.showErrorMsg(0,
                this.errorValues.usernameerr)
        }else if(this.formvalues.username.length > 14){
            this.errorValues.usernameerr = "*Username shoud not exceeds 14 Characters"
            this.showErrorMsg(0,
                this.errorValues.usernameerr)
        }else {
            this.errorValues.usernameerr = ''
            this.showSuccessMsg(0)
        }
    }
    validateEmail(){
        const regExp = /^([a-zA-Z0-9-_\.]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,10})(\.[a-zA-Z]{2,8})?$/
        if(this.formvalues.email === ''){
            this.errorValues.emailerr = "Please Enter Email"
            this.showErrorMsg(1,this.errorValues.emailerr)
        }else if(!(regExp.test(this.formvalues.email))){
            this.errorValues.emailerr = 'Invalid Email'
            this.showErrorMsg(1,this.errorValues.emailerr)
        }else{
            this.errorValues.emailerr = ''
            this.showSuccessMsg(1)
        }
    }
    validatePhoneno(){
         const phoneno = /^\d{10}$/
         if(this.formvalues.phoneno === ''){
            this.errorValues.phonenoerr = "*please Enter Your PhonNo"
            this.showErrorMsg(2,
                this.errorValues.phonenoerr)
         }else if((phoneno.test(this.formvalues.phoneno))){
            this.errorValues.phonenoerr = ''
            this.showSuccessMsg(2)
         }else{
            this.errorValues.phonenoerr = "*Invalid Phone Number"
            this.showErrorMsg(2,this.errorValues.phonenoerr)
         } if (this.formvalues.phoneno.length > 10) {
            this.errorValues.phonenoerr = "*PhoneNo Not Exceeds Above 10 Digits"
            this.showErrorMsg(2,this.errorValues.phonenoerr)
         }
    }
    validatePassword(){
         if(this.formvalues.password === ''){
            this.errorValues.passworderr = "*Please Provide The Password"
            this.showErrorMsg(3,this.errorValues.passworderr)
         }else if(this.formvalues.password.length <= 4){
            this.errorValues.passworderr = "*Password Must be Atleast 5 Characters"
            this.showErrorMsg(3,this.errorValues.passworderr)
         }else if(this.formvalues.password.length >10){
            this.errorValues.passworderr = "*Password Should Not be Exceeds 10 Characters"
            this.showErrorMsg(3,this.errorValues.passworderr)
         }else{
            this.errorValues.passworderr =""
            this.showSuccessMsg(3)
         }
    }
    validateConfirmpassword(){
          if(this.formvalues.confirmpassword ===''){
            this.errorValues.confirmpassworderr ="*Please Provide The ConfirmPassword"
            this.showErrorMsg(4,this.errorValues.confirmpassworderr)
          }else if(this.formvalues.confirmpassword === this.formvalues.password && this.errorValues.passworderr === ''){
             this.errorValues.confirmpassworderr =''
             this.showSuccessMsg(4)
          }else if(this.formvalues.passworderr){
            this.errorValues.confirmpassworderr = "*An Error Occured In Password Field"
            this.showErrorMsg(4,this.errorValues.confirmpassworderr)
          }else{
            this.errorValues.confirmpassworderr = '*Password Must Macth'
            this.showErrorMsg(4,this.errorValues.confirmpassworderr)
          }
    }
    alertMessage(){
           const { usernameerr,emailerr,phonenoerr,passworderr,confirmpassworderr} = this.errorValues
           if(usernameerr === '' && emailerr === '' && phonenoerr === '' && passworderr ==='' && confirmpassworderr ===''){
            swal("Registration Successful","Thank You, "+this.formvalues.username,"Success").then(() => {
            console.log(this.formvalues)
            this.removeInputs()})}
           else {
            swal("Give Valid Input","Click ok to Continue","error")
           }
    }
    removeInputs(){
      const form_group = document.getElementById('form-group')
      
      Array.from(form_group).forEach(element =>{
        element.getElementsByTagName
        ('input')[0].value = ''
        element.getElementsByTagName
        ('span')[0].textContent = ''
        element.classList.remove('success')
      })
    }
}

const ValidateUserInputs = new FormValidation() 

document.getElementsByClassName('form')[0].
addEventListener('submit',event=>{
    event.preventDefault()
    ValidateUserInputs.getInputs()
    ValidateUserInputs.validateUsername()
    ValidateUserInputs.validateEmail()
    ValidateUserInputs.validatePhoneno()
    ValidateUserInputs.validatePassword()
    ValidateUserInputs.validateConfirmpassword()
    ValidateUserInputs.alertMessage()
    ValidateUserInputs.removeInputs()
});
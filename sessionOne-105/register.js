



function registerUser(){
    console.log("Button clicked!");
    // HW: get the values for all controls
    
    let inEmail = $("#txtEmail").val();
    let inPassword = $("#txtPassword").val();
    let inFirst = $("#txtFirst").val();
    let inLast = $("#txtLast").val();
    let inAge = $("#txtAge").val();
    let inPhone = $("#txtPhone").val();
    let inAddress = $("#txtAddress").val();
    let inPayment = $("#selPayment").val();
    let inColor = $("#selColor").val();
    //2nd part: Create an object constructor for user
    class User{
        constructor(email, password, first, last, age, phone, address, payment, color){
            this.email = email;
            this.password = password;
            this.first =  first;
            this.last = last;
            this.age = age;
            this.phone = phone;
            this. address = address;
            this.payment = payment;
            this.color = color;
        }
    }
    //create a user object with data from the input fields
    let newUser =new User(inEmail,inPassword,inFirst,inLast,Number(inAge),inPhone,inAddress,inPayment,inColor);
    //console log the object
    console.log(newUser); 
    
}
    



function init(){
    console.log("Register page!");

    /**
     * # id
     * . class
     *  TAG
     */
    $("#btnSave").click(registerUser);
}

window.onload = init;





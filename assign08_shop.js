function openForm() {
    document.getElementById("myForm").style.display = "block";
}
  
function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

function getTotal() {
    var finalTotal = 0
    if(document.getElementById('option1').checked){
        var price1 = parseFloat(document.getElementById('option1').value);
    }else{
        price1 = 0
    }
    if(document.getElementById('option2').checked){
        var price2 = parseFloat(document.getElementById('option2').value);
    }else {
        price2 = 0
    } 
    if(document.getElementById('option3').checked){
        price3 = parseFloat(document.getElementById('option3').value);
    }else{
        price3 = 0
    } 
    if(document.getElementById('option4').checked){
        price4 = parseFloat(document.getElementById('option4').value);
    }else{
        price4 = 0
    }
    finalTotal = price1 + price2 + price3 + price4
    document.getElementById('total').value = '$' + finalTotal;
}

function formValidation(){
    var fname = document.getElementById("first_name").value;
    var lname = document.getElementById("last_name").value;
    var address = document.getElementById("address").value;
    var phone = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    var number = document.getElementById("phone").value;
    var cardNumber = /^\d{16}$/g;
    var ccnumber = document.getElementById("credit_card").value;
    var expiryDate = /^\d{2}[./-]\d{3}[1-9]$/;
    var expiry = document.getElementById("exp_date").value;
    if(fname === ""){
        document.getElementById("first_name").placeholder = "Please Enter Your First Name"
        document.getElementById("first_name").style.backgroundColor = "pink";
        document.getElementById("first_name").style.color = "white";
        return false;
    }else {
        document.getElementById("first_name").style.backgroundColor = "lightgray";
        document.getElementById("first_name").style.color = "black";
    } 
    if(lname === ""){
        document.getElementById("last_name").placeholder = "Please Enter Your Last Name"
        document.getElementById("last_name").style.backgroundColor = "pink";
        document.getElementById("last_name").style.color = "white";
        return false;
    }else{
        document.getElementById("last_name").style.backgroundColor = "lightgray";
        document.getElementById("last_name").style.color = "black";
    }
    if(address === ""){
        document.getElementById("address").placeholder = "Please Enter Your Address"
        document.getElementById("address").style.backgroundColor = "pink";
        document.getElementById("address").style.color = "white";
        return false;
    }else{
        document.getElementById("address").style.backgroundColor = "lightgray";
        document.getElementById("address").style.color = "black";
    }
    if(!phone.test(number)){
        document.getElementById("phone").placeholder = "Please enter your phone number. Example: 208-555-4678"
        document.getElementById("phone").style.backgroundColor = "pink";
        document.getElementById("phone").style.color = "white";
        return false;
    }else{
        document.getElementById("phone").style.backgroundColor = "lightgray";
        document.getElementById("phone").style.color = "black";
    }
    if(!cardNumber.test(ccnumber)){
        document.getElementById("first_name").placeholder = "Pleae enter your 16 digit card number"
        document.getElementById("credit_card").style.backgroundColor = "pink";
        document.getElementById("credit_card").style.color = "white";
        return false;
    }else{
        document.getElementById("credit_card").style.backgroundColor = "lightgray";
        document.getElementById("credit_card").style.color = "black";
    }
    if(!expiryDate.test(expiry)){
        document.getElementById("first_name").placeholder = "Please Enter your cards expiery date. Example: 02/2021"
        document.getElementById("exp_date").style.backgroundColor = "pink";
        document.getElementById("exp_date").style.color = "white";
        return false;
    }else{
        document.getElementById("exp_date").style.backgroundColor = "lightgray";
        document.getElementById("exp_date").style.color = "black";
    }
}
document.getElementById("form").onsubmit();
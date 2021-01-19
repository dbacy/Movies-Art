// Do all of these items listed when the user click the submit button
//  your submit button will need an event for click
let form = document.getElementById('sub'); form.addEventListener('click' , validateForm)
let NameError = document.getElementById('NameMessage')
let Name = document.getElementById('Name');
let EmailError = document.getElementById('EmailMessage')
let Email = document.getElementById('txtEmail');
let CitizenError = document.getElementById('CitizenMessage')
let Citizen = document.getElementById('Citizen'); 




function validateForm() {
    //  in the event handler do the following validations
    // Validate Name to make sure it isn't empty
    //    if it is empty put a message in the NameMesasage telling the user that the name field is required
    if(Name.value.length ==0) {
        NameError.innerHTML = 'Name Field Is Required'
    }else {
        NameError.innerHTML = ''
    }
    // Validate citizenship status.  Message in the CitizenMessage span if not a citizen
    if(Citizen.checked){
        CitizenError.innerHTML = ''
    }else{
        CitizenError.innerHTML = 'Are You A Citizen?'
    }
    // make sure email is not left blank and provide message if it is
    if(Email.value.length ==0) {
        EmailError.innerHTML = 'Email Field Is Required'
    }else {
        EmailError.innerHTML = ''
    }
    }  
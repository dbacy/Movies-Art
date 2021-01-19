// Do all of these items listed when the user click the submit button
//  your submit button will need an event for click
                // let Generror = document.getElementById('GenderMessage')
                // let GendMessage = document.getElementById('Gender'); GendMessage.addEventListener('blur' , Gender)
                // let Citierror = document.getElementById('CitizenMessage')
                // let CitiMessage = document.getElementById('Citizen'); CitiMessage.addEventListener('blur' , Citizen)
                // let Counerror = document.getElementById('CountyMessage')
                // let CounMessage = document.getElementById('County'); CounMessage.addEventListener('blur' , County)
let Emailerror = document.getElementById('EmailMessage')
let EmailMess = document.getElementById('txtEmail'); EmailMess.addEventListener('blur' , txtEmail) 
let Nameerror = document.getElementById('NameMessage')
let NameMess = document.getElementById('Name'); NameMess.addEventListener('blur', Name)
    
function Name() {
    //  in the event handler do the following validations
    // Validate Name to make sure it isn't empty
    //    if it is empty put a message in the NameMesasage telling the user that the name field is required
    if(this.value.length ==0) {
        Nameerror.innerHTML = 'Name Field Is Required'
    }else {
        Nameerror.innerHTML =''
    }
    }
    //----------------------------------------------------------------------------------------------------------------//
    // If the Gender value is left blank put an error message in GenderMessage
    function Gender() {
    if(this.value) {
    }
    }
    //----------------------------------------------------------------------------------------------------------------//
    // Validate citizenship status.  Message in the CitizenMessage span if not a citizen
    function Citizen(){
    if(this.value) {

    }
    }
    //----------------------------------------------------------------------------------------------------------------//
    // Place a message in the span of the select form if no county is selected
    function County(){
    if(this.value) {

    }
    }
    //----------------------------------------------------------------------------------------------------------------//
    // make sure email is not left blank and provide message if it is
    function txtEmail(){
    if(this.value.length ==0) {
        Emailerror.innerHTML ='Email Field Is Required'
    }else {
        Emailerror.innerHTML= ''
    }
    }  
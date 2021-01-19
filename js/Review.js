let error = document.getElementById('error')
let userName = document.getElementById('txtName'); userName.addEventListener('blur', txtName);
let change_backround = document.getElementById('FavColor'); change_backround.addEventListener('change', favColor)

    function txtName (){
        if (this.value.length == 0) {
            error.innerHTML ='User Name is Missing' 
        } else {
            error.innerHTML =''
        }
    }


    function favColor() {
        document.body.style.backgroundColor = this.value
    }
    

    
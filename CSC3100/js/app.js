let table = new DataTable('#myTable')

//Option 1 to add click events
/*document.querySelector('#btnLogin').onclick = function() {
    alert(`This is an Alert`)
}

//Option 2 to add a click event
document.querySelector(`#btnLogin`).addEventListener('click', function(){
    alert(`This is also an Alert!`)
})

//Option 3 to add an event 
document.getElementById('btnLogin').addEventListener('click', ()=>{
    alert("This another way to do an Alert!")
})

//option 4 most common way
document.querySelector('#btnLogin').addEventListener('click', ()=> {
    alert("This is the most common way.")
})
*/

//how to make a console log instead of an alert "What you want to do most of the time"
document.querySelector('#btnLogin').addEventListener('click', ()=>{
    const strEmail = document.querySelector('#txtEmail').value
    const strPassword = document.querySelector('#txtPassword').value
    //regx email should go here but I get an error when I do the slashes at the front
    strEmail = strEmail.trim()
    strPassword = strPassword.trim()
    //One way to concat a litteral string with a variable
    //console.log('Email from login form: ' + strEmail)



    Swal.fire({
      title: "Success",
      text: "Congratulations you are now logged in",
      icon: "Success"
    });

    //using template litterals 
    console.log(`Email from login form ${strEmail}`)
    console.log(`Password from login form ${strPassword}`)
})

document.querySelector('#btnRegister').addEventListener('click', ()=>{
    //document.querySelector('#divLogin').style = "display:none"
    //document.querySelector('#divRegister').style = "display:block".slidedown
    $('#divLogin').slideUp(function(){
        $('#divRegister').slideDown()
    })
})

document.querySelector('#btnReturn').addEventListener('click', ()=> {
    document.querySelector('#divRegister').style = "display:none"
    document.querySelector('#divLogin').style = "display:block"

})

//Other variable decleration
var strTest = `This is a globally scoped variable` 
let strtest2 = "This is a locally scoped variable"

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
    //One way to concat a litteral string with a variable
    //console.log('Email from login form: ' + strEmail)

    //using template litterals 
    console.log(`Email from login form ${strEmail}`)
    console.log(`Password from login form ${strPassword}`)
})
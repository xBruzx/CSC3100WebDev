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
    //strEmail = strEmail.trim()
    //strPassword = strPassword.trim()
    //One way to concat a litteral string with a variable
    //console.log('Email from login form: ' + strEmail)



    Swal.fire({
      title: "Success",
      text: "Congratulations you are now logged in",
      icon: "Success"
    });
    let arrAnimals = ['Hippo', 'Penguin', 'Otter']
    console.log(arrAnimals)
    console.log(arrAnimals.length)
    console.log(arrAnimals[1])
    let objHippo = {
        name: 'Hippo',
        size: 'Large',
        speed: 'Fast',
        environment: {
            temperature: 'hot',
            humidity: 'high',
            moisture: 'Wet'
        }
    }

    let objOtter = {
        name: 'Otter',
        size: 'Small',
        speed: 'Fast',
        environment: 'River'
    }
    
    arrAnimals.push('duck', 'bat')
    console.log(arrAnimals)
    console.log(objHippo)
    console.log(objOtter)

    let arrAnimalObjs = [objHippo, objOtter]
    console.log(arrAnimalObjs)

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

document.querySelector('#btnRegisterAcc').addEventListener('click', ()=> {
    Swal.fire({
        title: "Success",
        text: "Congrats you have registered!",
        icon: "Success",
    })

})

//Other variable decleration
var strTest = `This is a globally scoped variable` 
let strtest2 = "This is a locally scoped variable"

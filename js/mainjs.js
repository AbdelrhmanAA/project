
let fName = document.getElementById("name");
let email = document.getElementById("email");
let phoneNumber = document.getElementById("phoneNumber");
let address = document.getElementById("address");
let submit = document.getElementById("submit");

// array to store data
let arrayOfData = [];

if (localStorage.getItem("clints")) {
    arrayOfData = JSON.parse(localStorage.getItem("clints"))
}

// Add
submit.onclick = function () {
    addDataToArray(fName.value ,email.value,phoneNumber.value,address.value );
    fName.value = "";
    email.value = "";
    phoneNumber.value = "";
    address.value = "";
    
}

function addDataToArray(n ,e, ph , addr)
{
    const infoData ={
        id: Date.now(),
        name: n,
        email: e,
        phoneNumber: ph,
        address: addr,
    };

    // push data to array
    arrayOfData.push(infoData);
    console.log(arrayOfData);
    // add task to local storage
    addDataToLocal(arrayOfData);
}

function addDataToLocal(arrayOfData)
{
    window.localStorage.setItem( "clints" , JSON.stringify(arrayOfData));

}
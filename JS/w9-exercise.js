console.log("Hello");

function multipication(){
    let value1 = document.querySelector("#number1").value;
    let value2 = document.querySelector("#number2").value;
    document.querySelector("#output").textContent = " The multipication is " + value1 * value2
    
}

document.querySelector("#btn").addEventListener("click", multipication);
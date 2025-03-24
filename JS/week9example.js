console.log("Hello");

function showGrettingMessage(){
    let name = window.prompt("What is your name?");
    window.alert("Hello " +name);
}

//showGrettingMessage();

document.querySelector("#btn").addEventListener("click", showGrettingMessage);





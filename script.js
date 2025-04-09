function sendWhatsApp() {

    console.log("start");
    let number = "+528448933437";
    let name = document.getElementById("name").value;
    let correo = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    
    var url = "https://wa.me/" + number + "?text=" + "Nombre: " + name + "%0a Correo: " + correo + "%0a Mensaje: " + message;
    window.open(url, "_blank").focus();
    return true;
}

//faq section
function unhide(thiss){
    let answers = document.getElementsByClassName("answer");
    answersArray = Array.from(answers);
    if (thiss.children[1].classList.contains("hidden")){
        console.log("hidden")
        answersArray.forEach(element =>{
            element.classList.add("hidden");
        })
        thiss.children[1].classList.remove("hidden");
    }
    else{
        thiss.children[1].classList.add("hidden");
    }
}

//faq section
document.addEventListener("DOMContentLoaded", ready);
function ready(){
    let questions = document.getElementsByClassName("question");
    let questionsArray = Array.from(questions);

    questionsArray.forEach(element =>{
        element.addEventListener("click", function(){
            unhide(this);
        })
        })
}


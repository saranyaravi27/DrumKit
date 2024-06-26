
var NoofButton = document.querySelectorAll(".drum").length;

for( var i =0; i<NoofButton; i++){

    handlebutton();

}

// type of handle click or keyboard
function handlebutton(){
        document.querySelectorAll(".drum")[i].addEventListener("click", function(){
            var buttonInnerHTML = this.innerHTML;
            Sound(buttonInnerHTML);
            animation(buttonInnerHTML);
        });

        document.addEventListener("keypress",function(event){
            Sound(event.key);
            animation(event.key);
        });
}

// assinging sound
function Sound(key) {
      
    switch (key) {
        case "w" :
            var crash = new Audio("sounds/crash.mp3")
            crash.play();
            break;
        case "a" :
            var tom1 = new Audio("sounds/tom-1.mp3")
            tom1.play();
            break;
        case "s" :
            var tom2 = new Audio("sounds/tom-2.mp3")
            tom2.play();
            break;
        case "d" :
            var kick = new Audio("sounds/kick-bass.mp3")
            kick.play();
            break; 
        case "j" :
            var tom3 = new Audio("sounds/tom-3.mp3")
            tom3.play();
            break;  
        case "k" :
            var tom4 = new Audio("sounds/tom-4.mp3")
            tom4.play();
            break;  
        case "l" :
            var snare = new Audio("sounds/snare.mp3")
            snare.play();
            break;  
        default:
            console.log("Press Valid Key");
        }    

}

// adding animation

function animation(currentkey){
    var activebtn = document.querySelector("." + currentkey);
    activebtn.classList.add("pressed");

    setTimeout(function(){
        activebtn.classList.remove("pressed");
    }, 100);
}




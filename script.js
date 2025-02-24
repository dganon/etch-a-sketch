const container = document.getElementById("container");
let userInput = 16;
let gridCount = userInput * userInput;
//let flexBas = Math.round((100/input) * 10) / 10; // rounds to nearest tenth
let flexBas = 100/userInput;

let submitBtn = document.querySelector("button");
let textField = document.getElementById("gridSize");

submitBtn.addEventListener("click", function(event){
    event.preventDefault();
    userInput = textField.value;
    gridCount = userInput * userInput;
    flexBas = 100/userInput;
    
    if (userInput <= 100 && userInput > 0){
        container.replaceChildren();
        createDivs();
    }
    else{
        alert("please choose a number between 1-100.");
    }
});

createDivs();

function createDivs(){
    for (let i = 0; i < gridCount; i++){
        const newDiv = document.createElement("div");
        newDiv.classList.add("square");
        newDiv.style.flexBasis = flexBas + "%";
        container.append(newDiv);

        newDiv.addEventListener ("mouseover", (event) => {
            event.target.style.backgroundColor = "coral";
        });
    }

    document.body.appendChild(container);
}

function removeDiv(){

}




 

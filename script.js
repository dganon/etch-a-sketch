const container = document.getElementById("container");
let gridCount = 16;
// gridCount will be changed to user input

function createDivs(){
    for (let i = 0; i < gridCount; i++){
        const newDiv = document.createElement("div");
        //newDiv.style.flex = "auto";
        //newDiv.style.flexBasis = "auto";
        newDiv.textContent = "hi";
        newDiv.classList.add("square");
        newDiv.style.flexBasis = "25%";
        container.append(newDiv);
    }

    document.body.appendChild(container);
}

createDivs();

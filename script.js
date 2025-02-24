const container = document.getElementById("container");
let input = 16;
const gridCount = input * input;
//let flexBas = Math.round((100/input) * 10) / 10; // rounds to nearest tenth
let flexBas = 100/input;
// console.log(flexBas);

function createDivs(){
    for (let i = 0; i < gridCount; i++){
        const newDiv = document.createElement("div");
        //newDiv.style.flex = "auto";
        //newDiv.style.flexBasis = "auto";
        //newDiv.textContent = ".";
        newDiv.classList.add("square");
        newDiv.style.flexBasis = flexBas + "%";
        container.append(newDiv);

        newDiv.addEventListener ("mouseover", (event) => {
            event.target.style.backgroundColor = "plum";
        });
    }

    document.body.appendChild(container);
}

createDivs();
 

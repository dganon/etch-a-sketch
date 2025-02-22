const container = document.getElementById("container");

for (let i = 0; i < 16; i++){
    const newDiv = document.createElement("div");
    //newDiv.style.flex = "auto";
    //newDiv.style.flexBasis = "auto";
    newDiv.setAttribute("style", "border: 1px solid coral; background-color: white;");
    newDiv.textContent = "hi";
    container.append(newDiv);
}

document.body.appendChild(container);
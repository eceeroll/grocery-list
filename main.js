const groceries = document.querySelector(".groceries");
const pencil = document.querySelector("#pencil");
const itemList = document.querySelector("#itemList");
const input = document.getElementById("userInput");

pencil.addEventListener("click",clearAll);
input.addEventListener("keydown",function(e){
    if ( e.key == 'Enter')
    addItem();
})

function addItem(){
    var h2 = document.createElement("h2");
    h2.innerHTML = " - " + input.value;

    h2.addEventListener("click", function(){
        h2.style.textDecoration = "line-through";
    })

    itemList.appendChild(h2);

    input.value = ""; // clears input after press the enter
}

function clearAll(e) {
    itemList.innerHTML = "";
}
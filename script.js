const btn = document.querySelector(".sub-heading");
const notesContanerEl = document.querySelector(".notes-contaner")
let notes = document.querySelectorAll(".input-box")


function saveData(){
    localStorage.setItem("data",notesContanerEl.innerHTML)
}
function showData(){
    notesContanerEl.innerHTML=localStorage.getItem("data")
}
showData()

btn.addEventListener("click",()=>{
    let inputBox = document.createElement("p");
    let img = document.createElement("img")
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable","true");
    img.src = "delete.png"

    notesContanerEl.appendChild(inputBox).appendChild(img);
    
})

notesContanerEl.addEventListener("click",function(e){
    if(e.target.tagName ==="IMG"){
        e.target.parentElement.remove();
        saveData()
    }
    else if(e.target.tagName ==="P"){
        notes = document.querySelectorAll(".input-box")
        notes.forEach(nt =>{
            nt.onkeyup = function(){
                saveData()
            }
        })
    }
})

document.addEventListener("keydown",event =>{
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})


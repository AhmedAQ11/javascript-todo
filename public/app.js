var listBox = document.getElementById("listBox")

listBox.setAttribute("class" , "myDiv")

function addToDo(){
    var input = document.getElementById("input");

    // console.log(input.value.length)

    if(input.value.length > 3){
        console.log("corrent")
    var li = document.createElement("li")
    var liText = document.createTextNode(input.value)

    li.appendChild(liText)
    // console.log(li)

    //// add btn ////

    var editBtn = document.createElement("button");
    var editBtnText = document.createTextNode("EDIT")
    editBtn.setAttribute("onClick" , "editList(this)")

    editBtn.appendChild(editBtnText)

    //// DEL BTN ////

    var delBtn = document.createElement("button")

    var delTextBtn = document.createTextNode("DELETE")
    delBtn.setAttribute("onClick" , "delList(this)")

    delBtn.appendChild(delTextBtn)

    listBox.appendChild(li);
    li.appendChild(editBtn);
    li.appendChild(delBtn);

 
   input.value = "";
}else{
    console.log("wrong")
}


}

function allDel(){
    listBox.innerHTML = "";
}

function editList(e){
    var editUser = prompt("enter your value" , e.parentNode.firstChild.nodeValue )
    
    e.parentNode.firstChild.nodeValue = editUser
}
function delList(e){
    e.parentNode.remove()
}
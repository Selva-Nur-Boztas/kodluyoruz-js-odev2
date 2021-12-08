let btnDOM = document.querySelector("#liveToastBtn")
let listDOM = document.querySelector("#list")
let taskDOM = document.querySelector("#task")
let ulDom = document.getElementsByTagName("li");


// Silme işlemi
for(let i=0; i < ulDom.length;i++){ 
    let closeButton = document.createElement("span");
    closeButton.textContent = "\u00D7";
    closeButton.classList.add("close");
    closeButton.onclick = removeButton;
    ulDom[i].append(closeButton); 
    ulDom[i].onclick = check;
}

// Butonlara özellik tanımlanması
btnDOM.addEventListener('click', elemanEkle)

function check(){
  this.classList.toggle("checked");
}

function removeButton(){
  this.parentElement.remove();
}

function elemanEkle() {
 
    if (taskDOM.value == "")  { 
    $(".error").toast("show");  
    }
    else {
    $(".success").toast("show");

    let liDOM = document.createElement('li')
    listDOM.appendChild(liDOM);
    liDOM.innerHTML = task.value;
    taskDOM.value = "";   
   
   //Sonradan eklenenleri silmek için
   
    liDOM.onclick = check;
        
    let closeButton = document.createElement("span");
        closeButton.textContent = "\u00D7";
        closeButton.classList.add("close");
        closeButton.onclick = removeButton;
        
        liDOM.append(closeButton);
        listDOM.append(liDOM);
        inputElement.value = ("");       
}
}    

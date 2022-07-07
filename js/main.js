let itemImput = document.getElementById("item-imput");
let itemButtonAdd = document.getElementById("item-button-add");
let itemButtonRenoveAll = document.getElementById("item-button-remove-all");
let itemList = document.getElementById("item-list");
let recoverLocalStorage = JSON.parse(localStorage.getItem("itemLocalStorage"));
let itemListArray = [];

if (recoverLocalStorage === null){
  console.log("localstorage esta vacio")
}else{
  itemListArray = recoverLocalStorage;
  itemDisplay()
}

//FUNCTIONS

function itemDisplay () {
  let itemHtml = '';
  if (itemListArray.length > 0){
    for(let i=0; i<itemListArray.length; i++){
      itemHtml += `<li><spam>${itemListArray[i]}</spam><button class="btn btn-outline-secondary m-2" onclick='removeItem(${i})'>Eliminar</button></li>`
    }
  }
  document.getElementById('item-list').innerHTML = itemHtml;
}

const itemAdd = () => {
  const item = itemImput.value;
  
  if (item == "" ){
    itemImput.setAttribute("placeholder","Agrege una tarea valida");
  }else{
    itemListArray.push(item);
    itemDisplay();
    itemImput.value = "";
    localStorage.setItem("itemLocalStorage", JSON.stringify(itemListArray));
  }  
}

const removeItem = (itemList) => {
  itemListArray.splice(itemList,1);
  localStorage.setItem("itemLocalStorage", JSON.stringify(itemListArray));
  itemDisplay();  
}

const removeAllItems = () => {
  itemListArray = [];
  localStorage.setItem("itemLocalStorage", JSON.stringify(itemListArray));
  itemDisplay();
}

//EVENTS
itemButtonAdd.addEventListener("click", itemAdd);
itemButtonRenoveAll.addEventListener("click", removeAllItems);
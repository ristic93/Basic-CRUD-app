const inputGroceryElement = document.querySelector('.input-grocery');
const btnAddElement = document.querySelector('.btn-add');
const tableListElement = document.querySelector('.table-list');
const btnSaveElement = document.querySelector('.btn-save');
const btnBackElement = document.querySelector('.btn-back');
const btnClearElement = document.querySelector('.btn-clear');


const list = [];
let editId = null;


btnAddElement.addEventListener('click', () => {
   if(inputGroceryElement.value != '') {
    adding();
   } else {
    alert(`First you must enter your grocery!`)
   }
   printing();
   inputGroceryElement.value = '';
   inputGroceryElement.focus();
   
});

btnSaveElement.addEventListener('click', () => {
    list[editId] = inputGroceryElement.value;

    tableListElement.hidden = false;
    btnAddElement.hidden = false;
    
    btnSaveElement.hidden = true;
    btnBackElement.hidden = true;

    inputGroceryElement.value = '';
    inputGroceryElement.focus();

    printing();
});

btnBackElement.addEventListener('click', () => {
    tableListElement.hidden = false;
    btnAddElement.hidden = false;
    
    btnSaveElement.hidden = true;
    btnBackElement.hidden = true;

    inputGroceryElement.value = '';
    inputGroceryElement.focus();
    editId = null;
})

btnClearElement.addEventListener('click', () => {
    clearAll();
    inputGroceryElement.focus();
});




const adding = () => {
    list.push(inputGroceryElement.value);
    console.log(list);
};

const printing = () => {
    tableListElement.innerHTML = '';
    list.forEach((element,idx) => {
        tableListElement.innerHTML += `
        <th scope="row">${idx+1}</th>
        <td class="fs-5">${element}</td>
        <td><button class="btn-update btn btn-warning btn-md" onClick="edit(${idx})">Edit <i class="bi bi-pencil"></i></button></td>
        <td><button class="btn-erase btn btn-danger btn-md" onClick="erasing(${idx})">Delete <i class="bi bi-trash3"></i></button></td>
        `
    });
}

const erasing = (idx) => {
    list.splice(idx,1);
    printing();
    inputGroceryElement.focus();
}

const edit = (idx) => {
    inputGroceryElement.value = list[idx];
    tableListElement.hidden = true;
    btnAddElement.hidden = true;
    
    btnSaveElement.hidden = false;
    btnBackElement.hidden = false;
    
    tableListElement.hidden = true;
    btnAddElement.hidden = true;
    
    
    editId = idx;
}

const clearAll = (idx) => {
    list.splice(idx, list.length);
    tableListElement.innerHTML = '';
}
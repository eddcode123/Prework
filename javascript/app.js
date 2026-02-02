// Select items
const alert = document.querySelector('.alert');
const form = document.querySelector('.grocery-form');
const grocery = document.getElementById('grocery');
const submitbtn = document.querySelector('.submit-btn');
const container = document.querySelector('.grocery-container');
const list = document.querySelector('.grocery-list');
const clearbtn = document.querySelector('.clear-btn');

//edit options
let editElement;
let editFlag = false;
let editId = "";

// event listeners
//submit form
form.addEventListener('submit', addItem);

// functions
function addItem(e)
{
    e,preventDefault();
}
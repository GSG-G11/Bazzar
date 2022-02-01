const productName = document.getElementById('name');
const price = document.getElementById('price');
const imgLink = document.getElementById('img-link');
const category = document.getElementById('category');
const confirmBtn = document.getElementById('confirm');
const form=document.querySelector('.form')

let productsArr = JSON.parse(localStorage.getItem('products')) || [];
let id = JSON.parse(localStorage.getItem('id')) || 0;



function updateProducts(e) {
    e.preventDefault();
    const item={id , name:productName.value , link:imgLink.value , price:price.value , category:category.value}
    const index = localStorage.getItem('editIndex') || productsArr.length;
    productsArr[index] = item;
    localStorage.setItem('products', JSON.stringify(productsArr))
    localStorage.removeItem('editIndex')
    id++;
    localStorage.setItem('id', JSON.stringify(id))
}

form.addEventListener('submit',updateProducts)


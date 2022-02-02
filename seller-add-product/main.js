const productName = document.getElementById('name');
const price = document.getElementById('price');
const imgLink = document.getElementById('img-link');
const category = document.getElementById('category');
const confirmBtn = document.getElementById('confirm');
const form = document.querySelector('.form')
const dashboardBtn = document.getElementById('dashboard')
let id = JSON.parse(localStorage.getItem('id')) || 0;
let editId = localStorage.getItem('editId');
let productsArr = JSON.parse(localStorage.getItem('products')) || [];

if (editId) {
    const editIndex = productsArr.findIndex(item => item.id == editId);
    toBeEdit=productsArr[editIndex];
    productName.value =toBeEdit.name
    imgLink.value =toBeEdit.link
    price.value =toBeEdit.price
    category.value =toBeEdit.category
}

function updateProducts(e) {
    productsArr = JSON.parse(localStorage.getItem('products')) || [];
    e.preventDefault();
    let item = { name: productName.value, link: imgLink.value, price: price.value, category: category.value }
    editId = localStorage.getItem('editId');
    if (editId) {
        productsArr = editItemInArray(productsArr, item, editId)
        localStorage.removeItem('editId')
    } else {
        item = { id, ...item };
        productsArr.push(item)
        id++;
    }
    localStorage.setItem('products', JSON.stringify(productsArr))
    localStorage.setItem('id', JSON.stringify(id))
    form.reset();
}

form.addEventListener('submit', updateProducts);
dashboardBtn.addEventListener('click', () => location.href = '../seller-dashboard/seller-dashboard.html')



let cart = JSON.parse(localStorage.getItem('cart')) || [];
const section = document.querySelector(".section");
const searchInput = document.getElementById("search");
let productsArr = JSON.parse(localStorage.getItem('products')) || [];
let newArray = productsArr;
function addCard(object) {
  const card = document.createElement("div");
  card.classList.add("card");

  //add card in sec
  section.appendChild(card);

  //create img
  const img = document.createElement("img");
  img.src = object.link;

  //add img in card
  card.appendChild(img);

  //create h2 (Product Name)
  const ProductName = document.createElement("h2");
  ProductName.innerHTML = object.name;

  //add h2 in card
  card.appendChild(ProductName);

  //create  (price Name)
  const price = document.createElement("p");
  price.innerHTML = object.price;

  //add price in card
  card.appendChild(price);

  // create buttons container
  const btnsContainer = document.createElement("div");
  btnsContainer.classList.add('btns-container');
  //create edit button
  const editButton = document.createElement("button");
  editButton.textContent = "Edit";
  editButton.onclick = () => {
    localStorage.setItem('editId', object.id);
    location.href = '../seller-add-product/seller-add-product.html';
  }
  btnsContainer.appendChild(editButton);
  //create delete button
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.onclick = () => {
    if(confirm('Are you sure?!')){
      productsArr = deleteItem(productsArr, object.id);
      localStorage.setItem('products', JSON.stringify(productsArr))
      let value = document.getElementById('categories').value;
      newArray = filterCards(value, productsArr);
      newArray = search(searchInput.value.toLowerCase(), newArray);
      dispalyCard(newArray);
    }
  }
  btnsContainer.appendChild(deleteButton)

  //add btn in card
  card.appendChild(btnsContainer);


}
const addToCart = (object) => {
  cart.push(object);
  localStorage.setItem('cart', JSON.stringify(cart));
}



categories.addEventListener("change", () => {
  let value = document.getElementById('categories').value;

  newArray = filterCards(value, productsArr);
  dispalyCard(newArray);
})


searchInput.addEventListener("input", (event) => {
  let value = document.getElementById('categories').value;
  event.preventDefault();
  newArray = filterCards(value, productsArr);
  newArray = search(searchInput.value.toLowerCase(), newArray);
  dispalyCard(newArray);


})
let dispalyCard = (array) => {
  section.innerHTML = "";
  array.forEach((ele) => {
    addCard(ele);
  })
}


dispalyCard(productsArr);


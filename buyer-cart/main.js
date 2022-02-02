

const section = document.querySelector(".section");

let cartArr = JSON.parse(localStorage.getItem('cart')) || [];


cartArr.forEach(element => {
    addCard(element)
    
});


function addbuyed(object) {
  const buyed = document.createElement("div");
  buyed.classList.add("buyed");

  //add card in sec
  section.appendChild(buyed);


  //create h2 (Product Name)
  const ProductName = document.createElement("h2");
  ProductName.innerHTML = object.name;

  //add h2 in card
  buyed.appendChild(ProductName);

  //create  (price Name)
  const price = document.createElement("p");
  price.innerHTML = object.price;

  //add price in card
  buyed.appendChild(price);

  const btns = document.createElement("div");
    btns.className= "btns";
     buyed.appendChild(btns);

  //create  (delete btn )
  const btnDelete = document.createElement("button");
  btnDelete.textContent = "Delete";

  btnDelete.className = "btnDelete";

    //add btn in card
    btns.appendChild(btnDelete);

    //create  (buy btn )
    const btnBuy = document.createElement("button");
    btnBuy.textContent = "Pay";

    btnBuy.className = "btnPay";
    btns.appendChild(btnBuy);

    //


  return buyed;
}

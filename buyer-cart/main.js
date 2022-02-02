const section = document.querySelector(".section");

let cartArr = JSON.parse(localStorage.getItem("cart")) || [];

cartArr.forEach((element) => {
  addCard(element);
});

function addbuyed(object) {
  const buyed = document.createElement("div");
  buyed.classList.add("buyed");

  //add card in sec
  section.appendChild(buyed);

  //create h2 (Product Name)
  const ProductName = document.createElement("h2");
  let textProductName = document.createTextNode(object.name);
  ProductName.appendChild(textProductName);

  //add h2 in card
  buyed.appendChild(ProductName);

  //create  (price Name)
  const price = document.createElement("p");
  let textPrice = document.createTextNode(object.price);
  price.appendChild(textPrice);

  //add price in card
  buyed.appendChild(price);

  const btns = document.createElement("div");
  btns.className = "btns";
  buyed.appendChild(btns);

  //create  (delete btn )
  const btnDelete = document.createElement("button");
  btnDelete.textContent = "Delete";

  btnDelete.className = "btnDelete";

  //add btn in card
  btns.appendChild(btnDelete);

  btnDelete.addEventListener("click", () => {
   
    localStorage.setItem("cart", JSON.stringify( deleteItms(cartArr , object.id)));

    (btnDelete.parentElement).parentElement.remove();
  });

  //create  (buy btn )
  const btnBuy = document.createElement("button");
  btnBuy.textContent = "Pay";

  btnBuy.className = "btnPay";
  btns.appendChild(btnBuy);

  

  return buyed;
}

let deleteAll = document.querySelector(".deleteAll");

deleteAll.addEventListener("click", () => {
  cartArr = [];
  localStorage.setItem("cart", JSON.stringify(cartArr));

  document.querySelectorAll(".buyed").forEach((e) => e.remove());
});


const deleteItms = (Arr , id) => {
    let newtArr = Arr.filter((obj) => obj.id !== id);
   Arr = [...newtArr];
   return Arr;
}
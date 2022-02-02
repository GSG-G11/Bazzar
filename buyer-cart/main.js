

const section = document.querySelector(".section");

let cartArr = JSON.parse(localStorage.getItem('cart')) || [];


cartArr.forEach(element => {
    addCard(element)
    
});

function addCard(object){

    const card = document.createElement("div");
    card.classList.add("card");

    //add card in sec
    section.appendChild(card);

    //create img
    const img =  document.createElement("img");
    img.src = object.link;

    //add img in card 
    card.appendChild(img);


    //create h2 (Product Name)
    const ProductName =  document.createElement("h2");
    ProductName.innerHTML = object.name;

    //add h2 in card 
    card.appendChild(ProductName);



    //create  (price Name)
    const price =  document.createElement("p");
    price.innerHTML = object.price;

    //add price in card 
    card.appendChild(price);

    //create  (btn )
    const addButton =  document.createElement("button");
    addButton.textContent = "Add To Cart"
    

    //add btn in card 
    card.appendChild(addButton);



    return card;

}



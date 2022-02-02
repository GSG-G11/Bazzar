
let productsArr = JSON.parse(localStorage.getItem('products')) || [];



let search = (value, productsArr) => {
  if (value) {
    let newArray = productsArr.filter(ele => {
      return ele.name.includes(value);
    });

    return newArray;
  }
};

let filterCards = (value, productsArr) => {
  if (value !== "All") {
    let newArray = productsArr.filter(ele => {
      return ele.category === value;
    });
    return newArray;
  }
  return productsArr;
};
module.exports = { search, filterCards, productsArr };

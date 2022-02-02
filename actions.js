let search = (value, productsArr) => {
  let newArray = [...productsArr]
  if (value) {
    newArray = productsArr.filter(ele => {
      return ele.name.toLowerCase().includes(value);
    });
  }
  return newArray;
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
module.exports = { search, filterCards};

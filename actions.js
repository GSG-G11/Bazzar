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

function deleteItem(array, id) {
  const resultArr = [...array];
  const deleteIndex = resultArr.findIndex(item => item.id === id);
  resultArr.splice(deleteIndex, 1);
  return resultArr
}

function editItemInArray(array, item, id) {
  const resultArr = [...array];
  const editIndex = resultArr.findIndex(item => item.id == id);
  resultArr[editIndex] = { id, ...item }
  return resultArr
}
const deleteItems = (Arr, id) => {
  let newtArr = Arr.filter((obj) => obj.id !== id);
  Arr = [...newtArr];
  return Arr;
};
function getTotalPrice(cartArray) {
  return cartArray.reduce((acc, ele) => acc + Number(ele.price), 0);
}

module.exports = { search, filterCards, deleteItem, editItemInArray ,deleteItems,getTotalPrice };

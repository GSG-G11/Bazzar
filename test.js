const {search, filterCards,productsArr}=require('./actions.js');


test('checkFilter function ',function(){
    expect(filterCards("men",productsArr)).toStrictEqual([
        {"category": "men", "id": "2", "name": "Tshirt", "price": "30$"},
    ]);
})


test('checkFilter function ',function(){
    expect(filterCards("women",productsArr)).toStrictEqual([
        {id:"1",name:"tshirt",price:"30$","category":"women"},
    ]);
})
test('ckeck search',function(){
    expect(search("tshirt",productsArr)).toStrictEqual([ 
        {id:"1",name:"tshirt",price:"30$","category":"women"}
]);
})
test('ckeck search',function(){
    expect(search("Tshirt",productsArr)).toStrictEqual([ 
        {"category": "men", "id": "2", "name": "Tshirt", "price": "30$"},
        {id:"3",name:"Tshirt",price:"30$","category":"children"},
]);
})
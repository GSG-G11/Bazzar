const { search, filterCards, productsArr, deleteItem, editItemInArray } = require('./actions.js');


test('checkFilter function ', function () {
    expect(filterCards("men", productsArr)).toStrictEqual([
        { "category": "men", "id": "2", "name": "Tshirt", "price": "30$" },
    ]);
})


test('checkFilter function ', function () {
    expect(filterCards("women", productsArr)).toStrictEqual([
        { id: "1", name: "tshirt", price: "30$", "category": "women" },
    ]);
})
test('ckeck search', function () {
    expect(search("tshirt", productsArr)).toStrictEqual([
        { id: "1", name: "tshirt", price: "30$", "category": "women" }
    ]);
})
test('ckeck search', function () {
    expect(search("Tshirt", productsArr)).toStrictEqual([
        { "category": "men", "id": "2", "name": "Tshirt", "price": "30$" },
        { id: "3", name: "Tshirt", price: "30$", "category": "children" },
    ]);
})

describe('Testing deleteItem return value', () => {
    test('Test deleteItem([1,{id:5},3],5) should return [1,3]  ', () => {
        const actual = deleteItem([1, { id: 5 }, 3], 5);
        const expected = [1, 3]
        expect(actual).toEqual(expected)
    })
    test('Test deleteItem([{id:2},{id:4},{id:7}]),2) should return [{id:4},{id:7}]', () => {
        const actual = deleteItem([{ id: 2 }, { id: 4 }, { id: 7 }], 2)
        const expected = [{ id: 4 }, { id: 7 }];
        expect(actual).toEqual(expected)
    })
    test('Test deleteItem([{id:2},{id:4},{id:7}]),4) should return [{id:2},{id:7}]', () => {
        const actual = deleteItem([{ id: 2 }, { id: 4 }, { id: 7 }], 4)
        const expected = [{ id: 2 }, { id: 7 }];
        expect(actual).toEqual(expected)
    })
    test('Test deleteItem([{id:2},{id:4},{id:7}]),7) should return [{id:2},{id:4}]', () => {
        const actual = deleteItem([{ id: 2 }, { id: 4 }, { id: 7 }], 7)
        const expected = [{ id: 2 }, { id: 4 }];
        expect(actual).toEqual(expected)
    })
})
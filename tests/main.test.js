import * as main from "../main.js"
//const main = require("../main.js")

// calculateDiscount(price, discountRate)
// filterProducts(products, callback)
// sortInventory(inventory, key)
let defaultProd 

beforeEach(() => defaultProd = {"apple":{"price":1}, "banana":{"price":2}, "coconut":{"price":3}})

describe("calculateDiscount", function(){
    //positive
    test("Should calculate a number based on a discount", function(){
        expect(main.calculateDiscount(100, 0.5)).toBe(50)
    })

    //negative
    test("Should do nothing if given a negative discount", function(){
        expect(main.calculateDiscount(100, -0.5)).toBe(100)
    })
    test("Should do nothing if given a suplus discount", function(){
        expect(main.calculateDiscount(100, 1.5)).toBe(100)
    })

    //edge
    test("Should do nothing if given 0% discount", function(){
        expect(main.calculateDiscount(100, 0)).toBe(100)
    })
    test("Should return 0 if given 100% discount", function(){
        expect(main.calculateDiscount(100, 1)).toBe(0)
    })
})


describe("filterProducts", function(){
    //positive
    test("Should filter products according to the callback function", function(){
        expect(main.filterProducts(defaultProd, ([name,info])=>info.price<=1)).toEqual({"apple":{"price":1}})
    })
    
    //negative
    test("Should do nothing if filtering a non object", function(){
        expect(main.filterProducts("I am not an object!", ([name,info])=>info.price<=1)).toEqual({})
    })
    test("Should do nothing if invalid filter is given", function(){
        expect(main.filterProducts(defaultProd, "I am not an filter!")).toEqual({})
    })

    //edge
    test("Shouldn't crash if object is empty", function(){
        expect(main.filterProducts({}, ([name,info])=>info.price<=1)).toEqual({})
    })
    //*insert hypothetical edge case where theres just a ridiculous amount of products and it passes*
})

describe("sortInventory", function(){
    //positive
    test("Should return a sorted inventory", function(){
        expect(main.sortInventory(defaultProd, (a,b) => a > b)).toEqual({"coconut":{"price":3}, "banana":{"price":2}, "apple":{"price":1}})
    })

    //negative
    test("Should return blank if not given a proper sorting function", function(){
        expect(main.sortInventory(defaultProd, "*insert bad sorting*")).toEqual({})
    })
    test("Shoul return blank if not given a proper input list", function(){
        expect(main.sortInventory("I am unsortable", (a,b) => a > b)).toEqual({})
    })
    
    //edge
    test("Should return blank if given blank", function(){
        expect(main.sortInventory({}, (a,b) => a > b)).toEqual({})
    })
    //*insert hypothetical edge case where theres just a ridiculous amount of products and it passes*
})
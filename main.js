function calculateDiscount(price, discountRate) {
    if (typeof price !== 'number' || typeof discountRate !== 'number') return price;
    if (discountRate < 0 || discountRate > 1) return price;
    return price - (price*discountRate);
}

function filterProducts(products, callback) {
    if (!Array.isArray(Object.keys(products)) || typeof callback !== 'function') return {};
    let prod = Object.entries(products)
    //{"apple":{"price":1}} == [["apple", {"price":1}]]
    prod = prod.filter(callback)
    return Object.fromEntries(prod);
}

function sortInventory(inventory, key) {
    if (typeof inventory !== 'object'||!Array.isArray(Object.keys(inventory)) || typeof key !== 'function') return {};
    let inv = Object.entries(inventory)
    inv = inv.sort(key)
    return Object.fromEntries(inv);
}

export {calculateDiscount,filterProducts,sortInventory}
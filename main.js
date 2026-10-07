function calculateDiscount(price, discountRate) {
    if (typeof price !== 'number' || typeof discountRate !== 'number') return price;
    if (discountRate < 0 || discountRate > 1) return price;
    // TODO: Implement logic
    return null;
}

function filterProducts(products, callback) {
    if (!Array.isArray(Object.keys(products)) || typeof callback !== 'function') return {};
    // TODO: Implement filtering logic
    return [];
}

function sortInventory(inventory, key) {
    if (!Array.isArray(Object.keys(inventory)) || typeof key !== 'string') return {};
    // TODO: Implement sorting logic
    return [];
}

export {calculateDiscount,filterProducts,sortInventory}
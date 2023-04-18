class Storage {
    constructor(capacity) {
        this.capacity = capacity;
        this.storage = [];
        // this.totalCost = 0;
    }

    get totalCost() {
        return this.storage.reduce((previous, current) => {
            return previous + current.price * current.quantity
        }, 0);
    }

    addProduct(product) {
        this.storage.push(product);
        // this.totalCost += product.price + product.quantity;
        this.capacity -= product.quantity
    }

    getProducts() {
        let result = [];
        this.storage.forEach((product) => result.push(JSON.stringify(product)))
        return result.join("\n")
    }
}

let productOne = {name: 'Cucamber', price: 1.50, quantity: 15};
let productTwo = {name: 'Tomato', price: 0.90, quantity: 25};
let productThree = {name: 'Bread', price: 1.10, quantity: 8};
let storage = new Storage(50);
storage.addProduct(productOne);
storage.addProduct(productTwo);
storage.addProduct(productThree);
console.log(storage.getProducts());
console.log(storage.capacity);
console.log(storage.totalCost);

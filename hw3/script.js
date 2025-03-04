class Employee {
    constructor(name) {
        this.name = name;
    }

    displayInfo() {
        console.log(`Name: ${this.name}`);
    }
}

class Manager extends Employee {
    constructor(name, department) {
        super(name);
        this.department = department;
    }
    displayInfo() {
        console.log(`Name: ${this.name}, Department: ${this.department}`);
    }

}

let employee = new Employee('John Doe');

employee.displayInfo();

let manager = new Manager('Jane Smith', 'Sales');

manager.displayInfo();


class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    swouProdect() {
        console.log(`Name: ${this.name}, Price: ${this.price}`);
    }
}

class Order {

    constructor(orderNumber) {
        this.orderNumber = orderNumber;
        this.products = [];
    }

    addProduct(product) {
        this.products.push(product);
    }

    getTotalPrice() {

        let totatlPrice = 0;

        this.products.forEach(element => {
            totatlPrice += element.price
        });

        return totatlPrice;
    }
}

let product1 = new Product('Apple', 1.5);
let product2 = new Product('Banana', 0.75);
let product3 = new Product('Yog', 2);
let product4 = new Product('Bread', 1.4);
let product5 = new Product('Beer', 0.6);


let order = new Order(12345);

order.addProduct(product1);

order.addProduct(product2);

order.addProduct(product3);

// order.getOrder();

console.log(order.getTotalPrice());
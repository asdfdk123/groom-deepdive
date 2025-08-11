class Product {
    static count = 0;
    #secretCode = "xyz";

    constructor(name, price) {
        this.name = name;
        this.price = price;
        Product.count++;
    }

    get priceWithTax() {
        return this.price * 1.1;
    }

    set priceWithTax(value) {
        this.price = value / 1.1;
    }

    show() {
        console.log(`${this.name}: ${this.price}원`);
    }
    
    static total() {
        return Product.count;
    }
}

const p1 = new Product("Tv", 10000);
const p2 = new Product("Phone", 2000);

p1.show();
p2.show();

console.log(p1.priceWithTax);
console.log(p2.priceWithTax);

p2.priceWithTax = 550000;
console.log(p2.price);

console.log(p1.secretCode); 

console.log(Product.total());
console.log(Product.count);
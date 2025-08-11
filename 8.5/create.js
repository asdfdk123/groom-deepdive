const animal = {
    eats: true,
    walk() {
        console.log("걷는다");
    }
};

const rabbit = Object.create(animal);
rabbit.jumps = true;

console.log(animal.eats);
rabbit.walk();
console.log(rabbit.eats);
class Animal{
    constructor() {
        this.eats = true;
    }

    walk() {
        console.log("걷는다");
    }
}

class Rabbit extends Animal{
    constructor() {
        super();
        this.jump = true;
    }

    jump() {
        console.log("점프한다.")
    }
}

const rabbit = new Rabbit();
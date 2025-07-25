function calculate(x, y, calcul) {
    if (calcul === "+") return x + y;
    else if (calcul === "-") return x - y;
    else if (calcul === "*") return x * y;
    else if (calcul === "/") return x / y;
    else return("NONE")
}

console.log(calculate(10, 5, "-"));
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

function isPrime(value) {
    for (var i = 2; i < value; i++) {
        if (value % i === 0) {
            return false;
        }
    }
    return value > 1;
}

function findPrime(n) {
    let primeNumer = 0;
    for (let i = 0; i < n; i++) {
        primeNumer++;
        while (!isPrime(primeNumer)) {
            primeNumer++;
        }
    }
    return primeNumer;
}
export default class calculator {
    constructor(paramsTab) {
        this.x = paramsTab.x;
        this.y = paramsTab.y;
        this.z = paramsTab.z;
        this.n = paramsTab.n;
        this.op = paramsTab.op;
        if (paramsTab.op == " ") {
            this.op = "+";
        }
    }
    checkNumber(letter) {
        if (isNaN(this[letter]))
            return false;
        return true;
    }
   

    compute() {
        switch (this.op) {
            case " ":
            case "+":
                if (this.checkNumber("X")) { this.messageErreur = "x parameter missing"; break; }
                if (this.checkNumber("Y")) { this.messageErreur = "y parameter missing"; break; }
                if (!this.checkNumber("x") || !this.checkNumber("y")) { this.messageErreur = "Invalid integer"; break; }
                this.value = parseFloat(this.x) + parseFloat(this.y);
                break;
            case "-":
                if (!this.checkNumber("x") || !this.checkNumber("y")) { this.messageErreur = "Invalid integer"; break; }
                this.value = parseFloat(this.x) - parseFloat(this.y);
                break;
            case "*":
                if (!this.checkNumber("x") || !this.checkNumber("y")) { this.messageErreur = "Invalid float"; break; }
                this.value = parseFloat(this.x) * parseFloat(this.y);
                break;
            case "/":
                if (!this.checkNumber("x") || !this.checkNumber("y")) { this.messageErreur = "Invalid float"; break; }
                if (parseFloat(this.y) == 0 && parseFloat(this.x) == 0) { this.value = "NaN"; break; }
                if (parseFloat(this.y) == 0) { this.value = "Infinity"; break; }
                this.value = parseFloat(this.x) / parseFloat(this.y);
                break;
            case "%":
                if (!this.checkNumber("x") || !this.checkNumber("y")) { this.messageErreur = "Invalid float"; break; }
                if (parseFloat(this.y) == 0 || parseFloat(this.x) == 0) { this.value = "NaN"; break; }
                this.value = parseFloat(this.x) % parseFloat(this.y);
                break;
            case "!":
                if (!this.checkNumber("n")) { this.messageErreur = "Invalid float"; break; }
                if (parseFloat(this.n) <= 0 ) { this.messageErreur = "n parameter must be an integer > 0"; break; }
                this.value = factorial(parseFloat(this.n));
                break;
            case "p":
                if (!this.checkNumber("n")) { this.messageErreur = "Invalid float"; break; }
                if (parseFloat(this.n) <= 0 ) { this.messageErreur = "n parameter must be an integer > 0"; break; }
                this.value = isprime(parseFloat(this.n));
                break;
            case "np":
                if (!this.checkNumber("n")) { this.messageErreur = "Invalid float"; break; }
                this.value = findPrime(parseFloat(this.n));
                break;
            default:
                this.messageErreur = "Invalid operator";
                break;
        }
    }
}

class Calculadora {
    sumar(a, b) {
        return a + b;
    }

    restar(a, b) {
        return a - b;
    }

    multiplicar(a, b) {
        return a * b;
    }

    dividir(a, b) {
        if (b === 0) {
            throw new Error("No se puede dividir por cero");
        }
        return a / b;
    }
}

// Ejemplo de uso
const calc = new Calculadora();

console.log("Suma:", calc.sumar(5, 3));
console.log("Resta:", calc.restar(5, 3));
console.log("Multiplicación:", calc.multiplicar(5, 3));
console.log("División:", calc.dividir(5, 3));

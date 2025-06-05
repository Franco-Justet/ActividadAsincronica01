function fibonacci(n) {
    if (n === 1) return [0];
    const numero = [0, 1];
    for (let i = 2; i < n; i++) {
        numero[i] = numero[i - 1] + numero[i - 2];
    }
    return numero;
}

function montrarFibonacci() {
    const input = document.getElementById("xnum");
    const output = document.getElementById("numeros");
    const n = parseInt(input.value, 10);
    if (isNaN(n) || n <= 1) {
        output.textContent = "El numero debe ser mayor o igual a 1.";
        return;
    }
    const seriesDeNums = fibonacci(n);
    output.textContent = "Serie Fibonacci: " + seriesDeNums.join(", ");
}
document.getElementById("btnFibonacci").addEventListener("click", montrarFibonacci);
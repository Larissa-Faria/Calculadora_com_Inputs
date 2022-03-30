function somar() {
    // Input value vem como typeof string
    let num1 = Number(document.getElementById("input1").value); 
    let num2 = Number(document.getElementById("input2").value);
    let soma = num1 + num2;
    document.getElementById("input_resultado").value = soma;
}
function subtrair() {
    let num1 = Number(document.getElementById("input1").value); 
    let num2 = Number(document.getElementById("input2").value);
    let subtração = num1 - num2;
    document.getElementById("input_resultado").value = subtração;
}
function multiplicar() {
    let num1 = Number(document.getElementById("input1").value); 
    let num2 = Number(document.getElementById("input2").value);
    let multiplicação = num1 * num2;
    document.getElementById("input_resultado").value = multiplicação;
}


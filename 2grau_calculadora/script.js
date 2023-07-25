function calcular() {
    let a = parseFloat(document.getElementById("numa").value);
    let b = parseFloat(document.getElementById("numb").value);
    let c = parseFloat(document.getElementById("numc").value);

    let delta = (b ** 2 - 4 * a * c).toFixed(2);
    let raiz1 = ((-b + Math.sqrt(delta)) / (2 * a)).toFixed(2);
    let raiz2 = ((-b - Math.sqrt(delta)) / (2 * a)).toFixed(2);
    
    let funcao = document.getElementById("funcao");
    let disc = document.getElementById("disc");
    let rum = document.getElementById("rum");
    let rdois = document.getElementById("rdois");

    funcao.innerHTML = ""; // Limpa o conteúdo anterior
    disc.innerHTML = "";
    rum.innerHTML = "";
    rdois.innerHTML = "";

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        window.alert("Para calcular uma função do segundo grau completa, é preciso fornecer os 3 valores (a, b e c)");
        funcao.innerHTML += `Função completa: `;
        disc.innerHTML += `O Discriminante(Δ): `;
        rum.innerHTML += `A Primeira raiz da função é: `;
        rdois.innerHTML += `A Segunda raiz da função é: `;
    } else if (delta > 0) {
        funcao.innerHTML += `${a}x² + ${b}x + ${c}`;
        disc.innerHTML += `O Discriminante(Δ): ${delta}`;
        rum.innerHTML += `A Primeira raiz da função é: ${raiz1}`;
        rdois.innerHTML += `A Segunda raiz da função é: ${raiz2}`;
    } else if (delta == 0) {
        funcao.innerHTML += `${a}x² + ${b}x + ${c}`;
        disc.innerHTML += `O Discriminante(Δ): ${delta}`;
        rum.innerHTML += `A raiz da função é: ${raiz1}`;
        rdois.innerHTML = "O discriminante é igual a zero, a equação possui duas raízes reais e iguais.";
    } else {
        funcao.innerHTML += `${a}x² + ${b}x + ${c}`;
        disc.innerHTML = "As raízes são complexas e não podem ser expressas em termos reais. O valor numérico de √Δ será imaginário.";
    }
}
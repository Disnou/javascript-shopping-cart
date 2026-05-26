/**
 * Altera a quantidade de um produto e atualiza os valores
 * Changes product quantity and updates values
 */
function alterarQtd(produto, acao) {
    const quantidade = document.getElementById('quantidade_' + produto);
    const valorElemento = document.getElementById('valor_' + produto);
    const totalElemento = document.getElementById('total_' + produto);

    const valorNumerico = Number(valorElemento.innerHTML);

    if (acao === '-') {
        if (Number(quantidade.innerHTML) > 0) {
            quantidade.innerHTML--;
        }
    } else {
        quantidade.innerHTML++;
    }

    // Calcula o total do item | Calculates item total
    totalElemento.innerHTML = Number(quantidade.innerHTML) * valorNumerico;

    atualizarSubtotal();
}

/**
 * Percorre todos os produtos para calcular o valor final da compra
 * Iterates through all products to calculate final purchase value
 */
function atualizarSubtotal() {
    let soma = 0;
    
    for (let i = 1; i <= 3; i++) {
        const totalItem = document.getElementById('total_' + i);
        if (totalItem) {
            soma += Number(totalItem.innerHTML);
        }
    }

    document.getElementById('valor_subtotal').innerHTML = soma;
}

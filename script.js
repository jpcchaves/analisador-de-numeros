//Variáveis Globais
let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = [] //Vetor vazio

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else{
        return false
    }
}

function inLista(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    } else{
        return false
    }
}

function adicionar(){
    if (isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = '' // quando um novo valor for adicionado, a nossa resposta anterior será apagada
    } else {
        window.alert('Valor Inválido ou já encontrado na lista.')
    }
    num.value = '' // quando um valor for adicionado, a caixa ficará vazia
    num.focus() // quando um valor for adicionado, ela automaticamente será selecionada

}

function finalizar(){
    if (valores.length == 0){
        window.alert('Adicione valores para continuar.')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for (let pos in valores){
            soma += valores[pos]      //pega os valores de acordo com as posições no array e soma
            if (valores[pos] > maior) // pega o maior valor
                maior = valores[pos]
            if (valores[pos] < menor) // pega o menor valor
                menor = valores[pos]
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos <strong>${tot} número cadastrados</strong></p>`
        res.innerHTML += `<p>O maior valor informado foi: <strong>${maior}.</strong></p>`
        res.innerHTML += `<p>O menor valor informado foi: <strong>${menor}.</strong></p>`
        res.innerHTML += `<p>Somando todos os valores, temos: <strong>${soma}.</strong></p>`
        res.innerHTML += `<p>A média dos valores digitados é: <strong>${media}</strong></p>`
    }
}
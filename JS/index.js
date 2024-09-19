function conversaoBase(){
    var numeral = input_numeral.value;
    var base = Number(select_base.value);
    var baseNumero = Number(input_base_numero.value);
    var conversao = parseInt(numeral, baseNumero)
     

    resposta.innerHTML =`A conversão de ${numeral} na base 
        ${base} é: ${conversao.toString(base)}`
}

function operacaoBase(){
    const primeiroNumero = input_primeiro_numero.value
    const segundoNumero = input_segundo_numero.value
    const basePrimeiroNumero = Number(select_base_primeiro_numero.value)
    const baseSegundoNumero = Number(select_base_segundo_numero.value)
    const conversaoPrimeiroNumero = parseInt(primeiroNumero, basePrimeiroNumero)
    const conversaoSegundoNumero = parseInt(segundoNumero, baseSegundoNumero)
    const operador = select_operador.value
    const operacao = `${conversaoPrimeiroNumero} ${operador} ${conversaoSegundoNumero} `

    const resultado = eval(operacao)
    resposta_operacao.innerHTML = `Decimal: ${resultado}<br>
                                     Octal: ${resultado.toString(8)}<br>
                                     Binário: ${resultado.toString(2)}<br>
                                     Hexadecimal: ${resultado.toString(16).toUpperCase()}<br>
                                     `

}
function conversaoBase(){
     resposta.style.display = 'flex'
    const numeral = input_numeral.value;
    const base = Number(select_base.value);
    const baseNumero = Number(input_base_numero.value);
    const conversao = parseInt(numeral, baseNumero)
     var verificacaoCampo = false;
    var arrayNumeral = numeral.split("")
    if(base == baseNumero){
        resposta.innerHTML = `<h1>O Númeral ja está na base solicitada</h1>`
    }else{

        for (var i =0; i<arrayNumeral.length; i++){
            if(baseNumero == 2 && arrayNumeral[i] != 0 && arrayNumeral[i] !=1){
                verificacaoCampo = true
            }
        }
        
        if(verificacaoCampo){
            resposta.innerHTML = `Número inválido conforme a respectiva base`
        }else {
            
            resposta.innerHTML =` <h1> Conversão Numérica</h1>
            <p>
            A conversão de ${numeral} na base ${baseNumero}, para a base 
            ${base} é: ${conversao.toString(base)}</p>`
        }
    }
}

function operacaoBase(){
    resposta.style.display = 'flex'
    const primeiroNumero = input_primeiro_numero.value
    const segundoNumero = input_segundo_numero.value
    const basePrimeiroNumero = Number(select_base_primeiro_numero.value)
    const baseSegundoNumero = Number(select_base_segundo_numero.value)
    const conversaoPrimeiroNumero = parseInt(primeiroNumero, basePrimeiroNumero)
    const conversaoSegundoNumero = parseInt(segundoNumero, baseSegundoNumero)
    const operador = select_operador.value
    const operacao = `${conversaoPrimeiroNumero} ${operador} ${conversaoSegundoNumero} `


    var arrayNumero1 = primeiroNumero.split("")
    var arrayNumero2 = segundoNumero.split("")

    var teste = false

    for(var i = 0; i<arrayNumero1.length; i++){
        if(basePrimeiroNumero == 2 && arrayNumero1[i] !=0 && arrayNumero1[i] !=1 && !teste){
            teste = true
        }else if(basePrimeiroNumero == 8 && arrayNumero1[i] <0 || arrayNumero1[i] >7 && !teste){
            teste = true
        }
    }
    
    for(var i = 0; i<arrayNumero2.length; i++){
        if(baseSegundoNumero == 2 && arrayNumero2[i] !=0 && arrayNumero2[i] !=1 && !teste){
            teste = true
        }else if(baseSegundoNumero == 8 && (arrayNumero2[i] <0 || arrayNumero2[i] >7) && !teste){
            teste = true
        }
    }

    resposta.innerHTML = ``
    if(teste){
        resposta.innerHTML = `Número(s) inválido conforme a respectiva base`
        teste = false
    }else{
        const resultado = eval(operacao)
        resposta.innerHTML = ` <h1> Operação Aritmética</h1>
        
        Decimal: ${resultado}<br>
        Octal: ${resultado.toString(8)}<br>
        Binário: ${resultado.toString(2)}<br>
        Hexadecimal: ${resultado.toString(16).toUpperCase()}<br>
        `
        teste = false
        }
}














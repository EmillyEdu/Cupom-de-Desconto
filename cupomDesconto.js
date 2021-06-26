//cupom RANGOBARATO
//12h as 13:59
//10% de desconto
// acima ou igual a 100 reais, 20% de desconto
function valorDesconto (valorCompra, hora, cupom){
  let desconto;
  if (cupom === "RANGOBARATO"){
    if(hora >= 12 && hora<14){
      if(valorCompra >= 100){
        desconto=valorCompra*20/100
      }
      else{
        desconto=valorCompra*10/100
      }
      console.log(`o valor do desconto é ${desconto}. Portanto, o valor a ser pago será ${valorCompra-desconto}`)
    }
    else {
      console.log("O cupom não é válido este horário")
    }
  }
  else {
  console.log("você não possui um cupom")
  }
}
valorDesconto(200, 13, "RANGOBARATO");
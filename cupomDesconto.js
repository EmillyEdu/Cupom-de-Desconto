//Em uma loja , das 12h até as 13:59 com o cupom de desconto "rangobarato", tem um desconto de 10% no valor da compra abaixo de 100 reais e de 20% quando o valor da compra é maior que 100 reais
//deseja-se descobrir o valor do desconto e o valor que deve ser pago pelo cliente.

function valorDesconto (valorCompra, hora, cupom){
  let desconto;
// se tiver o cupom
   if (cupom === "RANGOBARATO"){
//  se não estiver no horário que o cupomé válido     
    if(hora >= 12 && hora<14){    
// se o valor da compra for maior ou igual a 100 reais, o desconto é de 20%
      if(valorCompra >= 100){
        desconto=valorCompra*20/100
      }
      else{
        desconto=valorCompra*10/100
      }
// mostrando qual é o desconto e qual o valor a ser pago
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

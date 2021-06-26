//inverter a frase por palavra

const texto = "um pequeno novo teste"
let palavra = "";
const novafrase = [];
for(let i=0; i < texto.length; i++) {
  //usar espaços para separar as palavras
  if (texto [i]=== " "){
    //adicionar as palavras no array "novafrase" assim que acha o espaço
    novafrase.push(palavra);
    // resetar palavra
    palavra = " ";
    continue;
  }
  palavra += texto[i] 
}
// a ultima palavra não foi guardada pois não achou o espaço no final, por isso:
novafrase.push(palavra)
const fraseinvertida = []
//usando o for de forma invertida para inverter a frase
//-1 já que começa a contagem por 0.
for(let i = novafrase.length - 1; i >= 0; i--){
  fraseinvertida.push(novafrase[i]);
}
console.log(fraseinvertida);





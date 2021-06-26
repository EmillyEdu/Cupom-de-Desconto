//inverter a frase por letras

const texto = "um pequeno novo teste"
let palavra = "";
const novafrase = [];
for(let i=0; i < texto.length; i++) {
   palavra += texto[i];
   console.log(palavra);
}
let fraseinvertida = "";
for(let i = texto.length - 1; i >= 0; i--){
  fraseinvertida +=texto[i]
  console.log(fraseinvertida);
}


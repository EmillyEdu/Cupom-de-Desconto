//Filtrar elementos que iniciam com a letra A.

const lista = ["arroz", "banana", "Amora", "canjica", "abacaxi", "jujuba"];
const resultado = [];
for(let item of lista){
  if(item[0] === "A" || item[0] === "a"){
    resultado.push (item);
  }
}
console.log(resultado);

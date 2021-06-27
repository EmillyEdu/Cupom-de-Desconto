//relatorio de pessoas pela idade-maior de 18 e menor de 18 e porcentagens.

//lista de pessoas e suas idades
const pessoas = [
  {
    nome: "paulo",
    idade:20
  },
  {
    nome:"ana",
    idade:37
  },
  {
    nome: "arthur",
    idade:15
  },
];

function relatorio(lista){
  let maiores = 0;
  let menores = 0;
//Condições: idade da pessoa na lista é maior ou menor que 18 anos
// item é o objeto contendo o nome e a idadade
  for(let item of lista){
    //selecionando a idade presente nos itens da lista
    const idade = item.idade;
    if (idade >= 18){
      //quantidade de pessoas maiores que 18 anos
      maiores++
    }
    else {
      //quantidade de pessoas menores que 18 anos
      menores++
    }
  }
  //quantidade final de pessoas maiores e menores de idade e seus respectivos percentuais.
  const resposta = {
    quantidadeMaiores: maiores,
    quantidadeMenores: menores,
    percMaiores: maiores / pessoas.length,
    percMenores: menores / pessoas.length
  }
console.log(resposta);
}
relatorio(pessoas);

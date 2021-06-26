//Descodificar código

function solucao(textoCodificado){

  let resposta = "";
  //utilizando o i+3 é para "pular" de três em três casas, já que a cada três carateres é uma letra.
  for (i = 0; i < textoCodificado.length; i+=3){
    // a variável ajudará a identificar os três caracteres que compoem cada letra
    const pedaco = textoCodificado[i] + textoCodificado[i+1] + textoCodificado[i+2];
    // se os três caracteres forem x x x, corresponde a y letra.
    if (pedaco === "###"){
      resposta += "C"
    }
    else if(pedaco === "##@"){
      resposta += "U"
    }
    else if(pedaco === "#@#"){
      resposta += "B"
    }
    else if(pedaco === "#@@"){
      resposta += "A"
    }
    else if(pedaco === "@##"){
      resposta += "D"
    }
    else if(pedaco === "@#@"){
      resposta += "E"
    }
    else if(pedaco === "@@#"){
      resposta += "M"
    }
    else if (pedaco=== "@@@") {
      resposta += "Y"
    }
  }
  console.log(resposta)
}
solucao("#@@####@@@##@#@@@#@@@")

//Segunda maneira:

function solucao(textoCodificado){
  const dicionario ={
    "###":"C",
    "##@":"U",
    "#@#":"B",
    "#@@":"A",
    "@##":"D",
    "@#@":"E",
    "@@#":"M",
    "@@@":"Y",
  };
  let resposta = " ";
  for (i = 0; i <textoCodificado.length; i+=3){
    const pedaço = textoCodificado[i] + textoCodificado[i+1] + textoCodificado[i+2];
    resposta += dicionario[pedaço]
  }
  console.log(resposta)
}
solucao("#@@####@@@##@#@@@#@@@")

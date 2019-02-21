/*
Crie um array com 5 items (tipos variados).
*/
var lista = ["a", 2, true, function(){}, "b"];

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
// 
function addItem(nvoItem){
    lista.push[nvoItem];
}

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
// ?
addItem([1,2,3]);
console.log(lista);

/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
// 

console.log("o elemento do segundo array é " + lista[1]);

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
// 
console.log("o elemento do primeiro array é " + lista.lenght);

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
// ?

console.log("o elemento do segundo array é " + lista[5].lenght);
/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
console.log( 'Números pares entre 10 e 20:' );

var x = 10;
while((x >= 10 && x <= 20) && ( x % 2 == 0) ){
      console.log("numeros pares " + x);
      x += 2;
}

/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
console.log( 'Números ímpares entre 10 e 20:' );
// ?
var x = 11;
while((x >= 10 && x <= 20) && ( x % 2 != 0) ){
      console.log("numeros impares " + x);
      x += 2;
}
/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
console.log( 'Números pares entre 100 e 120:' );
// ?

for(x = 110; x <= 120; x++){
    if(x % 2 == 0){  
      console.log("numeros pares " + x);}
}

console.log( 'Números ímpares entre 111 e 125:' );
// ?
for(x = 110; x <= 125; x++){
     if(x % 2 != 0){  
     console.log("numeros impares " + x);
}

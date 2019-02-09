/*
Vamos falar um pouco sobre "Futebol". Escolha um campeonato estadual qualquer
para começar o desafio.
Declare uma variável chamada `championship` que receberá o nome do campeonato,
e imprima o nome desse campeonato no console.
*/
var championship = "copa das americas";
console.log(championship);

/*
Declare uma variável chamada `teams`, que receberá um array com 5 elementos.
Os elementos serão nomes de times do campeonato escolhido, e os nomes devem
estar na ordem em que eles aparecem na tabela no momento da solução desse
desafio.
*/
var teams = ['flamengo','vasco','fluminense','sergipe','confianca'];

console.log( 'Times que estão participando do campeonato:', teams );

/*
Crie uma função chamada `showTeamPosition` com as seguintes características:
    - A função deve receber um número por parâmetro;
    - A função deve retornar a frase:
    "O time que está em [POSIÇÃO]º lugar é o [NOME DO TIME].";
    - Onde [POSIÇÃO] é o valor passado por parâmetro e [NOME DO TIME] é o time
    que está nessa posição no array criado acima com os nomes dos times.
    --------------
    Dica: lembre-se que arrays começam no índice zero, então a posição passada
    deve ser sempre um número a mais que o índice do array ;)
    --------------
    - A função só deve retornar a frase acima somente se o time estiver entre
    os 5 primeiros.
    - Se não houver time para a posição passada, deve retornar a mensagem:
    "Não temos a informação do time que está nessa posição."
*/
function showteamposition(posicao){
    if(posicao <= 5){
   	 lugar = posicao;
    	 posicao--;
         console.log('O time que está em ' + lugar + 'º lugar é o ' + teams[posicao]);
    }else{
         console.log('Não temos a informação do time que está nessa posição.');
   } 
} 

/*
Escolha 4 times do campeonato selecionado e mostre a posição dele, usando a
função acima. Entre esses 4, adicione 1 que não esteja entre os 5 primeiros.
*/
showteamposition(1);
//O time que está em 1º lugar é o flamengo
showteamposition(2);
//O time que está em 1º lugar é o flamengo
showteamposition(3);
//O time que está em 1º lugar é o flamengo
seis = "america"
console.log('O time que está em 6º lugar é o ' + seis);

/*
Mostre os números de 20 a 30 no console (inclusive o 30), usando a estrutura de
repetição "while".
*/
temp = 20
while(temp <= 30){
   console.log(temp); 
   temp++;  
}

/*
Crie uma função chamada `convertToHex`, com as seguintes características:
    - A função recebe uma cor por parâmetro, do tipo string. Exemplo: "red";
    - Escolha 5 cores que serão convertidas do nome da cor para o seu
    equivalente hexadecimal (pode ser qualquer tom);
    - Usando a estrutura switch, verifique se a cor passada por parâmetro é
    algum hexa escolhido. Se for, retorne a frase:
    "O hexadecimal para a cor [COR] é [HEXADECIMAL].";
    - Se a cor passada por parâmetro não estiver entre as selecionadas, mostre
    a frase:
    "Não temos o equivalente hexadecimal para [COR]."
*/
function convertHex(cor){
     nomedacor = ["red", "blue", "pink", "green", "white", "yellow", "gray", "purple"];
   
  switch(cor){ 
     case 0:
	 console.log('O hexadecimal para a cor ' + nomedacor[cor] + ' é #fb3054'); 
         break;	
     case 1:
	 console.log('O hexadecimal para a cor ' + nomedacor[cor] + ' é #3b5998');
         break;	
     case 2:
	 console.log('O hexadecimal para a cor ' + nomedacor[cor] + ' é #e92197'); 
         break;	
     case 3:
	 console.log('O hexadecimal para a cor ' + nomedacor[cor] + ' é #0d4f02'); 
         break;	
     case 4:
	 console.log('O hexadecimal para a cor ' + nomedacor[cor] + ' é #ffffff'); 
         break;	
     case 5:
	 console.log('O hexadecimal para a cor ' + nomedacor[cor] + ' é #e7a047'); 
         break;	
     case 6:
	 console.log('O hexadecimal para a cor ' + nomedacor[cor] + ' é #eeeeee'); 
         break;	
     case 7:
	 console.log('O hexadecimal para a cor ' + nomedacor[cor] + ' é #885fcd'); 
         break;
     default:
         console.log('não temos registros para essa cor');
         break; 
    }		
}

/*
Tente mostrar o hexadecimal de 8 cores diferentes usando a função criada acima.
*/
// ?

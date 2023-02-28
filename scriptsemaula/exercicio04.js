let notas = [9.00, 8.00, 7.00];

console.log("A primeira Nota do Aluno é: "+notas[0]);
console.log("A segunda Nota do Aluno é: "+notas[1]);
console.log("A terceira Nota do Aluno é: "+notas[2]);

let media = (notas[0]+notas[1]+notas[2])/notas.length;


console.log("A Média do Aluno é: "+media);

media = ((notas[0]+notas[1]+notas[2]) / 2);
if(media >=7){
    console.log("Aluno Aprovado!")
} else if (media >=5){
    console.log("Aluno em Recupereção!")
} else {
    console.log("Aluno Reprovado!")
}


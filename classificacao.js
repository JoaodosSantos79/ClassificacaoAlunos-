let quantidadeAlunos = 5
let listadeAlunos = ["Leonardo","João", "Raiane","Robson","Rafael"]

for (let contador = 0; contador < listadeAlunos.length; contador++) {
     
    if (contador == 0) {
     
    console.log (`O aluno ${listadeAlunos[contador]} é número ZERO`) 
  } else if (contador % 2 == 0) {
    console.log (`O aluno ${listadeAlunos[contador]} é número PAR`) 
  } else if (contador % 2 == 1) { 
    console.log (`O aluno ${listadeAlunos[contador]} é número ÍMPAR`) 
  }
} 


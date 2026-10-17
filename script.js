// ---------- Exercício 1: Conexão com o JavaScript ----------
console.log("Conexão concluida!");

// ---------- Exercício 2: Instruções e comentários ----------
console.log("Painel de Estudos");
console.log(10 + 5);
console.log("A atividade começou!");

// ---------- Exercício 3: Variáveis com const e let ----------
const nomeAluno = "Marcos";
const curso = "Desenvolvimento Web";
let quantidadeTarefas = 3;

console.log("Tarefas no início:", quantidadeTarefas);

quantidadeTarefas = 5;
console.log("Tarefas após adicionar novas:", quantidadeTarefas);

// ---------- Exercício 4: var como contexto histórico ----------
var exemploAntigo = "Declaração utilizada em códigos antigos";
console.log(exemploAntigo);

// ---------- Exercício 5: Tipos de dados ----------
const tituloPainel = "Painel de Estudos";
const totalModulos = 4;
const painelAtivo = true; 
const observacao = null;

console.log(tituloPainel);
console.log(totalModulos);
console.log(painelAtivo);
console.log(observacao);

// ---------- Exercício 6: Operadores ----------
const nota1 = 7;
const nota2 = 8;
const horasPorDia = 2;
const diasDeEstudo = 5;

const somaNotas = nota1 + nota2; 
const diferencaNotas = nota2 - nota1; 
const totalHoras = horasPorDia * diasDeEstudo; 
const media = somaNotas / 2;
const aprovado = media >= 6;

console.log("Soma das notas:", somaNotas);
console.log("Diferença entre as notas:", diferencaNotas);
console.log("Total de horas estudadas:", totalHoras);
console.log("Média:", media);
console.log("Aprovado?", aprovado);

// ---------- Exercício 7: Strings e template literals ----------
const mensagem = `O aluno ${nomeAluno} está no curso de ${curso} e possui ${quantidadeTarefas} tarefas.`;
console.log(mensagem);

// ---------- Exercício 8: Decisão com if e else ----------
if (media >= 6) {
  console.log("Aprovado");
} else {
  console.log("Precisa revisar");
}

// ---------- Exercício 10: Desafio integrador ----------
const nomeModulo = "JavaScript ES6";
const tarefasTotais = 10;
let tarefasConcluidas = 7;

const tarefasRestantes = tarefasTotais - tarefasConcluidas;
const percentualConcluido = (tarefasConcluidas / tarefasTotais) * 100;

console.log(
  `Módulo ${nomeModulo}: ${tarefasConcluidas} de ${tarefasTotais} tarefas concluídas (${percentualConcluido}%). Faltam ${tarefasRestantes}.`
);

if (percentualConcluido >= 70) {
  console.log("Ótimo ritmo! Você está no caminho certo.");
} else {
  console.log("Atenção: é preciso acelerar os estudos.");
}
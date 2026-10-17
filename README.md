# Painel de Estudos

**Aluno:** Marcos — **RGM:** 114.017
**Tema:** Painel de Estudos (notas, tarefas e horas de estudo)

## Interface criada

Uma tela simples e responsiva que apresenta o resumo de estudos de um aluno: média das notas, tarefas concluídas e horas estudadas. Os valores exibidos na tela são os mesmos calculados no `script.js` e mostrados no Console do navegador.

## Componentes Bootstrap utilizados

- `container`, `row` e `col` (layout responsivo)
- `navbar` com o nome do projeto
- seção inicial (hero) com título e descrição
- `card` (três cards: média, tarefas e horas)
- `badge`
- `button`
- `alert`
- `footer`

O Bootstrap é carregado via CDN e não há arquivo CSS próprio.

### Classes utilitárias do Bootstrap utilizadas

- **Layout flexível e footer fixo na base:** `d-flex`, `flex-column`, `min-vh-100` (no `body`) e `mt-auto` (no `footer`). Juntas, fazem o footer ficar sempre colado embaixo da página.
- **Navbar:** `navbar`, `navbar-expand-lg`, `navbar-dark`, `navbar-brand`, `navbar-text`
- **Cores e fundos:** `bg-primary`, `bg-light`, `bg-white`, `bg-dark`, `text-white`, `text-primary`, `text-secondary`
- **Cards:** `card`, `card-body`, `card-title`, `card-text`, `h-100`, `shadow-sm`
- **Badges:** `badge`, `text-bg-success`, `text-bg-warning`, `fs-6`
- **Botão e alerta:** `btn`, `btn-primary`, `alert`, `alert-success`
- **Grid responsivo:** `container`, `row`, `col-12`, `col-md-6`, `col-lg-4`, `g-4`
- **Espaçamento e borda:** `py-3`, `py-5`, `my-5`, `border-bottom`
- **Texto:** `text-center`, `fw-bold`, `lead`, `display-5`, `display-6`

## Diferença entre `let`, `const` e `var`

- **`const`**: valor que não será reatribuído. Usei em `nomeAluno`, `curso`, `nota1`, `nota2`, `media`, etc., pois esses dados não mudam depois de definidos.
- **`let`**: valor que pode mudar. Usei em `quantidadeTarefas` e `tarefasConcluidas`, pois o número de tarefas varia ao longo do estudo.
- **`var`**: forma antiga de declarar variáveis, usada em códigos legados. Ela tem escopo de função e permite redeclaração, o que facilita erros. Hoje se prioriza `let` e `const` porque têm escopo de bloco e são mais previsíveis e seguros.

## Tipos de dados utilizados

- **string:** `nomeAluno`, `curso`, `tituloPainel`
- **number:** `quantidadeTarefas`, `totalModulos`, `media`
- **boolean:** `painelAtivo`, `aprovado`
- **null:** `observacao`

## Condição com `if/else`

```js
if (media >= 6) {
  console.log("Aprovado");
} else {
  console.log("Precisa revisar");
}
```

A condição verifica se a média das notas é maior ou igual a 6. Se for, mostra "Aprovado"; caso contrário, "Precisa revisar". Testei os dois caminhos alterando `nota1` e `nota2`. No desafio integrador, também há um `if/else` que avalia se o percentual de tarefas concluídas é maior ou igual a 70%.

## Maior dificuldade encontrada

Relembrar o Bootstrap e memorizar as abreviações das classes, como `d-flex`, `flex-column`, `mt-auto`, `py-5` e `col-md-6`. Como já estou acostumado a escrever CSS puro, com propriedades como `display: flex` e `margin-top: auto`, foi preciso me adaptar à forma do Bootstrap de aplicar os estilos por classes.

## Como a dificuldade foi resolvida

Comparei cada classe do Bootstrap com a propriedade CSS equivalente (por exemplo, `d-flex` equivale a `display: flex` e `flex-column` a `flex-direction: column`), consultei a documentação oficial e tirei dúvidas sobre o funcionamento de cada classe. Com a prática ao montar a interface, fui memorizando as abreviações.

## Uso de inteligência artificial

A inteligência artificial foi utilizada apenas como apoio, para:

- corrigir erros ortográficos;
- ajudar em dúvidas sobre a sintaxe do JavaScript;
- ajudar em dúvidas sobre classes e componentes do Bootstrap.
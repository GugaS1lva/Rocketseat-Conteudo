/*
### O Grande Conceito de Propriedades no React:

As propriedades (**props**) são a maneira de passar dados de um componente pai para um componente filho, permitindo uma comunicação clara e eficiente entre eles.

Propriedades são basicamente **objetos** que contêm valores ou funções passados de um componente para outro, e as principais vantagens incluem **compartilhamento de dados**, **personalização de componentes** e a capacidade de manter os componentes **flexíveis** e **dinâmicos**. Elas são imutáveis, o que significa que não podem ser alteradas pelo componente que as recebe, mantendo a consistência dos dados.
*/

/* A sintaxe das Props é basicamente um objeto,se parece com isso:
  props: { author: "", content: "" }
*/

export default function PostWithProps(props) {
  // console.log(props);

  return (
    <>
      <h1>Meu Post com Props.</h1>


      <p>Conteúdo do compoente vindo de forma dinâmica: {props.author}</p>
      <p>{props.content}</p>
    </>
  )
}

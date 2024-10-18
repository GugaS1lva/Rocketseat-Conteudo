export default function PostWithProps02(props) {
  return (
    <>
      <h1>Aqui é meu SEGUNDO Post com Props.</h1>


      <p>Usando componentes assim, da pra reaproveitar todo o HTML, CSS e JS de outros outros componentes e ainda tornar esse aqui (segundo componente) um componente único.</p>
      <p>{props.content}</p>
    </>
  )
}

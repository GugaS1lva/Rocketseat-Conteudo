import { Post } from "./components/post"
import PostWithProps from "./components/PostWithProps"
import PostWithProps02 from "./components/PostWithProps02.jsx"

function App() {
  return (
    <>
      <h1>Setupzinho bala criado, ready to code!</h1>

      <Post />
      <Post />
      <Post />

      <PostWithProps author="Guga" content="Conteúdo completão do do post." />
      <PostWithProps02 author="Guga Novamente" content="TODO O CONTEÚDO DO COMPONENTE 02 É NOVO mas a estrutura fica tudo quase igual. Isso é incrível!" />
    </>
  )
}

export default App

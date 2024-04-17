import { CardPost } from "@/Componentes/CardPost";

//API json-serve / Função pausada ate await retornar
async function getAllPosts() {
  const response = await fetch('http://localhost:3042/posts')
  if (!response.ok) {
    console.log('ERROOOOOO API')
  }
  return response.json()
}



export default async function Home() {
  const post = await getAllPosts()
  return (
    <main>
      {post.map(post => <CardPost post={post} />)}

    </main>
  );
}

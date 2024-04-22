import { CardPost } from "@/Componentes/CardPost";
import logger from "@/logger";
import styles from './page.module.css'

//API json-serve / Função pausada ate await retornar
async function getAllPosts(page) {
  //Pegar dados da Api definindo o numero de 6 posts por pagina./ https://www.npmjs.com/package/json-server#paginate
  const response = await fetch(`http://localhost:3040/posts?_page=${page}&_per_page=6`) //pegando a pagina por parametro (page)
  if (!response.ok) {
    logger.error('ERROOOOOO API')
    return [] //retorna array vazio para não quebrar a aplicação
  }
  logger.info('Post obtido com sucesso')
  return response.json()
}

export default async function Home() {
  //Na api de page os posts estão dentro do objeto data
  const { data: post } = await getAllPosts(1)
  return (
    <main className={styles.grid}>
      {post.map(post => <CardPost key={post.id} post={post} />)}

    </main>
  );
}

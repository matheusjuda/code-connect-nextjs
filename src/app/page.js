import { CardPost } from "@/Componentes/CardPost";
import logger from "@/logger";
import styles from './page.module.css'

//API json-serve / Função pausada ate await retornar
async function getAllPosts() {
  const response = await fetch('http://localhost:3042/posts')
  if (!response.ok) {
    logger.error('ERROOOOOO API')
    return [] //retorna array vazio para não quebrar a aplicação
  }
  logger.info('Post obtido com sucesso')
  return response.json()
}

export default async function Home() {
  const post = await getAllPosts()
  return (
    <main className={styles.grid}>
      {post.map(post => <CardPost post={post} />)}

    </main>
  );
}

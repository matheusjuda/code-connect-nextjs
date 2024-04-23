import { CardPost } from "@/Componentes/CardPost";
import logger from "@/logger";
import styles from './page.module.css'
import Link from "next/link";

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

export default async function Home({ searchParams }) {
  //Acessando rota de paginas por pesquisa de URL utilizando searchParams
  const currentPage = searchParams?.page || 1 //Se não estiver pag retorne pag 1

  //Na api de page os posts estão dentro do objeto data
  const { data: post, prev, next } = await getAllPosts(currentPage)
  return (
    <main className={styles.grid}>
      {post.map(post => <CardPost key={post.id} post={post} />)}
      {prev && <Link href={`/?page=${prev}`}>Página anterior</Link>} {/*Link utilizado apenas para rotas internas*/}
      {next && <Link href={`/?page=${next}`}>Próxima pagina</Link>}
    </main>
  );
}

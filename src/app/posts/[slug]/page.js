import logger from "@/logger"

async function getPostBySlug(slug) {
    const url = `http://localhost:3040/posts?slug=${slug}` //Construindo URL para a API que retorna a postagem com o slug fornecido.
    const response = await fetch(url) //pegando a pagina por parametro (slug)
    if (!response.ok) {
        logger.error('Ops, alguma coisa correu mal')
        return {}
    }
    logger.info('Posts obtidos com sucesso')
    const data = await response.json() //aguardando pelo response
    if (data.length == 0) { //Se o tamnho do array de response for zero ele não existe
        return {}
    }

    return data[0]; //Se sim retorna o array na posição zero
}

const PagePost = async ({ params }) => { //Pegando um parametro do Next rotas (slug)
    const post = await getPostBySlug(params.slug)
    return <h1 style={{ color: 'white' }}>{post.title}</h1>
}

export default PagePost
// https://nextjs.org/docs/app/building-your-application/routing
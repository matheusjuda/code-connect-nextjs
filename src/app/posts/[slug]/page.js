import { CardPost } from "@/Componentes/CardPost";
import logger from "@/logger"
import { remark } from 'remark';
import html from 'remark-html';
import styles from './page.module.css'


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

	const post = data[0]; //Se sim retorna o array na posição zero

	const processedContent = await remark()
		.use(html)
		.process(post.markdown); //Objeto da API (Biblioteca: "Render Markdown")
	const contentHtml = processedContent.toString();

	post.markdown = contentHtml

	return post
}

const PagePost = async ({ params }) => { //Pegando um parametro do Next rotas (slug)
	const post = await getPostBySlug(params.slug)
	return (<div>
		<CardPost post={post} highlight />
		<h3 className={styles.subtitle}>{post.title}</h3>
		<div className={styles.code}>
			{<div dangerouslySetInnerHTML={{ __html: post.markdown }} /> /*Redenrizando markdown em html*/}
		</div>
	</div>)
}

export default PagePost
// https://nextjs.org/docs/app/building-your-application/routing
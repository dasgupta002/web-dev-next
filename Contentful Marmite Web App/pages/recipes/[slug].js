import Image from 'next/image'
import Skeleton from '../../components/skeleton'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { createClient } from 'contentful'

const client = createClient({
    space: 'opuzyabw5dwy',
    accessToken: 'LVCA0AaGzlAs5bw-XoI_G-OZijiSUnayiTfV25qXpcM'
})

export const getStaticPaths = async () => {
  const response = await client.getEntries({ content_type: 'recipe' })
  
  const paths = response.items.map((recipe) => {
      return {
          params: { slug: recipe.fields.slug }
      }
  })

  return {
    paths,
    fallback: true
  }
}

export async function getStaticProps({ params }) {
    const response = await client.getEntries({ content_type: 'recipe', 'fields.slug': params.slug })

    if(!response.items.length) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }

    return {
        props: { 
            recipe: response.items[0]
        },
        revalidate: 5 
    }
}

export default function RecipeDetails({ recipe }) {
    if(!recipe) return <Skeleton />

    const { featuredImage, title, cookingTime, ingredients, method } = recipe.fields
    
    return(
        <div>
            <div className = "banner">
                <Image src = { 'https:' + featuredImage.fields.file.url } 
                       width = "1000"
                       height = "400"
                />
                <h2>{ title }</h2>
            </div>
            <div className = "info">
                <p>Takes about { cookingTime } minutes to serve!</p>
                <h3>Ingredients:</h3>
                { ingredients.map((ingredient) => {
                    return(
                        <span>{ ingredient }</span>
                    )
                }) }
            </div>
            <div className = "method">
                <h3>Cooking Procedure:</h3>
                <div>{ documentToReactComponents(method) }</div>
            </div>
            <style jsx>{`
               h2, h3 {
                   text-transform: uppercase;
               }

               .banner h2 {
                   margin: 0;
                   background: #fff;
                   display: inline-block;
                   padding: 20px;
                   position: relative;
                   top: -60px;
                   left: -10px;
                   transform: rotateZ(-1deg);
                   box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
               }

               .info p {
                   margin: 0;
               }

               .info span::after {
                   content: ", ";
               }

               .info span:last-child::after {
                   content: ".";
               }
            `}</style>
        </div>
    )
}
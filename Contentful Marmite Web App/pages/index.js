import { createClient } from 'contentful'
import Card from '../components/recipe'

export async function getStaticProps() {
  const client = createClient({
    space: 'opuzyabw5dwy',
    accessToken: 'LVCA0AaGzlAs5bw-XoI_G-OZijiSUnayiTfV25qXpcM'
  })

  const response = await client.getEntries({ content_type: 'recipe' })

  return {
    props: {
      recipes: response.items
    },
    revalidate: 5
  }
}

export default function Recipes({ recipes }) {
  return (
    <div className = "recipe-list">
      { recipes.map((recipe) => {
        return(
          <Card data = { recipe } />
        )
      }) }

      <style jsx>{`
         .recipe-list {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 20px 60px;
         }
      `}</style>
    </div>
  )
}
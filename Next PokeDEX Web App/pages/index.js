import Layout from '../components/layout'
import Link from 'next/link'

export async function getStaticProps() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150')
    const { results } = await response.json()

    const pokemon = results.map((pokeman, index) => {
        const offset = ("00" + (index + 1)).slice(-3)
        const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${offset}.png`
        
        return { ...pokeman, image }
    })

    return {
        props: { pokemon }
    }
}

export default function Home({ pokemon }) {
    return (
        <Layout title = "NEXT PokeDEX">
            <h1 className = "text-4xl font-light mt-6 mb-12 text-center">NEXT PokeDEX</h1>
            <ul>
                {
                    pokemon.map((pokeman, index) => {
                        return(
                            <li key = { index }>
                                <Link href = { `/pokemon?id=${index + 1}` }>
                                    <a className = "border p-4 border-gray my-2 capitalize flex items-center text-lg bg-gray-200 rounded-md">
                                        <img className = "w-20 h-20 mr-3" src = { pokeman.image } alt = { pokeman.name } />
                                        <span className = "mr-2 font-bold">{ index + 1 }</span>
                                        { pokeman.name }
                                    </a>
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </Layout>
    )
}
import Layout from '../components/layout'
import Link from 'next/link'

export async function getServerSideProps({ query }) {
    const ID = query.id
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + ID)
    const pokeman = await response.json()

    const offset = ("00" + ID).slice(-3)
    const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${offset}.png`
    pokeman.image = image

    return {
        props: { pokeman }
    }
}

export default function Pokeman({ pokeman }) {
    return (
        <Layout title = { "PokeDEX - " + pokeman.name }>
            <h1 className = "text-4xl font-light capitalize mt-6 mb-12 text-center">{ pokeman.name }</h1>
            <img className = "mx-auto h-60 mb-6" src = { pokeman.image } alt = { pokeman.name } />
            <p>
                <span className = "text-lg font-light mr-2">Weight: </span>
                { pokeman.weight }
            </p>
            <p>
                <span className = "text-lg font-light mr-2">Height: </span>
                { pokeman.height }
            </p>
            <h2 className = "text-2xl font-light mt-6 mb-2">Types:</h2>
            {
                pokeman.types.map((type, index) => {
                    return(
                        <p className = "text-lg font-light" key = { index }>{ type.type.name }</p>
                    )
                }) 
            }
            <p className = "text-center mt-10">
                <Link href = "/">
                    <a className = "border border-black rounded-md p-2 font-light">Home</a>
                </Link>
            </p>
        </Layout>
    )
}

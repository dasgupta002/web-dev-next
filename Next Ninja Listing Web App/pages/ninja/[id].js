export const getStaticPaths = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()

    const paths = data.map((ninja) => {
        return {
            params: { id: ninja.id.toString() }
        }
    })

    return { 
        paths, 
        fallback: false 
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id
    const response = await fetch('https://jsonplaceholder.typicode.com/users/' + id)
    const data = await response.json()

    return {
        props: { ninja: data }
    }
}

const Ninja = ({ ninja }) => {
    return(
        <div style = {{ display: 'flex', justifyContent: 'space-around' }}>
            <h1>Ninja Biography</h1>
            <div style = {{ float: 'right' }}>
                <h2>Ninja Name : <span style = {{ color: 'red' }}>{ ninja.name }</span></h2>
                <p style = {{ fontSize: '20px' }}>Ninja Website : { ninja.website }</p>
                <p style = {{ fontSize: '20px' }}>Ninja City : { ninja.address.city }</p>
            </div>
        </div>
    )
}

export default Ninja
import Link from 'next/link'
import styles from '../../styles/ninja.module.css'

export const getStaticProps = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()

    return {
        props: { ninjas: data }
    }
}

const Ninjas = ({ ninjas }) => {
    return(
        <div>
            <h1 className = { styles.head }>All Ninjas</h1>
            {
                ninjas.map((ninja) => (
                    <Link href = { '/ninja/' + ninja.id } key = { ninja.id }>
                        <a className = { styles.single }>
                            <h3>{ ninja.name }</h3>
                        </a>
                    </Link>
                ))
            }
        </div>
    )
}

export default Ninjas
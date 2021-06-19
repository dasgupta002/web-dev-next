import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const NotFound = () => {
    const router = useRouter();
    
    useEffect(() => {        
        setTimeout(() => {
            router.push('/')
        }, 3000)
    }, [router])
    
    return(
        <div>
            <div className = "not-found">
                <h1>Oooopss . . </h1>
                <h2>The page can not be found.</h2>
                <p>Go back to the <Link href = "/"><a>Home</a></Link> page!</p>
            </div>
        </div>
    )
}

export default NotFound 
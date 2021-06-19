import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    return(
        <nav>
            <div className = "logo"><Image src = "/logo.png" width = {128} height = {77} alt = "" /></div>
            <Link href = "/">
               <a>Home</a>
            </Link>
            <Link href = "/about">
               <a>About</a>
            </Link>
            <Link href = "/ninja">
               <a>Ninjas</a>
            </Link>
        </nav>
    )
}

export default Navbar
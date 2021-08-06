import { useContext } from 'react'
import { AuthContext } from '../stores/auth'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
    const { user, login, logout, ready } = useContext(AuthContext) 

    return(
        <div className = "container">
            <nav>
                <Image src = "/gem.jpg" width = {50} height = {48} />
                <h1>Gaming Vibes</h1>
                { ready && (<ul>
                    <li><Link href = "/"><a>Home</a></Link></li>
                    <li><Link href = "/guides"><a>Guides</a></Link></li>
                    { !user && <li onClick = { login } className = "btn">LogIn/SignUp</li> }
                    { user && <li>{ user.email }</li> }
                    { user && <li onClick = { logout } className = "btn">LogOut</li> }
                  </ul>) }
            </nav>
            <div className = "banner">
                <Image src = "/mario.jpg" width = {966} height = {276} />
            </div>
        </div>
    )
}
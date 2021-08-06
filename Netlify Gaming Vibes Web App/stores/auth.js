import { createContext, useEffect, useState } from 'react'
import netlifyIdentity from 'netlify-identity-widget'

export const AuthContext = createContext({
    user: null,
    login: () => {},
    logout: () => {},
    ready: false
})

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [ready, setReady] = useState(false)
    
    useEffect(() => {
        netlifyIdentity.on('login', (user) => {
            setUser(user)

            netlifyIdentity.close()
        })

        netlifyIdentity.on('logout', () => setUser(null))

        netlifyIdentity.on('init', (user) => {
            setReady(true)
            setUser(user)
        })

        netlifyIdentity.init()
        
        return () => {
            netlifyIdentity.off('login')
            netlifyIdentity.off('logout')
        }
    }, [])

    const login = () => netlifyIdentity.open()

    const logout = () => netlifyIdentity.logout()

    const context = { user, login, logout, ready }

    return(
        <AuthContext.Provider value = { context }>
            { children }
        </AuthContext.Provider>
    )
}
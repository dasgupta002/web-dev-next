import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../stores/auth'
import styles from '../styles/guides.module.css'

export default function Guides() {
    const { user, ready, login } = useContext(AuthContext)

    const [guides, setGuides] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        if(ready) {
            fetch('/.netlify/functions/data', user && {
                headers: {
                    Authorization: 'Bearer' + user.token.access_token
                }
            })
              .then((response) => {
                  if(!response.ok) {
                      login()
                      throw Error("Error! Log in to view all guides.")
                  }

                  return response.json()
              })
              .then((data) => {
                setGuides(data)
                setError(null)
              })
              .catch((error) => {
                setError(error.message)
                setGuides(null)
              })
        }
    }, [user, ready])

    return(
        <div className = { styles.guides }>
            { !ready && <div>Loading...</div> }

            { error && (
                <div className = { styles.error }>
                    <p>{ error }</p>
                </div>
            ) }

            { guides && guides.map((guide) => (
                <div className = { styles.card }>
                    <h3>{ guide.title }</h3>
                    <h4>Written by { guide.author }</h4>
                    <p style = {{ textAlign: 'justify' }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur 
                        sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            )) }
        </div>
    )
}
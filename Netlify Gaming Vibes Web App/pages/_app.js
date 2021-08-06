import { AuthProvider } from '../stores/auth'
import Navbar from '../components/nav'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return(
    <AuthProvider>
      <Navbar />
      <Component {...pageProps} />
    </AuthProvider>
  )
}

export default MyApp
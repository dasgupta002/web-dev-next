import Navbar from './nav'
import Footer from './foot'

const Layout = ({ children }) => {
    return(
        <div className = "content">
            <Navbar />
              { children }
            <Footer />
        </div>
    )
}

export default Layout
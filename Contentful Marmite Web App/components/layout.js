import Head from 'next/head'
import Link from 'next/link'

export default function Layout({ children }) {
    return (
      <>
        <Head>
            <title>Contentful Just Add Marmite</title>
        </Head>
        <div className = "layout">
            <header>
                <Link href = "/">
                    <a>
                        <h1>
                            <span>Just Add</span>
                            <span>Marmite</span>
                        </h1>
                        <h2>Spread The Joy</h2>
                    </a>
                </Link>
            </header>
            <div className = "page-content">
                { children }
            </div>
            <footer>
                <h6>Copyright &copy; 2021</h6>
                <h5>~ Just Add Marmite ~</h5>
            </footer>
        </div>
      </>
    )
  }
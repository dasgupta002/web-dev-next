import Head from 'next/head'
import Layout from '../components/layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return(
    <div>
      <Head>
        <title>Ninja Listing</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  ) 
}

export default MyApp
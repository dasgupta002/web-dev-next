import Head from "next/head"

export default function Layout({ children, title }) {
    return (
        <div className = "bg-gray-300">
            <Head>
                <title>{ title }</title>
            </Head>
            <main className = "container mx-auto max-w-xl min-h-screen pt-8 pb-8"> { children } </main>
        </div>
    )
}
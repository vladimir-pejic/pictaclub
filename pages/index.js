import Head from 'next/head'
import Header from '../components/Header'
import Feed from '../components/Feed'

export default function Home() {
    return (
        // <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
            <Head>
                <title>Pictaclub | Your visual home</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <Header/>
            <Feed/>
        </div>
    )
}

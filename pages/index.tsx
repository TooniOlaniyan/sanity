import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../component/Header'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Medium App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
    </div>
  )
}

export default Home

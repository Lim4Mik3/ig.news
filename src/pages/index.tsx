import Head from 'next/head'
import homeStyles from '../styles/home.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>ig.news | Início</title>
      </Head>
      <h1 className={homeStyles.title}>Hello <span>World!</span></h1>
    </>
  )
}

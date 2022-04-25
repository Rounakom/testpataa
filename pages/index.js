import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Link from 'next/link'




export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name ="keywords" content ="exact loaction, Pin, Map" />
        <meta name="description" content="Easy way to explainyour address" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to 
        </h1>
        <ul className={styles.list}>
  <li>
  <Link href="/">
  <a>Home</a>
  </Link>
  </li>
  <li>
  <Link href="/about">
  <a >About Us</a>
  </Link>
  </li>
  <li>
  <Link href="/contact">
  <a >Contact Us</a>
  </Link>
  </li>
  
</ul>

      
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

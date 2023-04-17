import Head from 'next/head'
import Delhi from 'public/delhi.jpg';
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Events Mania</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <p>Events Mania</p>
        <nav>
          <a href="/">Home</a>
          <a href="/events">Events</a>
          <a href="/aboutus">About us</a>
        </nav>
      </header>
      <main className={styles.main}>
        <a href="#">
          <img src="delhi.jpg" alt="" />
          
          <h2>Events in Delhi</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod maiores beatae tempore ut natus dolorum saepe quas possimus ex velit.</p>
        </a>
        <a href="#">
          <img src="jaipur.jpg" alt="" />
          <h2>Events in Jaipur</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod maiores beatae tempore ut natus dolorum saepe quas possimus ex velit.</p>
        </a>
        <a href="#">
          <img src="bengaluru.jpg" alt="" />
          <h2>Events in Benguluru</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod maiores beatae tempore ut natus dolorum saepe quas possimus ex velit.</p>
        </a>
      </main>

      <footer>
        <p>Designed & Developed by Yash Gaur</p>
      </footer>
    </>
  )
}

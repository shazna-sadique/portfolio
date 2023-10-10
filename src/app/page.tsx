import Image from 'next/image'
import styles from './page.module.css'
import Hero from './hero/page'


export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
       <h1>Hi ...IAM SHAZNA SADIQUE <span></span></h1>
      </div>
      <Hero/>
    </main>
  )
}

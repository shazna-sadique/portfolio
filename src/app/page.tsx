import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        {/* <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.tsx</code>
        </p> */}
        {/* <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/QR-Code.jpeg"
              alt="Resume"
              className={styles.vercelLogo}
              width={200}
              height={240}
              priority
            />
          </a>
        </div> */}
      </div>

      <div className={styles.center}>
       <h1>Hi ...IAM SHAZNA SADIQUE <span></span></h1>
      </div>

      <div className={styles.grid}>
        <a
          href="https://mattool.in/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            experience <span>-&gt;</span>
          </h2>
          <p>co founder and full stack developer of mattool.in . 
          <br/>
            provided live bus tracking and door to door delivery service</p>
        </a>

        <a
          href="https://maroon-fawnia-34.tiiny.site"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Resume <span>-&gt;</span>
          </h2>
          <p>Please checkout my resume here</p>
        </a>

        <a
          href="https://github.com/shazna-sadique/-Create-your-own-story-book-with-AI"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Github <span>-&gt;</span>
          </h2>
          <p>checkout my github page here, and the project i build in my recent hackathon</p>
        </a>

        <a
          href="https://www.linkedin.com/in/shazna-sadique-3439aa184/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Linkedin <span>-&gt;</span>
          </h2>
          <p>
            meanwhile u can checkout my linkedin profile also . 
          </p>
        </a>
      </div>
    </main>
  )
}

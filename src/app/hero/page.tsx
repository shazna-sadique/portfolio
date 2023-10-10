import styles from '../page.module.css'

export default function hero() {

    return(
        <>
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
    <div style={{fontSize:"10px"}}>....💗this website is under construction, coming up with a mesmerizing design soon  😊</div>
    </>
    )
}
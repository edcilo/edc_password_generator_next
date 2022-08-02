import { NextSeo } from "next-seo"
import styles from "../styles/Home.module.css"
import Image from "next/image"
import EdcPasswordGenerator from "../components/passwordGenerator"
import EdcLocaleCtrl from "../components/localeCtrl"
import SEO from "../seo"

const Home = () => {
  const homeUrl = "https://edcilo.com"
  const logoUrl = "https://storage.edcilo.com/edcilo-logo-clear.svg"

  return (
    <>
      <NextSeo {...SEO} />
      <main className={styles["edc-pg"]}>
        <div className={styles["edc-pg--cover"]}>
          <div className={styles["edc-pg--pattern"]} />

          <header className={styles["edc-pg--header"]}>
            <div
              className={`${styles["edc-pg--container"]} ${styles["edc-pg--header-container"]}`}
            >
              <a href={homeUrl}>
                <Image src={logoUrl} width={90} height={28} alt="edc logo" />
              </a>

              <EdcLocaleCtrl className={styles["edc-pg--locale-ctrl"]} />
            </div>
          </header>

          <section className={`${styles["edc-pg--container"]}`}>
            <div>
              <h1 className={styles["edc-pg--title"]}>Password Generator</h1>
              <p className={styles["edc-pg--label"]}>
                Generate a secure password!
              </p>
              <EdcPasswordGenerator />
              <p className={styles["edc-pg--disclaimer"]}>
                This tool work on the client side. The passwords you generate
                are never sent across the web. Please be careful where you paste
                them.
              </p>
            </div>
          </section>

          <svg
            className={styles["edc-pg--curve"]}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 260"
          >
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,96L120,128C240,160,480,224,720,234.7C960,245,1200,203,1320,181.3L1440,160L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
            />
          </svg>
        </div>

        <footer className={styles["edc-pg--footer"]}>
          <div className={styles["edc-pg--container"]}>
            <a href={homeUrl} className={styles.link}>
              edcilo.com
            </a>
          </div>
        </footer>
      </main>
    </>
  )
}

export default Home

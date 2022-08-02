import styles from "../styles/Home.module.css"
import { useEffect, useState } from "react"
import { NextSeo } from "next-seo"
import Image from "next/image"
import EdcPasswordGenerator from "../components/passwordGenerator"
import EdcLocaleCtrl from "../components/localeCtrl"
import EdcThemeCtrl from "../components/themeCtrl"
import I18n from "../components/i18n"
import SEO from "../seo"

const Home = () => {
  const logoClear = "https://storage.edcilo.com/edcilo-logo-clear.svg"
  const logoDark = "https://storage.edcilo.com/edcilo-logo-dark.svg"
  const [theme, setTheme] = useState("light")
  const [logo, setLogo] = useState(logoClear)
  const homeUrl = "https://edcilo.com"

  useEffect(() => {
    setLogo(theme === "dark" ? logoDark : logoClear)
  }, [theme])

  return (
    <>
      <NextSeo {...SEO} />
      <main className={styles["edc-pg"]} data-theme={theme}>
        <div className={styles["edc-pg--cover"]}>
          <div className={styles["edc-pg--pattern"]} />

          <header className={styles["edc-pg--header"]}>
            <div
              className={`${styles["edc-pg--container"]} ${styles["edc-pg--header-container"]}`}
            >
              <a href={homeUrl}>
                <Image
                  src={logo}
                  width={100}
                  height={31.6}
                  alt="edcilo.com logo"
                />
              </a>

              <span>
                <EdcLocaleCtrl className={styles["edc-pg--locale-ctrl"]} />
                &nbsp;
                <EdcThemeCtrl onChange={(theme) => setTheme(theme)} />
              </span>
            </div>
          </header>

          <section className={`${styles["edc-pg--container"]}`}>
            <div>
              <h1 className={styles["edc-pg--title"]}>
                <I18n t="title" />
              </h1>
              <p className={styles["edc-pg--label"]}>
                <I18n t="subtitle" />
              </p>
              <EdcPasswordGenerator />
              <p className={styles["edc-pg--disclaimer"]}>
                <I18n t="disclaimer" />
              </p>
            </div>
          </section>
        </div>

        <div className={styles["edc-pg--media"]}>
          <div className={`${styles["edc-pg--container"]}`}>
            <div className={styles["edc-pg--avatar"]}>
              <Image
                src="https://storage.edcilo.com/avatar.svg"
                width={373}
                height={385}
              />
            </div>
          </div>
          <svg
            className={styles["edc-pg--curve"]}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 260"
          >
            <path
              fill="var(--fill-blank)"
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

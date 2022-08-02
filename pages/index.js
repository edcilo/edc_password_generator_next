import styles from "../styles/Home.module.css"
import { NextSeo } from "next-seo"
import { useTheme } from "next-themes"
import Image from "next/image"
import EdcPasswordGenerator from "../components/passwordGenerator"
import EdcLocaleCtrl from "../components/localeCtrl"
// import EdcThemeCtrl from "../components/themeCtrl"
import I18n from "../components/i18n"
import SEO from "../seo"

const Home = () => {
  const { theme } = useTheme()
  const homeUrl = "https://edcilo.com"
  const logoUrl =
    theme === "dark"
      ? "https://storage.edcilo.com/edcilo-logo-dark.svg"
      : "https://storage.edcilo.com/edcilo-logo-clear.svg"

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
                <Image
                  src={logoUrl}
                  width={90}
                  height={28}
                  alt="edcilo.com logo"
                />
              </a>

              <span>
                <EdcLocaleCtrl className={styles["edc-pg--locale-ctrl"]} />
                &nbsp;
                {/* <EdcThemeCtrl /> */}
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

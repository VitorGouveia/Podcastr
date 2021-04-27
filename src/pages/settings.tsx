import Head from "next/head"

import styles from "../styles/settings.module.scss"

export default function Settings() {

  return (
    <div className={styles.settings}>
      <Head>
        <title>Settings | Podcastr</title>
      </Head>

      <section className={styles.themeSettings}>
        <h2>Temas</h2>

        <ul>
          <form>
            <li>
              <label>
                <img width="192" height="192" src="light.jpg" alt="Tema Claro" />

                <div className={styles.themeDetails}>
                  <span>Tema Claro</span>
                  <input type="radio" />
                </div>
              </label>
            </li>
            <li>
              <label>
                <img width="192" height="192" src="dark.png" alt="Tema Escuro" />

                <div className={styles.themeDetails}>
                  <span>Tema Escuro</span>
                  <input type="radio" />
                </div>
              </label>
            </li>
          </form>
        </ul>
      </section>
    </div>
  )
}
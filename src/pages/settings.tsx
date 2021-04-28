import { useState } from "react"
import Head from "next/head"

import styles from "../styles/settings.module.scss"

export default function Settings() {
  const [currentTheme, setCurrentTheme] = useState(false)

  return (
    <div className={styles.settings}>
      <Head>
        <title>Settings | Podcastr</title>
      </Head>

      <section className={styles.themeSettings}>
        <h2>Temas</h2>

          <ul>
            <li>
              <label onClick={() => setCurrentTheme(!currentTheme)}>
                <img width="192" height="192" src="light.jpg" alt="Tema Claro" />

                <div className={styles.themeDetails}>
                  <span>Tema Claro</span>
                  <input onChange={() => {}} checked={currentTheme} type="radio" />
                </div>
              </label>
            </li>
            <li>
              <label onClick={() => setCurrentTheme(!currentTheme)}>
                <img width="192" height="192" src="dark.png" alt="Tema Escuro" />

                <div className={styles.themeDetails}>
                  <span>Tema Escuro</span>
                  <input onChange={() => {}} checked={!currentTheme} type="radio" />
                </div>
              </label>
            </li>
          </ul>
      </section>
    </div>
  )
}
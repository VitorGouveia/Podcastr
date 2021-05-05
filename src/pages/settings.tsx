import { useState, useEffect } from "react"
import Head from "next/head"

import styles from "@styles/settings.module.scss"

export default function Settings() {
  const [currentTheme, setCurrentTheme] = useState("")

  useEffect(() => {
    const currentLocalStorageTheme = localStorage.getItem("theme")
    setCurrentTheme(currentLocalStorageTheme)
  })

  function setTheme(theme) {
    localStorage.setItem("theme", theme)
    document.body.className = theme
    setCurrentTheme(theme)
  }

  return (
    <div className={styles.settings}>
      <Head>
        <title>Settings | Podcastr</title>
      </Head>

      <section className={styles.themeSettings}>
        <h2>Temas</h2>

          <ul>
            <li>
              <label>
                <img width="192" height="192" src="light.jpg" alt="Tema Claro" />

                <div className={styles.themeDetails}>
                  <span>Claro</span>
                  <input checked={currentTheme == "light"} onClick={() => setTheme("light")} onChange={() => {}} type="radio" name="theme" />
                </div>
              </label>
            </li>
            <li>
              <label>
                <img width="192" height="192" src="dark.png" alt="Tema Escuro" />

                <div className={styles.themeDetails}>
                  <span>Escuro</span>
                  <input checked={currentTheme == "dark"} onClick={() => setTheme("dark")} onChange={() => {}} type="radio" name="theme" />
                </div>
              </label>
            </li>
            <li>
              <label>
                <img width="192" height="192" src="dark.png" alt="Tema Escuro" />

                <div className={styles.themeDetails}>
                  <span>Omni</span>
                  <input checked={currentTheme == "omni"} onClick={() => setTheme("omni")} onChange={() => {}} type="radio" name="theme" />
                </div>
              </label>
            </li>
          </ul>
      </section>
    </div>
  )
}
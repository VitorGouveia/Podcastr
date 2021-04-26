import "../styles/global.scss"

import { useEffect } from "react"

import { Header } from "../components/Header"
import { Player } from "../components/Player"

import { PlayerContextProvider } from "../contexts/PlayerContext"

import styles from "../styles/app.module.scss"

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    localStorage.setItem("theme", "dark")

    const currentTheme = localStorage.getItem("theme")

    document.body.classList.toggle(currentTheme)
  }, [])

  return(
    <PlayerContextProvider>
      <div className={styles.wrapper}>
        <main>
          <Header />
          <Component {...pageProps} />
        </main>
        <Player />
      </div>
    </PlayerContextProvider>
  )
}

export default MyApp

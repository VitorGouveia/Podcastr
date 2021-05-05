import "../styles/global.scss"
import "../styles/themes/dark.scss"
import "../styles/themes/light.scss"
import "../styles/themes/omni.scss"

import { useEffect } from "react"

import { Header } from "../components/Header"
import { Player } from "../components/Player"

import { PlayerContextProvider } from "../contexts/PlayerContext"

import styles from "@styles/app.module.scss"

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const currentTheme = localStorage.getItem("theme")

    if(!currentTheme || currentTheme == null || currentTheme == "") {
      localStorage.setItem("theme", "light")
      document.body.classList.add("light")
    }

    if(currentTheme == "dark" || currentTheme == "light") {
      document.body.classList.add(currentTheme)
      return
    }
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

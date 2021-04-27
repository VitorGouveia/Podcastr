import Head from "next/head"
import Image from "next/image"

import styles from "../styles/settings.module.scss"

export default function Settings() {

  return (
    <div className={styles.settings}>
      <Head>
        <title>Settings | Podcastr</title>
      </Head>

      <section className={styles.themeSettings}>
        <h2>Temas</h2>
      </section>
    </div>
  )
}
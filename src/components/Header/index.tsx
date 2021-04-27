import Link from "next/link"

import format from "date-fns/format"
import ptBR from "date-fns/locale/pt-BR"

import { Logo } from "../Logo"
import { FiSettings } from "react-icons/fi"

import styles from "./styles.module.scss"

export function Header() {
  const currentDate = format(new Date(), "EEEEEE, d MMMM", {
    locale: ptBR
  })

  return (
    <header className={styles.headerContainer}>
        {/* <img src="/logo.svg" alt="Podcastr"/> */}
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>

      <p>O melhor para você ouvir, sempre</p>

      <span>{currentDate}</span>
      <Link href="/settings">
        <FiSettings className={styles.settings} />   
      </Link>
    </header>
  )
}
import { GetStaticProps } from "next"

interface HomeProps {
  id: string
  title: string
  members: string
  published_at: string
  thumbnail: string
  description: string
  file: {
    url: string
    type: string
    duration: number
  }
}

export default function Home({ episodes }) {

  return (
    <h1>index</h1>
  )
}


export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch("http://localhost:3333/episodes")
  const data = await response.json()

  return {
    props: {
      episodes: data
    },
    revalidate: 60 * 60 * 8 // 8hrs
  }
}
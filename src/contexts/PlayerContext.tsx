import { createContext, useState, FC, ReactNode } from "react"

type Episode = {
  title: string
  members: string
  thumbnail: string
  duration: number
  url: string
}

type PlayerContextData = {
  episodeList: Episode[]
  currentEpisodeIndex: number
  isPlaying: boolean
  play: (episode: Episode) => void
  togglePlay: () => void
  setPlayingState: (state: boolean) => void
  playList: (list: Episode[], index: number) => void
  playNext: () => void
  playPrevious: () => void
  hasNext: boolean
  hasPrevious: boolean
}

export const PlayerContext = createContext({} as PlayerContextData)

type PlayerContextProviderProps = {
  children: ReactNode
}

export const PlayerContextProvider: FC<PlayerContextProviderProps> = ({ children }) => {
  const [episodeList, setEpisodeList] = useState([])
  const [currentEpisodeIndex, setcurrentEpisodeIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  function play(episode: Episode) {
    setEpisodeList([episode])
    setcurrentEpisodeIndex(0)
    setIsPlaying(true)
  }

  function playList(list: Episode[], index: number) {
    setEpisodeList(list)
    setcurrentEpisodeIndex(index)
    setIsPlaying(true)
  }

  function togglePlay() {
    setIsPlaying(!isPlaying)
  }

  function setPlayingState(state: boolean) {
    setIsPlaying(state)
  }

  const hasPrevious = currentEpisodeIndex > 0
  const hasNext = (currentEpisodeIndex + 1) < episodeList.length

  function playNext() {
    const nextEpisodeIndex = currentEpisodeIndex

    if(hasNext) {
      setcurrentEpisodeIndex(currentEpisodeIndex + 1)
    }
  }

  function playPrevious() {
    if(hasPrevious) {
      setcurrentEpisodeIndex(currentEpisodeIndex - 1)
    }
  }

  return (
    <PlayerContext.Provider value={{ 
      episodeList, 
      currentEpisodeIndex, 
      isPlaying, 
      play, 
      togglePlay, 
      setPlayingState,
      playList,
      hasNext,
      hasPrevious,
      playNext,
      playPrevious
      }}
    >

      {children}
    </PlayerContext.Provider>
  )
}
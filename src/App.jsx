import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import content from './content.js'
import MusicToggle from './components/MusicToggle.jsx'
import LetterEnvelopePage from './pages/LetterEnvelopePage.jsx'
import BirthdayIntroPage from './pages/BirthdayIntroPage.jsx'
import MenuPage from './pages/MenuPage.jsx'
import MemoriesPage from './pages/MemoriesPage.jsx'
import FlowersPage from './pages/FlowersPage.jsx'
import SongPage from './pages/SongPage.jsx'
import LetterPage from './pages/LetterPage.jsx'

const fade = {
  initial: { opacity: 0, scale: 0.98 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.98 },
  transition: { duration: 0.35, ease: 'easeInOut' },
}

export default function App() {
  const [page, setPage] = useState('letterEnvelope')
  const [startMusic, setStartMusic] = useState(false)

  const go = (p) => setPage(p)
  const back = () => setPage('menu')

  const handleOpenLetter = () => {
    setStartMusic(true)
    go('birthdayIntro')
  }

  return (
    <>
      <MusicToggle src={content.music} forcePlay={startMusic} />

      <AnimatePresence mode="wait">
        <motion.div key={page} {...fade} style={{ width: '100%', minHeight: '100vh' }}>
          {page === 'letterEnvelope' && (
            <LetterEnvelopePage
              onOpen={handleOpenLetter}
              content={content}
            />
          )}

          {page === 'birthdayIntro' && (
            <BirthdayIntroPage
              onNext={() => go('menu')}
              content={content}
            />
          )}

          {page === 'menu' && (
            <MenuPage
              go={go}
              content={content}
            />
          )}

          {page === 'flowers' && (
            <FlowersPage back={back} content={content} />
          )}

          {page === 'memories' && (
            <MemoriesPage back={back} content={content} />
          )}

          {page === 'song' && (
            <SongPage back={back} content={content} />
          )}

          {page === 'letter' && (
            <LetterPage back={back} content={content} />
          )}
        </motion.div>
      </AnimatePresence>
    </>
  )
}

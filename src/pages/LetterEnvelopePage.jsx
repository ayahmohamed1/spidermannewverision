import { useState } from 'react'
import { motion } from 'framer-motion'
import styles from './LetterEnvelopePage.module.css'

export default function LetterEnvelopePage({ onOpen, content }) {
  const [opening, setOpening] = useState(false)
  const le = content.letterEnvelope || {}

  const handleOpen = () => {
    if (opening) return
    setOpening(true)
    setTimeout(() => {
      onOpen()
    }, 450)
  }

  return (
    <div className={styles.container}>
      <motion.div
        className={`comic-card ${styles.card}`}
        initial={{ opacity: 0, scale: 0.9, y: 25 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className={styles.header}>
          <h1 className={`comic-title ${styles.title}`}>
            {le.title || 'YOU GOT A LETTER'}
          </h1>
          <p className={`comic-subtitle ${styles.subtitle}`}>
            {le.subtitle || 'CLICK THE ENVELOPE TO OPEN'}
          </p>
        </div>

        <motion.div
          className={styles.envelopeWrapper}
          onClick={handleOpen}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          animate={opening ? { scale: [1, 1.15, 0.9], opacity: [1, 1, 0.4] } : { y: [0, -6, 0] }}
          transition={
            opening
              ? { duration: 0.45, ease: 'easeInOut' }
              : { duration: 3, repeat: Infinity, ease: 'easeInOut' }
          }
        >
          <img
            src={le.envelopeImg || '/images/spiderman-envelope.png'}
            alt="Spider-Man Envelope"
            className={styles.envelopeImg}
          />
          <div className={styles.clickHint}>
            <span>✉️ Tap to open</span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}


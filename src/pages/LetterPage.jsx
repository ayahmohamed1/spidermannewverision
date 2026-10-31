import { motion } from 'framer-motion'
import styles from './LetterPage.module.css'

export default function LetterPage({ back, content }) {
  const l = content.letter
  const lines = l.message.split('\n')

  return (
    <div className={styles.page}>
      {/* Spider-Man hanging and dropping on the LEFT in the background */}
      <motion.div 
        className={styles.spidermanLeftHanger}
        initial={{ y: -100, opacity: 0 }}
        animate={{ 
          y: [0, 55, 15, 65, 0],
          rotate: [-5, 5, -2, 4, -5]
        }}
        transition={{ 
          duration: 5.5, 
          repeat: Infinity, 
          ease: 'easeInOut' 
        }}
      >
        <div className={styles.webRope} />
        <img 
          src="/images/spiderman-hanging.png" 
          alt="Spider-Man hanging on web" 
          className={styles.hangerImg}
        />
      </motion.div>

      {/* Spider-Man hanging and dropping on the RIGHT in the background */}
      <motion.div 
        className={styles.spidermanRightHanger}
        initial={{ y: -80, opacity: 0 }}
        animate={{ 
          y: [45, 0, 55, 10, 45],
          rotate: [5, -5, 3, -2, 5]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          ease: 'easeInOut',
          delay: 0.6
        }}
      >
        <div className={styles.webRope} />
        <img 
          src="/images/spiderman-flowers.png" 
          alt="Spider-Man with flowers" 
          className={styles.hangerImgRight}
        />
      </motion.div>

      <div className={styles.inner}>
        <div className={styles.dashedTop} />

        {/* Spider-Man heart sticker at top of letter */}
        <motion.div 
          className={styles.spidermanHeaderWrapper}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.img 
            src="/images/spiderman-crouch-heart.png" 
            alt="Spider-Man with Heart" 
            className={styles.spidermanHeaderImg}
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>

        {/* Normal elegant letter card with lined paper effect */}
        <motion.div
          className={styles.letterCard}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className={styles.letterInner}>
            {lines.map((line, i) =>
              line.trim() === '' ? (
                <div key={i} className={styles.spacer} />
              ) : (
                <motion.p
                  key={i}
                  className={styles.line}
                  dir="auto"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.03 }}
                >
                  {line}
                </motion.p>
              )
            )}

            <motion.div
              className={styles.signoff}
              dir="auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <p>{l.signoff}</p>
              <p className={styles.signature}>{l.signature}</p>
            </motion.div>
          </div>
        </motion.div>

        <div className={styles.dashedBottom} />

        <motion.div
          className={styles.footer}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <h2 className={styles.title} dir="auto">{l.title}</h2>
          <button className="btn-return-gifts" onClick={back}>
            {l.returnButton || 'RETURN TO GIFTS'}
          </button>
        </motion.div>
      </div>
    </div>
  )
}
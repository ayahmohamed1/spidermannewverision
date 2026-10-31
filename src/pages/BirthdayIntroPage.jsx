import { motion } from 'framer-motion'
import styles from './BirthdayIntroPage.module.css'

export default function BirthdayIntroPage({ onNext, content }) {
  const bi = content.birthdayIntro || {}

  return (
    <div className={styles.container}>
      <motion.div
        className={styles.wrapper}
        initial={{ opacity: 0, scale: 0.9, y: 25 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className={`comic-card ${styles.card}`}>
          {/* Top arched text: HAPPY BIRTHDAY */}
          <div className={styles.topArcSvgWrap}>
            <svg viewBox="0 0 380 90" className={styles.arcSvg}>
              <path
                id="curveTop"
                d="M 30,85 Q 190,15 350,85"
                fill="none"
              />
              <text className={styles.arcText}>
                <textPath href="#curveTop" startOffset="50%" textAnchor="middle">
                  {bi.topText || 'HAPPY BIRTHDAY'}
                </textPath>
              </text>
            </svg>
          </div>

          {/* Chibi Spiderman / Custom Cover Image in center */}
          <motion.div
            className={styles.spideyWrapper}
            animate={{
              y: [0, -8, 0],
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 2.8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <img
              src={bi.coverImage || bi.sticker || '/cover.png'}
              alt="Birthday Cover"
              className={styles.spideyImg}
            />
          </motion.div>

          {/* Bottom arched text: TO MY BABY */}
          <div className={styles.bottomArcSvgWrap}>
            <svg viewBox="0 0 380 90" className={styles.arcSvg}>
              <path
                id="curveBottom"
                d="M 30,20 Q 190,85 350,20"
                fill="none"
              />
              <text className={styles.arcText}>
                <textPath href="#curveBottom" startOffset="50%" textAnchor="middle">
                  {bi.bottomText || 'TO MY BABY'}
                </textPath>
              </text>
            </svg>
          </div>
        </div>

        {/* Next Button */}
        <motion.div
          className={styles.buttonWrapper}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.4 }}
        >
          <button
            onClick={onNext}
            className={`btn-return-gifts ${styles.nextBtn}`}
          >
            {bi.nextButton || 'NEXT'} ➔
          </button>
        </motion.div>
      </motion.div>
    </div>
  )
}

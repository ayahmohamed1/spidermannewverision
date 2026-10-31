import { motion } from 'framer-motion'
import styles from './FlowersPage.module.css'

export default function FlowersPage({ back, content }) {
  const f = content.flowers || {}
  const reasons = f.reasons || [
    'You always know how to comfort me.',
    'You understand me without saying anything.',
    'You believe in me no matter what.',
    'You make me feel safe every day.',
    'You make my heart feel at home.',
    'You love me with your whole heart.',
    'You make even ordinary moments magical.',
    'You celebrate every little win with me.',
    'You always listen with your whole heart.',
    'You make every memory unforgettable.',
  ]

  // First 5 for left column, next 5 for right column
  const leftReasons = [reasons[0], reasons[2], reasons[4], reasons[6], reasons[8]]
  const rightReasons = [reasons[1], reasons[3], reasons[5], reasons[7], reasons[9]]

  return (
    <div className={styles.container}>
      <motion.div
        className={styles.wrapper}
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
      >
        <div className={`comic-card ${styles.card}`}>
          {/* Header */}
          <div className={styles.header}>
            <h1 className={`comic-title ${styles.title}`}>
              {f.title || 'REASONS WHY YOU MATTER'}
            </h1>
            <p className={`comic-subtitle ${styles.subtitle}`}>
              {f.subtitle || "A LITTLE REMINDER OF WHY YOU'LL ALWAYS HAVE MY HEART"}
            </p>
          </div>

          {/* Center layout: Left pills | Spiderman | Right pills */}
          <div className={styles.contentLayout}>
            {/* Left Column (5 reasons) */}
            <div className={styles.column}>
              {leftReasons.map((text, i) => (
                <motion.div
                  key={`left-${i}`}
                  className={styles.reasonPill}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                >
                  <span>{text}</span>
                </motion.div>
              ))}
            </div>

            {/* Center Spider-Man Sticker */}
            <div className={styles.spideyCenter}>
              <motion.div
                className={styles.spideyMotion}
                animate={{
                  y: [0, -6, 0],
                  scale: [1, 1.03, 1],
                }}
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <img
                  src={f.sticker || '/images/spiderman-crouching-hearts.png'}
                  alt="Spider-Man with hearts"
                  className={styles.spideyImg}
                />
              </motion.div>
            </div>

            {/* Right Column (5 reasons) */}
            <div className={styles.column}>
              {rightReasons.map((text, i) => (
                <motion.div
                  key={`right-${i}`}
                  className={styles.reasonPill}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                >
                  <span>{text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Return to gifts button below the card */}
        <motion.div
          className={styles.buttonWrapper}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.4 }}
        >
          <button
            onClick={back}
            className={`btn-return-gifts ${styles.returnBtn}`}
          >
            {f.returnButton || 'RETURN TO GIFTS'}
          </button>
        </motion.div>
      </motion.div>
    </div>
  )
}

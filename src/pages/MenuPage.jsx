import { motion } from 'framer-motion'
import styles from './MenuPage.module.css'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } }
}
const itemV = {
  hidden:  { opacity: 0, scale: 0.85, y: 15 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 180, damping: 16 } }
}

export default function MenuPage({ go, content }) {
  const m = content.menu || {}
  const items = m.items || [
    { id: 'flowers', label: 'Reasons Why You Matter' },
    { id: 'memories', label: 'Captured Memories' },
    { id: 'song', label: 'Our Song' },
    { id: 'letter', label: 'Love Letter' },
  ]

  return (
    <div className={styles.container}>
      <motion.div
        className={`comic-card ${styles.card}`}
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
      >
        {/* Top Header with hanging Spideys on left & right */}
        <div className={styles.header}>
          {/* Left hanging spidey */}
          <motion.div
            className={styles.hangerLeft}
            animate={{ rotate: [-4, 4, -4] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <img
              src={m.hangingSticker || '/images/spiderman-hanging.png'}
              alt="Spider-Man"
              className={styles.hangerImg}
            />
          </motion.div>

          {/* Title & subtitle in center */}
          <div className={styles.titleWrap}>
            <h1 className={`comic-title ${styles.title}`}>
              {m.title || 'SPIDEY GIFTS FOR YOU'}
            </h1>
            <p className={`comic-subtitle ${styles.subtitle}`}>
              {m.subtitle || "THESE ARE FOR YOU! I HOPE YOU'LL LIKE IT"}
            </p>
          </div>

          {/* Right hanging spidey */}
          <motion.div
            className={styles.hangerRight}
            animate={{ rotate: [4, -4, 4] }}
            transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <img
              src={m.hangingSticker || '/images/spiderman-hanging.png'}
              alt="Spider-Man"
              className={styles.hangerImg}
            />
          </motion.div>
        </div>

        {/* 2x2 Gift Cards Grid */}
        <motion.div
          className={styles.grid}
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {items.map((item) => (
            <motion.button
              key={item.id}
              className={styles.giftCard}
              variants={itemV}
              whileHover={{ scale: 1.05, translateY: -3 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => go(item.id)}
            >
              <div className={styles.cardCover}>
                <img
                  src="/images/spidey-card.png"
                  alt={item.label}
                  className={styles.cardImg}
                />
              </div>
              <span className={styles.cardLabel}>{item.label}</span>
            </motion.button>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}

import { motion } from 'framer-motion'
import styles from './WelcomePage.module.css'

export default function WelcomePage({ go, content, name }) {
  return (
    <div className={styles.container}>
      {/* Background corner stickers with Spider-Man hand gestures */}
      <motion.img 
        src="/images/spiderman-hand-web.png" 
        alt="Spider-Man Web" 
        className={styles.bgCornerLeft}
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1, rotate: [-3, 3, -3] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
      />
      
      <motion.img 
        src="/images/spiderman-jumping-hearts.png" 
        alt="Spider-Man Jumping" 
        className={styles.bgCornerRight}
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div 
        className={styles.contentBox}
        initial={{ opacity: 0, scale: 0.92, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
      >
        {/* Spider-Man with double web hand gesture & hearts */}
        <motion.div 
          className={styles.spidermanStickerWrap}
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <img 
            src="/images/spiderman-horns-hearts.png" 
            alt="Spider-Man Web Hands" 
            className={styles.welcomeSpidermanSticker} 
          />
        </motion.div>
        
        {/* Hello greeting */}
        <div className={styles.textGroup}>
          <h1 className={styles.helloText}>{content.welcome.greeting}</h1>
          <h1 className={styles.loveText}>{name}!</h1>
        </div>
        
        <p className={styles.question}>{content.welcome.question || 'do you want to see your gift?'}</p>
        
        <div className={styles.buttons}>
          <button onClick={() => go('menu')} className={`btn-return ${styles.btnPrimary}`}>
            {content.welcome.yesButton}
          </button>
          <button onClick={() => go('noThanks')} className="btn-return">
            {content.welcome.noButton}
          </button>
        </div>
      </motion.div>
    </div>
  )
}
import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './PasswordPage.module.css'

// Spider-Man themed heart padlock
const SpidermanLockIcon = () => (
  <svg 
    width="54" height="54" viewBox="0 0 100 100" 
    fill="none" stroke="var(--red)" strokeWidth="3.5" 
    strokeLinecap="round" strokeLinejoin="round"
  >
    {/* padlock handle/shackle */}
    <path d="M35 45 V28 A15 15 0 0 1 65 28 V45" stroke="var(--blue)" strokeWidth="4" />
    {/* lock body */}
    <rect x="24" y="44" width="52" height="44" rx="12" fill="#ffffff" stroke="var(--red)" strokeWidth="3.5" />
    {/* spider web subtle lines on lock */}
    <path d="M26 46 L74 86 M74 46 L26 86" stroke="var(--red-pale)" strokeWidth="1" strokeDasharray="3 3" />
    {/* heart keyhole with blue fill */}
    <path 
      d="M50 63 C50 59 44 57 44 62 C44 67 50 72 50 74 C50 72 56 67 56 62 C56 57 50 59 50 63 Z" 
      fill="var(--blue)" 
      stroke="var(--blue)" 
      strokeWidth="1.5"
    />
  </svg>
)

export default function PasswordPage({ onSuccess, content }) {
  const p = content?.password || {}
  const targetCode = String(p.code || '1122').trim()
  const hangingStickerSrc = '/images/spiderman-hanging.png'
  const cuteStickerSrc = '/images/spiderman-horns-hearts.png'

  const [pin, setPin] = useState('')
  const [attemptCount, setAttemptCount] = useState(0)
  const [boxesError, setBoxesError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('no try again')
  const [showFeedback, setShowFeedback] = useState(false)
  const [success, setSuccess] = useState(false)
  const [shake, setShake] = useState(false)
  const inputRef = useRef(null)

  // Auto focus input on mount
  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  // Convert Arabic numerals to Western digits
  const normalizeDigits = (str) => {
    return str
      .replace(/[٠-٩]/g, (d) => '٠١٢٣٤٥٦٧٨٩'.indexOf(d))
      .replace(/[^0-9]/g, '')
      .slice(0, 4)
  }

  const handleVerify = (codeToVerify) => {
    const clean = normalizeDigits(codeToVerify)
    if (clean === targetCode) {
      setSuccess(true)
      setBoxesError(false)
      setShowFeedback(false)
      setErrorMessage('')
      setTimeout(() => {
        onSuccess()
      }, 400)
    } else {
      const nextAttempt = attemptCount + 1
      setAttemptCount(nextAttempt)
      setErrorMessage('no try again')
      setShowFeedback(true)

      setBoxesError(true)
      setShake(true)
      setTimeout(() => setShake(false), 500)
      setTimeout(() => {
        setPin('')
        setBoxesError(false)
        inputRef.current?.focus()
      }, 700)
    }
  }

  const handleChange = (e) => {
    if (success) return
    const raw = e.target.value
    const cleaned = normalizeDigits(raw)
    setPin(cleaned)

    if (cleaned.length === 4) {
      handleVerify(cleaned)
    }
  }

  const handleContainerClick = () => {
    inputRef.current?.focus()
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (pin.length === 4) {
      handleVerify(pin)
    } else {
      setBoxesError(true)
      setShake(true)
      setTimeout(() => {
        setShake(false)
        setBoxesError(false)
      }, 500)
      inputRef.current?.focus()
    }
  }

  return (
    <div className={styles.page}>
      {/* Decorative Spider-Man stickers visible immediately from start */}
      <motion.div 
        className={styles.decorTopLeft}
        initial={{ opacity: 0, scale: 0.7, y: -20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className={styles.webHanger} />
        <motion.img 
          src="/images/spiderman-hand-web.png" 
          alt="Spider-Man Web" 
          className={styles.decorStickerWeb}
          animate={{ rotate: [-3, 3, -3] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>

      <motion.div 
        className={styles.decorTopRight}
        initial={{ opacity: 0, scale: 0.7, rotate: 10 }}
        animate={{ opacity: 1, scale: 1, rotate: 6 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <motion.img 
          src="/images/spiderman-mask-heart.png" 
          alt="Spider-Man Heart" 
          className={styles.decorStickerHeart}
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>

      <motion.div 
        className={styles.decorBottomLeft}
        initial={{ opacity: 0, scale: 0.7, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.img 
          src="/images/spiderman-crouch-heart.png" 
          alt="Spider-Man Love" 
          className={styles.decorStickerCrouch}
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>

      {/* Spider-Man with hearts at bottom right instead of music icon */}
      <motion.div 
        className={styles.decorBottomRight}
        initial={{ opacity: 0, scale: 0.7, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.25 }}
        whileHover={{ scale: 1.08, translateY: -4 }}
      >
        <motion.img 
          src="/images/spiderman-crouching-hearts.png" 
          alt="Cute Spider-Man with Hearts" 
          className={styles.decorStickerCrouchingHearts}
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>

      <motion.div 
        className={styles.inner}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className={styles.dashedTop} />

        <div className={styles.card}>
          <motion.div 
            className={styles.lockIconWrapper}
            animate={success ? { scale: [1, 1.25, 1], rotate: [0, -10, 10, 0] } : { y: [0, -3, 0] }}
            transition={{ duration: success ? 0.5 : 2.5, repeat: success ? 0 : Infinity, ease: 'easeInOut' }}
          >
            <SpidermanLockIcon />
          </motion.div>

          <h1 className={styles.title} dir="auto">
            {p.title || 'enter a secret date'}
          </h1>

          <p className={styles.subtitle} dir="auto">
            {p.subtitle || 'a date only we know ♡'}
          </p>

          <motion.div 
            className={styles.pinContainer}
            onClick={handleContainerClick}
            animate={shake ? { x: [-10, 10, -8, 8, -4, 4, 0] } : {}}
            transition={{ duration: 0.45 }}
          >
            {/* Real hidden input to capture desktop typing and mobile numeric keyboard */}
            <input
              ref={inputRef}
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              autoComplete="one-time-code"
              className={styles.hiddenInput}
              value={pin}
              onChange={handleChange}
              maxLength={4}
              autoFocus
            />

            {[0, 1, 2, 3].map((index) => {
              const char = pin[index]
              const isFilled = char !== undefined
              const isActive = pin.length === index && !success && !boxesError

              let boxClass = styles.digitBox
              if (isActive) boxClass += ` ${styles.active}`
              if (isFilled) boxClass += ` ${styles.filled}`
              if (boxesError) boxClass += ` ${styles.error}`
              if (success) boxClass += ` ${styles.success}`

              return (
                <div key={index} className={boxClass}>
                  {isFilled ? (
                    <motion.span
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.15 }}
                    >
                      {char}
                    </motion.span>
                  ) : isActive ? (
                    <div className={styles.cursor} />
                  ) : (
                    <div className={styles.placeholderDash} />
                  )}
                </div>
              )
            })}
          </motion.div>

          {/* Feedback section: Spider-Man dropping down on web when wrong password is typed */}
          <AnimatePresence mode="wait">
            {showFeedback && !success && (
              <motion.div 
                key={`attempt-${attemptCount}`}
                className={styles.spidermanDropContainer}
                initial={{ y: -180, opacity: 0, scale: 0.8 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                exit={{ y: -180, opacity: 0, scale: 0.8 }}
                transition={{ type: 'spring', stiffness: 220, damping: 14 }}
              >
                {/* Spider-Man Web Thread dropping down */}
                <div className={styles.webThread} />

                <div className={styles.spidermanHangingCard}>
                  <motion.div 
                    className={styles.spidermanSwingWrapper}
                    animate={{ rotate: [-6, 6, -6] }}
                    transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <img 
                      src={hangingStickerSrc} 
                      alt="Spider-Man dropping down" 
                      className={styles.spidermanHangingImg} 
                    />
                  </motion.div>

                  <div className={styles.speechBubble}>
                    <span className={styles.speechText}>no try again</span>
                  </div>
                </div>
              </motion.div>
            )}

            {success && (
              <motion.div 
                key="success"
                className={styles.successContainer}
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <img 
                  src={cuteStickerSrc} 
                  alt="Spider-Man Unlocked" 
                  className={styles.spidermanSuccessSticker} 
                />
                <div className={styles.successText}>
                  unlocked! ♡
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className={styles.actions}>
            <button 
              type="button"
              className="btn-return" 
              onClick={handleSubmit}
            >
              {p.buttonText || 'UNLOCK ♡'}
            </button>
          </div>
        </div>

        <div className={styles.dashedBottom} />
      </motion.div>
    </div>
  )
}

import { useState, useRef, useEffect } from 'react'

export default function MusicToggle({ src, hide, forcePlay }) {
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    if (!src) return
    const audio = new Audio(src)
    audio.loop = true
    audio.volume = 0.45
    audioRef.current = audio

    audio.addEventListener('canplaythrough', () => setReady(true))
    audio.load()

    return () => {
      audio.pause()
      audio.src = ''
    }
  }, [src])

  useEffect(() => {
    if (forcePlay && !playing && audioRef.current) {
      audioRef.current.play().then(() => setPlaying(true)).catch(() => {})
    }
  }, [forcePlay, ready])

  if (!src) return null

  const toggle = () => {
    const audio = audioRef.current
    if (!audio) return
    if (playing) {
      audio.pause()
      setPlaying(false)
    } else {
      audio.play().then(() => setPlaying(true)).catch(() => {})
    }
  }

  return (
    <button
      onClick={toggle}
      title={playing ? 'Pause music' : 'Play music'}
      style={{
        display: hide ? 'none' : 'flex',
        position: 'fixed',
        bottom: '1.2rem',
        right: '1.2rem',
        zIndex: 9999,
        width: '42px',
        height: '42px',
        borderRadius: '50%',
        border: '3px solid #000000',
        background: '#ffffff',
        color: '#e53935',
        cursor: 'pointer',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.1rem',
        boxShadow: '0 4px 14px rgba(0, 0, 0, 0.4)',
        transition: 'all 0.25s ease',
        opacity: ready ? 1 : 0.8,
      }}
      onMouseEnter={e => {
        e.currentTarget.style.background = '#e53935'
        e.currentTarget.style.color = '#ffffff'
        e.currentTarget.style.transform = 'scale(1.1)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = '#ffffff'
        e.currentTarget.style.color = '#e53935'
        e.currentTarget.style.transform = 'scale(1)'
      }}
    >
      {playing ? '⏸' : '♪'}
    </button>
  )
}

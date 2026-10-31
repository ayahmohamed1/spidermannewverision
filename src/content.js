// ★ EDIT THIS FILE ONLY ★

const content = {
  // --- Background music ---
  // Put your .mp3 file in public/music/ and set the filename here
  // Set to null to hide the music button
  music: '/music/music.mp3',

  // --- Page 1: You Got A Letter ---
  letterEnvelope: {
    title: 'YOU GOT A GIFT',
    subtitle: 'CLICK THE ENVELOPE TO OPEN',
    envelopeImg: '/images/spiderman-envelope.png',
  },

  // --- Page 2: Happy Birthday Intro ---
  // You can replace public/cover.png with any photo or sticker you want!
  birthdayIntro: {
    topText: 'HAPPY BIRTHDAY',
    bottomText: 'TO MY BABY',
    coverImage: 'images/coverr.png',
    nextButton: 'NEXT',
  },

  // --- Page 3: Spidey Gifts Menu ---
  menu: {
    title: 'SPIDEY GIFTS FOR YOU',
    subtitle: "THESE ARE FOR YOU! I HOPE YOU'LL LIKE IT",
    hangingSticker: '/images/spiderman-hanging.png',
    items: [
      { id: 'flowers', label: 'Reasons Why You Matter', icon: '❤️' },
      { id: 'memories', label: 'Captured Memories', icon: '📸' },
      { id: 'song', label: 'Our Song', icon: '🎵' },
      { id: 'letter', label: 'Love Letter', icon: '💌' },
    ],
  },

  // --- Page 4: Virtual Flowers -> Reasons Why You Matter ---
  flowers: {
    title: 'REASONS WHY YOU MATTER',
    subtitle: "A LITTLE REMINDER OF WHY YOU'LL ALWAYS HAVE MY HEART",
    sticker: '/images/spiderman-crouching-hearts.png',
    returnButton: 'RETURN TO GIFTS',
    reasons: [
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
    ],
  },

  // --- Captured Memories ---
  memories: {
    title: 'our memories',
    returnButton: 'RETURN TO GIFTS',
    images: [
      { src: '/images/memory1.jpg', label: '❤️', tag: 'my fav' },
      { src: '/images/memory2.jpg', label: '❤️', tag: 'cute' },
      { src: '/images/memory3.jpg', label: '❤️', tag: 'forever' },
      { src: '/images/memory4.jpg', label: '❤️', tag: 'love' },
      { src: '/images/memory5.jpg', label: '❤️', tag: 'always' },
      { src: '/images/memory6.jpg', label: '❤️', tag: 'mine' },
      { src: '/images/memory7.jpg', label: '❤️', tag: 'us' },
    ],
  },

  // --- Our Song ---
  song: {
    title: 'our song',
    returnButton: 'RETURN TO GIFTS',
    audioSrc: '/music/music.mp3',
    remindsText: 'this song always makes me think of you',
    songTitle: 'our song',
    artist: 'for you 🎵',
    highlight: 'every lyric feels like us 💕',
  },

  // --- Love Letter ---
  letter: {
    title: 'a letter',
    returnButton: 'RETURN TO GIFTS',
    message: `To my beloved,

Happy Birthday to the most precious person in my heart. You are my greatest blessing, my sweetest angel, and my future wife.

Your happiness is my happiness, and seeing my princess smile is all I ever want. May you always shine bright and reach the highest heights, my beautiful doctor.

Happy Birthday, my babe ♥️`,
    signoff: 'I love you always,',
    signature: 'Your love ♡',
  },
}

export default content

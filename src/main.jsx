import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Spider-Man Red Web Theme tokens
const globalStyles = `
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --spidey-bg-color: #821818;
    --red:             #e2231a;
    --red-dark:        #821818;
    --red-comic:       #e53935;
    
    --paper:           #ffffff;
    --card:            #ffffff;
    --text:            #111111;
    --text-muted:      #444444;
    
    --font-comic:      'Lilita One', 'Titan One', cursive, sans-serif;
    --font-hand:       'Caveat', cursive;
    --font-body:       'Nunito', sans-serif;
  }

  body {
    background-color: #821818;
    background-image: url('/images/spiderman-seamless-bg.jpg');
    background-repeat: repeat;
    background-size: 380px auto;
    background-attachment: fixed;
    color: var(--text);
    font-family: var(--font-body);
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    min-height: 100vh;
  }

  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  /* Comic Title style matching screenshots */
  .comic-title {
    font-family: var(--font-comic);
    color: #e53935;
    -webkit-text-stroke: 1.5px #000000;
    text-shadow: 2px 2px 0 #000000;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    line-height: 1.15;
    text-align: center;
  }

  /* Comic Subtitle style */
  .comic-subtitle {
    font-family: var(--font-body);
    font-weight: 800;
    font-size: 0.8rem;
    color: #222222;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    text-align: center;
  }

  /* White comic card */
  .comic-card {
    background: #ffffff;
    border: 3.5px solid #000000;
    border-radius: 18px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.45);
    width: 100%;
    max-width: 520px;
    margin: 0 auto;
    position: relative;
  }

  /* Return / Action pill button matching screenshots */
  .btn-return-gifts {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-family: var(--font-body);
    font-size: 0.95rem;
    font-weight: 900;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    padding: 0.75rem 2.2rem;
    border-radius: 12px;
    border: 3.5px solid #000000;
    background: #ffffff;
    color: #000000;
    cursor: pointer;
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.35);
    transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    text-align: center;
    text-decoration: none;
  }
  .btn-return-gifts:hover {
    transform: translateY(-2px) scale(1.02);
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.5);
    background: #fafafa;
  }
  .btn-return-gifts:active {
    transform: translateY(1px) scale(0.98);
  }

  /* Legacy return button helper fallback */
  .btn-return {
    font-family: var(--font-body);
    font-size: 0.85rem;
    font-weight: 800;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 0.65rem 1.8rem;
    border-radius: 12px;
    border: 3px solid #000000;
    background: #ffffff;
    color: #000000;
    cursor: pointer;
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.3);
    transition: all 0.2s ease;
  }
  .btn-return:hover {
    background: #e53935;
    color: #ffffff;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.45);
  }
`

const style = document.createElement('style')
style.textContent = globalStyles
document.head.appendChild(style)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

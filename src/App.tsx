import React from "react"
import styles from "./App.module.css"

const App: React.FC<{ initial?: number }> = ({ initial = 0 }) => {
  const [clicks, setClicks] = React.useState(initial)
  return (
    <>
      <p className={styles.link}>Clicks: {clicks}</p>
      <button onClick={() => setClicks(clicks + 1)}>+</button>
      <button onClick={() => setClicks(clicks - 1)}>-</button>
    </>
  )
}

export default App

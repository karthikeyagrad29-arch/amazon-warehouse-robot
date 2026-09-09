import { useEffect, useState } from "react"

const typingDelay = 101

function TypingTitle({ text, className = "" }) {
  const [typedText, setTypedText] = useState("")

  useEffect(() => {
    let characterIndex = 0
    const typingInterval = window.setInterval(() => {
      characterIndex += 1
      setTypedText(text.slice(0, characterIndex))

      if (characterIndex === text.length) {
        window.clearInterval(typingInterval)
      }
    }, typingDelay)

    return () => window.clearInterval(typingInterval)
  }, [text])

  return <h1 className={className} aria-label={text}>{typedText}</h1>
}

export default TypingTitle;

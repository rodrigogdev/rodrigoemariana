import NumberCard from "./sub-component/NumberCard"
import { useCountdown } from "../../hooks/useCountdown"
import "./index.css"

const Countdown = () => {
  // Set your target date here - example: December 25, 2024 at 12:00 PM
  const targetDate = new Date("2025-12-20T12:00:00")

  const { timeLeft, isExpired } = useCountdown({ targetDate })

  if (isExpired) {
    return (
      <div className="countdown-container">
        <h2 className="expired-message">🎉 The countdown has ended! 🎉</h2>
      </div>
    )
  }

  return (
    <div className="countdown-container">
      <h2 className="countdown-title">Contagem Regressiva</h2>
      <div className="countdown-grid">
        <NumberCard label="DIAS" value={timeLeft.days} />
        <NumberCard label="HORAS" value={timeLeft.hours} />
        <NumberCard label="MINUTOS" value={timeLeft.minutes} />
        <NumberCard label="SEGUNDOS" value={timeLeft.seconds} />
      </div>
    </div>
  )
}

export default Countdown

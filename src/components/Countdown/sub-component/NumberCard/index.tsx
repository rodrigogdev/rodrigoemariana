import "./index.css"

interface NumberCardProps {
  label: string
  value: number
}

const NumberCard = ({ label, value }: NumberCardProps) => {
  return (
    <div className="card">
      <div className="number">{value.toString().padStart(2, "0")}</div>
      <div className="label">{label}</div>
    </div>
  )
}

export default NumberCard

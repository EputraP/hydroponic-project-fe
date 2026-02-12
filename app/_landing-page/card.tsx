import { CardProps } from "../types"

export default function Card({ title, disabled = false}: CardProps) {
    return (
    <div className={`backdrop-blur-md bg-white/30 rounded-2xl p-6 flex flex-col items-center justify-center hover:scale-105 transition ${disabled ? "opacity-50 grayscale cursor-not-allowed pointer-events-none" : "cursor-pointer"}`}>
      <div className="w-14 h-14 bg-green-200 rounded-full flex items-center justify-center mb-3">
        🌱
      </div>
      <h2 className="text-xl font-semibold text-black">{title}</h2>
    </div>
    )   
}
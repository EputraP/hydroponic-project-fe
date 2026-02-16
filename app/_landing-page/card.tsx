import { CardProps } from "../types"
import { useDispatch } from "react-redux"
import { changeSwitcherVal } from "@/Redux/store/slices/landingPageSwitcherSlice";

export default function Card({ title, disabled = false}: CardProps) {

  const dispatch = useDispatch();

    return (
    <div onClick={() => dispatch(changeSwitcherVal({page: "detail", selectedPage: "detail"}))} className={`backdrop-blur-md bg-white/30 rounded-2xl p-6 flex flex-col items-center justify-center hover:scale-105 transition ${disabled ? "opacity-50 grayscale cursor-not-allowed pointer-events-none" : "cursor-pointer"}`}>
      <div className="w-14 h-14 bg-green-200 rounded-full flex items-center justify-center mb-3">
        🌱
      </div>
      <h2 className="text-xl font-semibold text-black">{title}</h2>
    </div>
    )   
}
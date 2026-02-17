import { CardProps } from "../types"
import { useDispatch } from "react-redux"
import { changeSwitcherVal } from "@/Redux/store/slices/landingPageSwitcherSlice";

export default function Card({ title, disabled = false}: CardProps) {

  const dispatch = useDispatch();

    return (
    <div onClick={() => dispatch(changeSwitcherVal({page: "detail", selectedPage: "detail"}))} className={`backdrop-blur-md bg-[#88ba66] rounded-2xl p-6 gap-2.5 flex flex-col items-center justify-center hover:scale-105 hover:bg-[#a7d87c] transition ${disabled ? "opacity-50  bg-[#A7D87C] cursor-not-allowed pointer-events-none" : "cursor-pointer"}`}>
      <div className="w-32 h-32 bg-[#D3FFA9] rounded-full flex items-center justify-center mb-3">
        
      </div>
      <h2 className="text-[48px] text-center font-semibold text-black">{title}</h2>
    </div>
    )   
}
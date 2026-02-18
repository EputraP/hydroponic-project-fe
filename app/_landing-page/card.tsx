import { CardProps } from "../types"
import { useDispatch } from "react-redux"
import { changeSwitcherVal } from "@/Redux/store/slices/landingPageSwitcherSlice";
import { useSelector } from "react-redux";
import { RootState } from "@/Redux/store";
import Link from "next/link";

export default function Card({ type, title, disabled = false}: CardProps) {

  const dispatch = useDispatch();

  const currentPage = useSelector((state: RootState) => state.landingPageSwitcher.page);

  if(type === "main"){
    return (
    <div onClick={() => dispatch(changeSwitcherVal({page: "detail", selectedPage: title}))} className={`backdrop-blur-md bg-[#88ba66] rounded-2xl p-6 gap-2.5 flex flex-col items-center justify-center hover:scale-105 hover:bg-[#a7d87c] transition ${disabled ? "opacity-50  bg-[#A7D87C] cursor-not-allowed pointer-events-none" : "cursor-pointer"}`}>
      <div className="w-32 h-32 bg-[#D3FFA9] rounded-full flex items-center justify-center mb-3">
        
      </div>
      <h2 className="text-[48px] text-center font-semibold text-black">{title}</h2>
    </div>
    )   
  }else{
    return (
      <Link href={`/${currentPage}`} className={`backdrop-blur-md overflow-hidden bg-[#88ba66] rounded-2xl  gap-2.5 flex flex-col items-center justify-center hover:scale-102 hover:bg-[#a7d87c] transition ${disabled ? "opacity-50  bg-[#A7D87C] cursor-not-allowed pointer-events-none" : "cursor-pointer"}`}>
        <div className="w-full h-8/10 flex items-center justify-center">
          <div className="w-32 h-32 bg-[#D3FFA9] rounded-full flex items-center justify-center mb-3">
        
          </div>
        </div>        
        <div className=" w-full h-2/10 flex items-center justify-center bg-white/50 ">
          <label className="text-[24px] text-center font-semibold text-black">{title}</label>
        </div>
      </Link>
    )

  }
}
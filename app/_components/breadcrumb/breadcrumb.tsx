import { useDispatch } from "react-redux";
import { changeSwitcherVal } from "@/Redux/store/slices/landingPageSwitcherSlice";

export default function  Breadcrumb({ currentPage = "undefined" }: { currentPage: string }) {

    const dispatch = useDispatch();
    return (
        <div className="w-fit flex justify-end py-4">
            <div className="relative flex gap-4 px-11 py-6 rounded-xl 
          text-black text-[24px] font-medium
          backdrop-blur-md shadow-lg border border-white/30
          bg-[#8db572]">
                <span className="font-bold cursor-pointer" onClick={() => dispatch(changeSwitcherVal({page: "main", selectedPage: ""}))}>Home</span>
                <span className="font-bold">{">"}</span>
                <span className="font-bold">{currentPage}</span>
          </div>
        </div>
    )
}
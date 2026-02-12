import { useDispatch } from "react-redux"
import { changeSwitcherVal } from "@/Redux/store/slices/landingPageSwitcherSlice";


export default function DetailLandingPage(){
    const dispatch = useDispatch();
    return (
        <>
            <div className="bg-[linear-gradient(90deg,rgba(126,211,33,0.45)_0%,rgba(76,175,80,0.85)_100%)] w-full max-h-fit py-6 flex justify-center items-center flex-col gap-2 ">
                <h1 className="text-7xl font-bold text-black">
                    IoT Hydroponic Lab
                </h1>
                <h2 className="text-3xl text-black font-medium">
                    Detailed View
                </h2>
            </div>
            <div className="py-4 w-full flex justify-center">
                <button onClick={() => dispatch(changeSwitcherVal("main"))} className="px-6 py-3 rounded-lg bg-green-600 text-white text-lg font-medium hover:bg-green-700 transition-colors">
                    Back to Main
                </button>
            </div>
        </>
    )

}
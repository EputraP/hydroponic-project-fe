"use client"

import MainLandingPage from "./main";
import DetailLandingPage from "./detail";
import { RootState } from "@/Redux/store";
import { useDispatch, useSelector } from "react-redux";


export default function LandingPageSwitcher(){
    const switcherVal = useSelector((state: RootState) => state.landingPageSwitcher.value);

    return (
        <div className="bg-[url('/landing_page.png')] bg-cover bg-center h-screen flex items-center justify-center px-10 pt-10 pb-24 flex-col">
              {switcherVal === "main" ? <MainLandingPage /> : <DetailLandingPage  />}
            </div>
    )
}
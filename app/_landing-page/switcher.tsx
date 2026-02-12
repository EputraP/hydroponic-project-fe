"use client"

import MainLandingPage from "./main";
import DetailLandingPage from "./detail";
import { useState } from "react"

export default function LandingPageSwitcher(){
    let [switcherVal, setSwitcherVal] = useState<string>("main")

    let ChangeSwitcherVal = (newVal: string) => {
        setSwitcherVal(newVal)
    }

    return (
        <div className="bg-[url('/landing_page.png')] bg-cover bg-center h-screen flex items-center justify-center px-10 pt-10 pb-24 flex-col">
              {switcherVal === "main" ? <MainLandingPage screenSwitcher={ChangeSwitcherVal} /> : <DetailLandingPage screenSwitcher={ChangeSwitcherVal} />}
            </div>
    )
}
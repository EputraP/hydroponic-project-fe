import InformationContainer from "./information-container"
import Card from "./card"
import DotPagination from "../_components/dot-pagination/dot-pagination"
import { useState } from "react";

export default function MainLandingPage(){  

    let [paginationIndex, setPaginationIndex] = useState<number>(1);
    
    return(
        <div className="w-full h-full flex flex-col">
            <InformationContainer />
     
            <div className="bg-[linear-gradient(90deg,rgba(126,211,33,1)_0%,rgba(76,175,80,1)_100%)] opacity-90 w-full max-h-fit py-6 flex justify-center items-center flex-col gap-2 ">
                <h1 className="text-7xl font-bold text-black">
                    IoT Hydroponic Lab 
                </h1>
                <h2 className="text-3xl text-black font-medium">
                    Grow Smart, Monitor Anywhere
                </h2>
            </div>

            <div className="py-4 w-full min-h-fit grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
                <Card title="Planning" disabled />
                <Card title="Growing" />
                <Card title="Harvesting" />
                <Card title="Transaction" />
                <Card title="Waste Management" />
                <Card title="Admin" />
            </div>
            <div className="w-full min-h-fit flex justify-center items-center py-6">
                <DotPagination total={3} activeIndex={paginationIndex} onDotClick={setPaginationIndex} />
            </div>
        </div>
    )
}
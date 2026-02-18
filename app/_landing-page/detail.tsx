import { useSelector } from "react-redux"
import DetailDynamicLayout from "./detail-dynamic-layout";
import InformationContainer from "./information-container"
import Breadcrumb from "../_components/breadcrumb/breadcrumb";
import { RootState } from "@/Redux/store";

export default function DetailLandingPage(){

    const currentPage = useSelector((state: RootState) => state.landingPageSwitcher.selectedPage);

    return (
        <div className="w-full h-full flex flex-col">
            <div className="flex justify-between items-center">
                <Breadcrumb currentPage={currentPage} />
                <InformationContainer />
            </div>
            <div className="w-full h-4/5">
                <DetailDynamicLayout />
            </div>
        </div>
    )

}
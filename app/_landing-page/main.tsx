import InformationContainer from "./information-container"
import Card from "./card"

export default function MainLandingPage( { screenSwitcher }: { screenSwitcher: (newVal: string) => void } ){  

    const date = new Date()
    return(
        <>
            <InformationContainer />
     
            <div className="bg-[linear-gradient(90deg,rgba(126,211,33,0.45)_0%,rgba(76,175,80,0.85)_100%)] w-full max-h-fit py-6 flex justify-center items-center flex-col gap-2 ">
                <h1 className="text-7xl font-bold text-black">
                    IoT Hydroponic Lab
                </h1>
                <h2 className="text-3xl text-black font-medium">
                    Grow Smart, Monitor Anywhere
                </h2>
            </div>

            <div className="py-4 w-full h-139.25 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                <Card title="Real-time Monitoring" disabled />
                <Card title="Automated Nutrient Delivery" />
                <Card title="Climate Control" />
                <Card title="Data Analytics" />
                <Card title="Remote Access" />
                <Card title="Customizable Alerts" />

            </div>
     
            <div className="py-4 w-full flex justify-center">
                <button onClick={() => screenSwitcher("detail")} className="px-6 py-3 rounded-lg bg-green-600 text-white text-lg font-medium hover:bg-green-700 transition-colors">
                    Test trigger
                </button>
            </div>
        </>
    )
}
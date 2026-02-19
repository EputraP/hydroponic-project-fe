import Sidebar from "../_components/sidebar/sidebar"

export default function DashboardLayout({
    children,
}: {    children: React.ReactNode }) {
    return (
        <div className="w-screen h-screen flex bg-white">       
            <div className="w-39.5 h-full rounded-tr-[25px] rounded-br-[25px] overflow-hidden">
                <Sidebar/>
            </div>  
            <div className="w-[calc(100%-158px)] h-full">
                {children}
            </div>
        </div>
    )
}
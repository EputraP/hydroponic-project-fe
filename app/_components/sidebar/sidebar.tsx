import Link from "next/link"

export default function Sidebar() {
    return (
        <div className="w-full h-full bg-[#88ba66] flex flex-col items-center py-5 justify-between">
            <div className="flex flex-col items-center">
                 <Link href="/" className="w-28 h-28 bg-red-300 rounded-full flex items-center justify-center mb-3"/>
            </div>
            <div>
                <Link href="/" className="w-28 h-28 bg-red-300 rounded-full flex items-center justify-center mb-3"/>
            </div>
           
        </div>   
    )
}
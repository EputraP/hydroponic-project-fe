import Link from "next/link"
import Image from "next/image"

export default function Sidebar() {
    return (
        <div className="w-full h-full bg-[#88ba66] flex flex-col items-center py-5 justify-between">
            <div className="flex flex-col items-center">
                 <Link href="/" className="w-28 h-28 relative block mb-3 rounded-full overflow-hidden">
                    <Image
                        src="/iot-hydroponic-lab-logo.png"
                        alt="IoT Hydroponic Lab Logo"
                        fill
                        unoptimized
                        className="object-cover"
                    />
                </Link>
            </div>
            <div>
                <Link href="/" className="w-28 h-28 bg-red-300 rounded-full flex items-center justify-center mb-3"/>
            </div>
           
        </div>   
    )
}
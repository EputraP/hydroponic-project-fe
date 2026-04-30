import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Admin Page",
};

export default function AdminPage() {
    return (
        <div className="relative w-full h-screen">
            {/* <Link href="/" className=" relative block mb-3"> */}
                    <Image
                        src="/landing_page.png"
                        alt="IoT Hydroponic Lab Logo"
                        fill
                        unoptimized
                        className="object-cover"
                    />
                {/* </Link> */}
        </div>
    );

}
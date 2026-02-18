"use client";

import { useEffect, useState } from "react";

export default function InformationContainer() {
  const [date, setDate] = useState<Date | null>(null); 

  useEffect(() => {
    function updateTime() {
      setDate(new Date());
    }

    updateTime(); 

    const interval = setInterval(updateTime, 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  if (!date) return null; 

  return (
    <div className="w-fit flex justify-end py-4">
      <div className="relative flex gap-14 px-11 py-6 rounded-xl 
          text-black text-[24px] font-medium
          backdrop-blur-md shadow-lg border border-white/30
          bg-[#8db572]">

        <span className="whitespace-nowrap">
          {date.toLocaleString("id-ID", {
            day: "2-digit",
            month: "short",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          })}
        </span>

        <span className="whitespace-nowrap">Admin</span>
        <span className="whitespace-nowrap">Logout</span>
      </div>
    </div>
  );
}

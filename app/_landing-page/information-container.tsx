"use client";

import { useEffect, useState } from "react";

export default function InformationContainer() {
  const [date, setDate] = useState<Date | null>(null); // ✅ important

  useEffect(() => {
    function updateTime() {
      setDate(new Date());
    }

    updateTime(); // run once on client

    const interval = setInterval(updateTime, 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  if (!date) return null; // ✅ prevent hydration mismatch

  return (
    <div className="w-full flex justify-end py-4">
      <div className="relative flex gap-14 px-11 py-8 rounded-xl 
          text-black text-[24px] font-medium
          backdrop-blur-md shadow-lg border border-white/30
          bg-[#8db572]">

        <span>
          {date.toLocaleString("id-ID", {
            day: "2-digit",
            month: "short",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          })}
        </span>

        <span>Admin</span>
        <span>Logout</span>
      </div>
    </div>
  );
}

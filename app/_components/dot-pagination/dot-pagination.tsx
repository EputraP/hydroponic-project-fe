"use client";
import { useState } from "react";

type DotPaginationProps = {
  total?: number;
  activeIndex?: number;
  onDotClick?: (index: number) => void;
};

export default function DotPagination({ total = 1, activeIndex = 1, onDotClick }: DotPaginationProps) {

  let setPaginationIndex = (index: number) => {
    if(index > total) index = 1;
    else if(index < 1) index = total; 
    onDotClick?.(index);
  }

  return (
    <div className="flex gap-3 items-center">
      {Array.from({ length: total }).map((_, index) => {
        index = index + 1;

        return (
        <button
          key={index}
          onClick={() => setPaginationIndex(index)}
          className={`w-4 h-4 rounded-full transition-all duration-200 ${
            activeIndex === index
              ? "bg-black scale-110"
              : "bg-gray-300 hover:bg-gray-400 cursor-pointer"
          }`}
        />
      )})}
    </div>
  );
}

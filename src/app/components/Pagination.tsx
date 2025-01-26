"use client";
import React from "react";

interface PaginationProps {
  total: number;
  currentIndex: number;
  onPageChange: (index: number) => void;
}

export default function Pagination({
  total,
  currentIndex,
  onPageChange,
}: PaginationProps) {
  const pagesArray = Array.from({ length: total }, (_, i) => i);

  return (
    <div className="flex items-center gap-2">
      {pagesArray.map((page) => {
        // Текущая активная страница
        if (page === currentIndex) {
          return (
            <div
              key={page}
              onClick={() => onPageChange(page)}
              className="
                relative 
                w-[40px] h-[8px] 
                rounded-full 
                bg-gray-300
                cursor-pointer
                mb-[24px]
              "
            >
              <div
                className="
                  absolute 
                  left-0 
                  top-0 
                  w-[20px] 
                  h-[8px] 
                  bg-black 
                  rounded-full
                "
              />
            </div>
          );
        }
        // Неактивные
        return (
          <div
            key={page}
            onClick={() => onPageChange(page)}
            className="
              w-[8px] 
              h-[8px]
              rounded-full 
              bg-gray-300 
              cursor-pointer
              mb-[24px]
            "
          />
        );
      })}
    </div>
  );
}

"use client";

import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        toggleButtonRef.current &&
        (menuRef.current.contains(event.target as Node) ||
          toggleButtonRef.current.contains(event.target as Node))
      ) {
        return;
      }
      setIsOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="px-[16px] grid grid-cols-[1fr_2fr_1fr] items-center h-[60px] border-b border-[#E1E1E1]">
      {/* Лого */}
      <div className="flex items-center justify-start gap-[16px]">
        <Image
          src="/images/logo.svg"
          alt="Логотип компании"
          width={40}
          height={40}
          className="object-contain"
        />
        <span className=" uppercase font-pp text-[16px] tracking-[0.02em] leading-[24px] font-normal">
          STEMPS
        </span>
      </div>

      {/* Десктопное меню */}
      <nav className="invisible lg:visible lg:flex gap-[24px] lg:justify-start">
        <Link href="/about">О школе</Link>
        <Link href="/courses">Курсы</Link>
        <Link href="/library">Библиотека</Link>
      </nav>

      {/* Кнопка Войти или Меню */}
      <div className="flex justify-end">
        <button
          ref={toggleButtonRef}
          onClick={toggleMenu}
          type="button"
          className="bg-black text-white font-pp lg:hidden w-14 h-7 rounded"
        >
          Меню
        </button>
        <Link href="/login" className="hidden gap-2 lg:flex">
          Войти
          <Image
            src="/images/login.svg"
            alt="Login"
            width={25}
            height={25}
            className="object-contain"
          />
        </Link>
      </div>

      {/* Выпадашка */}
      {isOpen && (
        <div
          ref={menuRef}
          className="
            absolute top-[60px] right-0 w-[160px]
            bg-white border border-[#E1E1E1]
            flex flex-col items-start p-2
            lg:hidden
            z-50
          "
        >
          <Link
            href="/about"
            className="block w-full px-2 py-1 hover:bg-gray-100"
          >
            О школе
          </Link>
          <Link
            href="/courses"
            className="block w-full px-2 py-1 hover:bg-gray-100"
          >
            Курсы
          </Link>
          <Link
            href="/library"
            className="block w-full px-2 py-1 hover:bg-gray-100"
          >
            Библиотека
          </Link>
          <hr className="w-full my-1 border-[#E1E1E1]" />
          <Link
            href="/login"
            className="flex flex-row items-center w-full gap-2 px-2 py-1 text-left hover:bg-gray-100"
          >
            Войти
            <Image
              src="/images/login.svg"
              alt="Вход в аккаунт"
              width={20}
              height={20}
              className="object-contain"
            />
          </Link>
        </div>
      )}
    </header>
  );
}

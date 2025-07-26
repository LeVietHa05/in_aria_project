"use client";

import { Firlest } from "../fonts/fonts";
import Image from "next/image";

export default function Header() {
  const handleScrollToForm = () => {
    const formElement = document.getElementById("register-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between  px-4 py-2 shadow-md bg-[#490707]">
      <div className="max-w-7xl mx-auto flex items-center justify-between w-full">
        <h1 className={`${Firlest.className} text-2xl flex items-center gap-4 `}>
          Aria project
          <Image src={"/logo.png"} width={40} height={40} alt="logo"></Image>
        </h1>
        <div
          onClick={handleScrollToForm}
          className="p-2 px-8 border-1 rounded-2xl hover:bg-white hover:text-red-700 cursor-pointer"
        >
          Đăng ký ngay
        </div>
      </div>
    </div>
  );
}

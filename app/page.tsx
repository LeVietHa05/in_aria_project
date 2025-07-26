"use client";

import Header from "./compoment/header";
import Banner from "./compoment/banner";
import Donation from "./compoment/donation";
import Carousel from "./compoment/carousel";
import Form from "./compoment/form";
import Link from "next/link";

import { Firlest, Opaline, Vogue } from "./fonts/fonts";

export default function Home() {
  return (
    <div className={`text-[#FFD48B] min-h-screen bg-[#490707]`}>
      <Header />
      {/* banner */}
      <Banner />

      {/* Carousel */}
      <Carousel />

      {/* FORM */}
      <Form />

      {/* QUYEN GOP */}
      <Donation />

      {/* FOOTER */}
      <footer className="p-10 max-w-5xl mx-auto ">
        <div className={`${Firlest.className} text-center text-3xl mb-4`}>
          Thông tin liên hệ
        </div>
        {/* Nội dung chia 3 cột */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* Truyền thông */}
          <div>
            <h3 className="font-semibold text-lg">Phan Hải Phong</h3>
            <p className="text-sm mb-2 text-yellow-300 italic">
              (Ban truyền thông)
            </p>
            <div className="flex items-center justify-center gap-2">
              <span>📞</span>
              <span className="font-semibold text-yellow-100">
                0356 113 090
              </span>
            </div>
          </div>

          {/* Tài chính */}
          <div>
            <h3 className="font-semibold text-lg">Nguyễn Vũ Linh Chi</h3>
            <p className="text-sm mb-2 text-yellow-300 italic">
              (Ban tài chính)
            </p>
            <div className="flex items-center justify-center gap-2">
              <span>📞</span>
              <span className="font-semibold text-yellow-100">
                0337 395 308
              </span>
            </div>
          </div>

          {/* Fanpage */}
          <div>
            <h3 className="font-semibold text-lg">Fanpage</h3>
            <div className="flex items-center justify-center gap-2 mt-2">
              <span>📘</span>
              <Link
                href="https://www.facebook.com/profile.php?id=61578245217922"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-yellow-100 hover:underline"
              >
                Aria Project
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

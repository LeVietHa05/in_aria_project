"use client";

import Header from "./compoment/header";
import Banner from "./compoment/banner";
import Image from "next/image";
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
      <section className="relative bg-[#9e3d27] p-10 pt-16 shadow-2xl text-center">
        <h2
          className={`absolute top-10 left-1/2 -translate-x-1/2 border-b-2 border-[#C58465] rounded-lg pb-4 px-12 text-5xl  font-bold font-serif mb-4 bg-[#9e3d27] ${Firlest.className}`}
        >
          QUYÊN GÓP TỪ THIỆN
        </h2>
        <div className="max-w-5xl mx-auto text-center  border-2 rounded-2xl border-[#C58465] py-10 px-16">
          <p className="mb-8 text-lg text-[#F2E4C2]">
            Toàn bộ số tiền quyên góp sẽ được Aria Project gửi đến quỹ Hope
            Foundation để hỗ trợ các hoàn cảnh khó khăn và góp phần lan tỏa
            những giá trị tốt đẹp.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <Image
              src="/images/qr.png" // đổi thành đường dẫn đúng với ảnh QR bạn dùng
              alt="Mã QR quyên góp"
              className="w-64 h-64 object-contain border-4 border-white rounded-md"
              width={256}
              height={256}
            />

            <div className="text-center ">
              <p className="mb-2">
                <span className="">Tài Khoản</span>
                <br />
                <strong className="text-xl ">VIETCOMBANK</strong>
                <br />
                <strong className="text-2xl ">NGUYỄN VŨ LINH CHI</strong>
              </p>

              <div className="border-t my-4"></div>

              <p className="text-sm">
                <strong>Nội dung chuyển khoản:</strong>
                <br />
                Tên người quyên góp + Aria Project
              </p>

              <div className="border-t border-yellow-400 my-4"></div>

              <p className="italic text-sm">
                Cảm ơn bạn đã đồng hành cùng Aria Project
              </p>
            </div>
          </div>
        </div>
      </section>

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

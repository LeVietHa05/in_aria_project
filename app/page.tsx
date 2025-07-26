"use client";

import Header from "./compoment/header";
import Banner from "./compoment/banner";
import Image from "next/image";
import { Firlest, Opaline, Vogue } from "./fonts/fonts";
import Carousel from "./compoment/carousel";
import { useState, useEffect } from "react";
import Link from "next/link";



export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    numOfPeople: "",
  });
  const [loading, setLoading] = useState(false);
  const [errorLog, setErrorLog] = useState("");

  useEffect(() => {
    if (errorLog) {
    }
  }, [errorLog]);



  const url =
    "https://script.google.com/macros/s/AKfycbxFGR06ssjuc6mQK97jpyaGkKxt70Nh62Fi_aDH_ZqBbv61AV01XNdPdn4E-r_j1qqV/exec";

  const handleSubmit = async (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setLoading(true);
    if (errorLog) {
      return;
    }

    if (
      !formData.name ||
      !formData.phone ||
      !formData.email ||
      !formData.numOfPeople
    ) {
      setErrorLog("Vui lòng điền đầy đủ thông tin");
      return;
    }
    console.log("submit: ");
    console.log(
      formData.name,
      formData.phone,
      formData.email,
      formData.numOfPeople
    );

    await fetch(url, {
      method: "POST",
      body: JSON.stringify(formData),
    });
    setLoading(false);
    alert("Đăng ký thành công! Chúng tôi sẽ liên hệ với bạn sớm nhất có thể.");
    setFormData({ name: "", phone: "", email: "", numOfPeople: "" });
  };

  return (
    <div className={`text-[#FFD48B] min-h-screen bg-[#490707]`}>
      <Header />
      {/* banner */}
      <Banner />

      {/* Carousel */}
      <Carousel/>

      {/* FORM */}
      <section
        id="register-form"
        className=" mt-10 p-16 scroll-mt-12 bg-gradient-to-b from-[#BA3B19] to-[#570D09]"
      >
        <div className=" max-w-5xl mx-auto">
          <h2 className={`text-7xl font-bold ${Firlest.className} text-center`}>
            Đăng ký tham dự miễn phí
          </h2>
          <form className="flex flex-col gap-4 mt-8">
            {/* TEN */}
            <div className="flex items-center rounded-full bg-[#FFF9D7] overflow-hidden w-full p-4">
              <span
                className={`text-[#87200B] text-2xl px-6 whitespace-nowrap font-bold uppercase  ${Vogue.className}`}
              >
                HỌ TÊN:
              </span>
              <input
                className={`flex-1 h-full bg-transparent outline-none font-bold uppercase text-[#87200B] ${Vogue.className} text-2xl`}
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>
            {/* PHONE */}
            <div className="flex items-center rounded-full bg-[#FFF9D7] overflow-hidden w-full p-4">
              <span
                className={`text-[#87200B] text-2xl px-6 whitespace-nowrap font-bold uppercase  ${Vogue.className}`}
              >
                Số Điện Thoại:
              </span>
              <input
                className={`flex-1 h-full bg-transparent outline-none font-bold uppercase text-[#87200B] ${Vogue.className} text-2xl`}
                type="text"
                value={formData.phone}
                onChange={(e) => {
                  //check if input is number and is 10 digits
                  if (!/^\d*$/.test(e.target.value)) {
                    setErrorLog("Số điện thoại phải là số");
                  } else if (e.target.value.length === 10) {
                    setErrorLog("Số điện thoại phải là 10 chữ số");
                  } else {
                    setErrorLog("");
                  } //end check
                  setFormData({ ...formData, phone: e.target.value });
                }}
              />
            </div>
            {/* EMAIL */}
            <div className="flex items-center rounded-full bg-[#FFF9D7] overflow-hidden w-full p-4">
              <span
                className={`text-[#87200B] text-2xl px-6 whitespace-nowrap font-bold uppercase  ${Vogue.className}`}
              >
                Email:
              </span>
              <input
                className={`flex-1 h-full bg-transparent outline-none font-bold uppercase text-[#87200B] ${Vogue.className} text-2xl`}
                type="text"
                value={formData.email}
                onChange={(e) => {
                  //check if input is email format
                  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                  if (!emailPattern.test(e.target.value)) {
                    setErrorLog("Email không hợp lệ");
                  } else {
                    setErrorLog("");
                  }
                  //end check
                  setFormData({ ...formData, email: e.target.value });
                }}
              />
            </div>
            {/* SO NGUOI DI CUNG */}
            <div className="flex items-center rounded-full bg-[#FFF9D7] overflow-hidden w-full p-4">
              <span
                className={`text-[#87200B] text-2xl px-6 whitespace-nowrap font-bold uppercase  ${Vogue.className}`}
              >
                Số Người đi cùng:
              </span>
              <input
                className={`flex-1 h-full bg-transparent outline-none font-bold uppercase text-[#87200B] ${Vogue.className} text-2xl`}
                type="text"
                value={formData.numOfPeople}
                onChange={(e) => {
                  //check if input is number
                  if (!/^\d*$/.test(e.target.value))
                    setErrorLog("Số người phải là số");
                  //show small suggestion popup under input

                  setFormData({ ...formData, numOfPeople: e.target.value });
                }}
              />
            </div>
            {/* ERROR LOG */}
            {errorLog && (
              <div className={` text-sm mt-2 text-center ${Opaline.className}`}>
                {errorLog}
              </div>
            )}
            {/* SUBMIT BUTTON */}
            <div
              onClick={handleSubmit}
              className={`rounded-full bg-[#FFF9D7]  w-full max-w-96 mx-auto p-4 text-center font-bold text-[#87200B] text-2xl ${Vogue.className}`}
            >
              {loading ? <span> Dang gui</span> : <span>Submit</span>}
            </div>
          </form>
        </div>
        <div className="text-center mt-8 text-xl max-w-3xl mx-auto">
          Aria Project là dự án âm nhạc được thành lập bởi các bạn học sinh cấp
          3 tại Hà Nội, nhằm gây quỹ từ thiện và lan tỏa các giá trị văn hóa -
          nghệ thuật.
        </div>
      </section>

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

"use client";

import Header from "./compoment/header";
import Image from "next/image";
import { Firlest, Opaline, Vogue } from "./fonts/fonts";

import { useKeenSlider } from "keen-slider/react";
import { useState } from "react";

const sliderImgs = [
  "/images/img0.png",
  "/images/img1.png",
  "/images/img2.png",
  "/images/img3.png",
  "/images/img4.png",
  "/images/img5.png",
  "/images/img6.png",
  "/images/img7.png",
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    slides: {
      perView: 3,
      spacing: 15,
      origin: "center",
    },
  });

  return (
    <div className={`text-[#FFD48B] min-h-screen bg-[#490707]`}>
      <Header />
      {/* banner */}

      <section className="mt-[52px] relative min-h-screen w-full text-center bg-[#490707]">
        {/* Phông nền sân khấu */}
        <Image
          src="/bg1.png" // hoặc "/images/banner.png" nếu bạn đặt trong public/images
          alt="Banner Thanh Sắc Việt"
          quality={100}
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        />

        {/* Nội dung banner*/}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <div className=" p-4 rounded">
            <div className="flex items-center justify-center gap-4 my-4 mx-16">
              <div className="flex-[0.5] h-px  bg-[#ECC985]" />
              <span
                className={`text-[#ECC985] font-bold text-xl tracking-widest mb-6 ${Vogue.className}`}
              >
                BUỔI HÒA NHẠC
              </span>
              <div className="flex-[0.5] h-px bg-[#ECC985]" />
            </div>
            <h1
              className={`text-6xl md:text-7xl  text-[#F6ECC9] my-4 ${Firlest.className}`}
            >
              THANH SẮC VIỆT
            </h1>
            <p
              className={`text-[#F6ECC9] text-3xl text-white mb-4 ${Opaline.className}`}
            >
              Giao hưởng năm châu
            </p>
            <hr />
            <p className={`text-[#ECC985] text-xl my-2 ${Vogue.className}`}>
              MỘT SỰ KIỆN CỦA ARIA PROJECT – NƠI ÂM NHẠC, ĐAM MÊ VÀ SỨ MỆNH HỘI
              TỤ
            </p>
            <div className="w-1/2 mx-auto">
              <hr />
            </div>

            <div className={`w-2/3 mx-auto`}>
              <p className="text-md mt-4">
                <span className="font-bold text-yellow-300">Địa điểm:</span> Nhà
                hát Trường Cao đẳng Nghệ thuật Hà Nội, số 7 Hai Bà Trưng, Phường
                Cửa Nam, TP. Hà Nội
              </p>
              <p className="text-sm">
                <span className="font-bold text-yellow-300">Thời gian:</span>{" "}
                19:00 - 21:00, Thứ 7, ngày 9/8/2025
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Carousel */}
      <section className=" px-4 relative">
        {/* Overlay phía trên */}
        <div className="h-3 bg-gradient-to-b from-[#490707] to-transparent z-10" />
        <div className="relative max-w-5xl mt-5 mx-auto rounded-xl border border-yellow-500 p-4 pt-12">
          {/* Slider */}
          <div ref={sliderRef} className="keen-slider">
            {sliderImgs.map((e, idx) => (
              <div
                key={idx}
                className={`keen-slider__slide flex justify-center items-center transition-all duration-300`}
              >
                <Image
                  src={`${e}`}
                  alt={`Slide ${idx}`}
                  className="rounded-md w-auto max-h-[350px] object-cover"
                  width={300}
                  height={200}
                />
              </div>
            ))}
          </div>

          {/* Nút điều hướng trái */}
          <button
            onClick={() => instanceRef.current?.prev()}
            className="absolute left-2 top-1/2 -translate-y-1/2 text-yellow-300 text-3xl z-20"
          >
            ❮
          </button>

          {/* Nút điều hướng phải */}
          <button
            onClick={() => instanceRef.current?.next()}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-yellow-300 text-3xl"
          >
            ❯
          </button>

          {/* Dấu chấm chuyển slide */}
          {loaded && instanceRef.current && (
            <div className="flex justify-center mt-6 gap-2">
              {[
                ...Array(
                  instanceRef.current.track.details.slides.length
                ).keys(),
              ].map((idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    instanceRef.current?.moveToIdx(idx);
                  }}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentSlide === idx
                      ? "bg-yellow-400 scale-110"
                      : "bg-yellow-200 opacity-50 hover:opacity-100"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
        {/* Overlay phía dưới */}
        <div className=" h-3 bg-gradient-to-t from-[#490707] to-transparent z-10" />
      </section>

      <div id="register-form" className="mt-10 scroll-mt-28">
        <h2 className="text-xl font-bold">Đăng ký tham gia</h2>
        <form>{/* ... */}</form>
      </div>
    </div>
  );
}

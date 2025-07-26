import { Firlest, Opaline, Vogue } from "../fonts/fonts";
import Image from "next/image";

export default function Banner() {
  return (
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
        <div className=" p-4 rounded ">
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
            className={`text-6xl md:text-7xl  text-[#F6ECC9] my-4 ${Firlest.className} tracking-widest`}
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
            MỘT SỰ KIỆN CỦA ARIA PROJECT – NƠI ÂM NHẠC, ĐAM MÊ VÀ SỨ MỆNH HỘI TỤ
          </p>
          <div className="w-1/2 mx-auto">
            <hr />
          </div>

          <div className={`w-1/2 xl:w-1/3 mx-auto absolute bottom-16 xl:bottom-32 left-1/2 -translate-x-1/2`}>
            <p className="text-md mt-4 text-[#F7EDCA] mb-4">
              <span className="font-bold text-[#FFD783]">Địa điểm:</span> Nhà
              hát Trường Cao đẳng Nghệ thuật Hà Nội, số 7 Hai Bà Trưng, Phường
              Cửa Nam, TP. Hà Nội
            </p>
            <p className="text-md text-[#F7EDCA]">
              <span className="font-bold text-[#FFD783]">Thời gian:</span> 19:00
              - 21:00, Thứ 7, ngày 9/8/2025
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

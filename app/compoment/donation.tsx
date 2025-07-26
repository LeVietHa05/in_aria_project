import Image from "next/image";
import Link from "next/link";
import { Firlest } from "../fonts/fonts";

export default function Donation() {
  return (
    <section className="relative bg-[#9e3d27] p-10 pt-16 shadow-2xl text-center">
      <h2
        className={`absolute top-10 left-1/2 -translate-x-1/2 border-b-2 border-[#C58465] rounded-lg pb-4 px-12 text-5xl tracking-widest font-serif mb-4 bg-[#9e3d27] ${Firlest.className}`}
      >
        QUYÊN GÓP TỪ THIỆN
      </h2>
      <div className="max-w-5xl mx-auto text-center  border-2 rounded-2xl border-[#C58465] py-10 px-16">
        <p className="mb-8 text-lg text-[#F2E4C2]">
          Toàn bộ số tiền quyên góp sẽ được Aria Project gửi đến quỹ{" "}
          <Link href={"https://cpfav.org.vn/"} className="cursor-pointer hover:underline hover:text-white">
            Hội gia đình trẻ em và người bại não Việt Nam
          </Link>{" "}
          để hỗ trợ các hoàn cảnh khó khăn và góp phần lan tỏa những giá trị tốt
          đẹp.
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

            <p className="text-">
              <strong>Nội dung chuyển khoản:</strong>
              <br />
              Tên người quyên góp + Số điện thoại 
            </p>

            <div className="border-t  my-4"></div>

            <p className="italic text-sm">
              Cảm ơn bạn đã đồng hành cùng Aria Project!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

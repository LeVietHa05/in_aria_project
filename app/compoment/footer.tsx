import Link from "next/link";
import Image from "next/image";
import { Firlest } from "../fonts/fonts";
export default function Footer() {
  return (
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
            <Image src={"/call.svg"} width={24} height={24} alt="call"></Image>
            <span className="font-semibold text-yellow-100">0356 113 090</span>
          </div>
        </div>

        {/* Tài chính */}
        <div>
          <h3 className="font-semibold text-lg">Nguyễn Vũ Linh Chi</h3>
          <p className="text-sm mb-2 text-yellow-300 italic">(Ban tài chính)</p>
          <div className="flex items-center justify-center gap-2">
            <Image src={"/call.svg"} width={24} height={24} alt="call"></Image>
            <span className="font-semibold text-yellow-100">0337 395 308</span>
          </div>
        </div>

        {/* Fanpage */}
        <div>
          <h3 className="font-semibold text-lg">Facebook</h3>
          <p className="text-sm mb-2 text-yellow-300 italic">(Fanpage)</p>
          <div className="flex items-center justify-center gap-2 mt-2">
            <Image src={"/fb-icon.svg"} width={24} height={24} alt="fb"></Image>
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
  );
}

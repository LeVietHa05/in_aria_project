import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import "keen-slider/keen-slider.min.css";

const geistSans = Montserrat({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aria Project THANH SẮC VIỆT",
  description:
    "THANH SẮC VIỆT - Buổi hòa nhạc Giao hưởng năm châu - MỘT SỰ KIỆN CỦA ARIA PROJECT – NƠI ÂM NHẠC, ĐAM MÊ VÀ SỨ MỆNH HỘI TỤ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased min-h-screen`}>
        {children}
      </body>
    </html>
  );
}

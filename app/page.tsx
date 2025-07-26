"use client";

import Header from "./compoment/header";
import Banner from "./compoment/banner";
import Donation from "./compoment/donation";
import Carousel from "./compoment/carousel";
import Form from "./compoment/form";
import Footer from "./compoment/footer";

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
      <Footer />
    </div>
  );
}

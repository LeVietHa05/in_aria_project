import Image from "next/image";
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
  "/images/img8.png",
  "/images/img9.png",
  "/images/img10.png",
  "/images/img11.png",
];

export default function Carousel() {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    slides: {
      perView: 1,
      spacing: 15,
      origin: "center",
    },
    breakpoints: {
      "(min-width: 768px)": {
        // Options for screens 768px and wider
        slides: {
          perView: 2,
          spacing: 15,
        },
      },
      "(min-width: 1024px)": {
        // Options for screens 1024px and wider
        slides: {
          perView: 3,
          spacing: 25,
        },
      },
    },
  });
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  return (
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
              ...Array(instanceRef.current.track.details.slides.length).keys(),
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
  );
}

import { useState, useEffect } from "react";
import { Firlest, Opaline, Vogue } from "../fonts/fonts";

export default function Form() {
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
    <section
      id="register-form"
      className=" mt-10 p-16 scroll-mt-12 bg-gradient-to-b from-[#BA3B19] to-[#570D09]"
    >
      <div className=" max-w-5xl mx-auto">
        <h2
          className={`text-7xl  ${Firlest.className} text-center tracking-wider`}
        >
          Đăng ký tham dự miễn phí
        </h2>
        <form className="flex flex-col gap-4 mt-8">
          {/* TEN */}
          <div className="flex items-center rounded-full bg-[#FFF9D7]  w-full ">
            {/* <span
              className={`text-[#87200B] text-2xl px-6 whitespace-nowrap font-bold uppercase  ${Vogue.className}`}
            >
              HỌ TÊN:
            </span> */}
            <input
              className={`flex-1 h-full bg-transparent outline-none font-bold capitalize text-[#87200B] ${Vogue.className} text-2xl p-4 leading-relaxed`}
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              placeholder="Họ Tên: "
            />
          </div>
          {/* PHONE */}
          <div className="flex items-center rounded-full bg-[#FFF9D7] overflow-hidden w-full ">
            {/* <span
              className={`text-[#87200B] text-2xl px-6 whitespace-nowrap font-bold uppercase  ${Vogue.className}`}
            >
              Số Điện Thoại:
            </span> */}
            <input
              className={`flex-1 h-full bg-transparent outline-none font-bold capitalize text-[#87200B] ${Vogue.className} text-2xl p-4 leading-relaxed`}
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
              placeholder="Số Điện Thoại:"
            />
          </div>
          {/* EMAIL */}
          <div className="flex items-center rounded-full bg-[#FFF9D7] overflow-hidden w-full ">
            {/* <span
              className={`text-[#87200B] text-2xl px-6 whitespace-nowrap font-bold uppercase  ${Vogue.className}`}
            >
              Email:
            </span> */}
            <input
              className={`flex-1 h-full bg-transparent outline-none font-bold capitalize text-[#87200B] ${Vogue.className} text-2xl p-4 leading-relaxed`}
              type="text"
              value={formData.email}
              placeholder="Email: "
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
          <div className="flex items-center rounded-full bg-[#FFF9D7] overflow-hidden w-full ">
            {/* <span
              className={`text-[#87200B] text-2xl px-6 whitespace-nowrap font-bold uppercase  ${Vogue.className}`}
            >
              Số Người đi cùng:
            </span> */}
            <input
              className={`flex-1 h-full bg-transparent outline-none font-bold capitalize text-[#87200B] ${Vogue.className} text-2xl p-4 leading-relaxed`}
              value={formData.numOfPeople}
              placeholder="Số Người đi cùng: "
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
            {loading ? <span>Đang gửi </span> : <span>Submit</span>}
          </div>
        </form>
      </div>
      <div className="text-center mt-8 text-xl max-w-3xl mx-auto">
        Aria Project là dự án âm nhạc được thành lập bởi các bạn học sinh cấp 3
        tại Hà Nội, nhằm gây quỹ từ thiện và lan tỏa các giá trị văn hóa - nghệ
        thuật.
      </div>
    </section>
  );
}

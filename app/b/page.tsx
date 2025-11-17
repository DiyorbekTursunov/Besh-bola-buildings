"use client";

import Image from "next/image";
import arrowImage from "../../public/b/arrow-hero.png";
import { HouseBlockSecont, secoundHouses } from "../components/home-card-2";

const page = () => {
  return (
    <>
      <header>
        <div className="container flex justify-between items-center">
          <Image src={"/logo.png"} alt="Logo" width={52} height={56} />

          <p className="leading-4 uppercase font-[750] text-[14px] font-[HelveticaNeueLTStd]">
            Besh bola <br /> <span className="text-[#E84B0F]">buildings</span>
          </p>
        </div>
      </header>

      <section className="flex flex-col justify-center mb-5">
        <div className="container">
          <div className="flex justify-between">
            <h1 className="font-[750] leading-[130%] font-[HelveticaNeueLTStd] text-[clamp(20px,7vw,34px)] uppercase">
              <span className="text-[#F18107] px-1">Aksiyadagi</span> <br />
              xonadonlar <br />
              bilan tanishing
            </h1>

            <Image className="[@media(max-width:400px)]:h-[90px]" src={arrowImage} alt="arrow" />
          </div>
        </div>
      </section>

      <section className="">
        <div className="">
          {secoundHouses.map((house) => (
            <HouseBlockSecont key={house.id} {...house} />
          ))}
        </div>
      </section>

      <section className="py-10 bg-[#FDFDFD]">
        <div className="max-w-[374px] mx-auto px-4 text-center font-[HelveticaNeueLTStd]">
          {/* Title */}
          <h2 className="font-[750] font-[HelveticaNeueLTStd] tracking-[0.04em] text-[clamp(20px,6vw,24px)] leading-[1.1] mb-2">
            ARIZA YUBORISH
          </h2>

          {/* Subtitle */}
          <p className="text-[clamp(9px,2.6vw,11px)] leading-[1.4] mb-6 font-[HelveticaNeueLTStd]">
            Aksiya borasida operatorlarimiz bilan <br />
            bog’lanish uchun ma’lumotlaringizni yuboring:
          </p>

          {/* Card */}
          <form className="bg-[#F3F3F3] border border-[#999999] rounded-3xl px-5 py-[22px] text-left shadow-[0_4px_0_0_rgba(0,0,0,0.12)] font-[Poppins]">
            {/* Name */}
            <label className="block mb-3.5">
              <span className="block text-[14px] mb-1.5">
                Ismingizni kiriting:
              </span>
              <input
                type="text"
                placeholder="Ismingiz"
                className="w-full h-12 rounded-[10px] border border-[#D3D3D3] bg-white px-4 text-[14px] placeholder:text-[#B4B4B4] outline-none focus:border-[#FF8500]"
              />
            </label>

            {/* Phone */}
            <label className="block mb-5">
              <span className="block text-[14px] mb-1.5">
                Telefon raqamingiz:
              </span>

              <div className="flex gap-1.5">
                {/* Country code SELECT */}
                <div className="relative w-[88px]">
                  <select
                    name="countryCode"
                    defaultValue="+998"
                    className="w-full h-12 rounded-[10px] bg-[#A6A6A6] text-white
                   px-3 pr-8 text-[14px] outline-none cursor-pointer
                   appearance-none" // <–– hides default arrow in modern browsers
                  >
                    <option value="+998">+998</option>
                    <option value="+7">+7</option>
                    <option value="+1">+1</option>
                    <option value="+996">+996</option>
                    <option value="+992">+992</option>
                  </select>

                  {/* Custom arrow icon */}
                  <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3 4.5L6 7.5L9 4.5"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>

                {/* Phone input */}
                <input
                  type="tel"
                  name="phone"
                  placeholder="88 888 88 88"
                  className="flex-1 h-12 rounded-[10px] border border-[#D3D3D3] bg-white px-4
                 text-[14px] placeholder:text-[#B4B4B4] outline-none focus:border-[#FF8500] w-full"
                />
              </div>
            </label>

            {/* Submit button */}
            <button
              type="submit"
              className="w-full h-[54px] rounded-[999px] bg-[#FF8500] text-white font-[750] text-[clamp(15px,4vw,18px)] shadow-[0_6px_0_0_#C26500] flex items-center justify-center mt-2"
            >
              Ma’lumotlarni yuborish
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default page;

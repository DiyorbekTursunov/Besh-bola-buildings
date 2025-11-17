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

          <p className="leading-[20px] uppercase font-[750] text-[18px] font-[HelveticaNeue]">
            Besh bola <br /> <span className="text-[#E84B0F]">buildings</span>
          </p>
        </div>
      </header>

      <section className="flex flex-col justify-center mb-[20px]">
        <div className="container">
          <div className="flex justify-between">
            <h1 className="font-[750] leading-[130%] font-[HelveticaNeue] text-[clamp(24px,8vw,40px)] uppercase">
              <span className="text-[#F18107] px-1">Aksiyadagi</span> <br />
              xonadonlar <br />
              bilan tanishing
            </h1>

            <Image src={arrowImage} alt="arrow" />
          </div>
        </div>
      </section>

      <section className="bg-[#ECECEC] pt-[18px] pb-[40px]">
        <div className="max-w-[374px] px-4 mx-auto space-y-10">
          {secoundHouses.map((house) => (
            <HouseBlockSecont key={house.id} {...house} />
          ))}
        </div>
      </section>

      <section className="py-[40px] bg-[#FDFDFD]">
        <div className="max-w-[374px] mx-auto px-4 text-center font-[HelveticaNeue]">
          {/* Title */}
          <h2 className="font-[750] tracking-[0.04em] text-[clamp(22px,6vw,32px)] leading-[1.1] mb-[8px]">
            ARIZA YUBORISH
          </h2>

          {/* Subtitle */}
          <p className="text-[clamp(11px, 2.6vw, 16px)] leading-[1.4] mb-[24px]">
            Aksiya borasida operatorlarimiz bilan <br />
            bog’lanish uchun ma’lumotlaringizni yuboring:
          </p>

          {/* Card */}
          <form className="bg-[#F3F3F3] border border-[#999999] rounded-[24px] px-[20px] py-[22px] text-left shadow-[0_4px_0_0_rgba(0,0,0,0.12)]">
            {/* Name */}
            <label className="block mb-[14px]">
              <span className="block text-[14px] mb-[6px]">
                Ismingizni kiriting:
              </span>
              <input
                type="text"
                placeholder="Ismingiz"
                className="w-full h-[48px] rounded-[10px] border border-[#D3D3D3] bg-white px-4 text-[14px] placeholder:text-[#B4B4B4] outline-none focus:border-[#FF8500]"
              />
            </label>

            {/* Phone */}
            <label className="block mb-[20px]">
              <span className="block text-[14px] mb-[6px]">
                Telefon raqamingiz:
              </span>
              <div className="flex gap-[6px]">
                {/* Country code */}
                <button
                  type="button"
                  className="flex items-center justify-between w-[88px] h-[48px] rounded-[10px] bg-[#A6A6A6] text-white px-3 text-[14px]"
                >
                  <span>+998</span>
                  <span className="text-[18px] leading-none">▾</span>
                </button>

                {/* Phone input */}
                <input
                  type="tel"
                  placeholder="88 888 88 88"
                  className="flex-1 h-[48px] rounded-[10px] border border-[#D3D3D3] bg-white px-4 text-[14px] placeholder:text-[#B4B4B4] outline-none focus:border-[#FF8500]"
                />
              </div>
            </label>

            {/* Submit button */}
            <button
              type="submit"
              className="w-full h-[54px] rounded-[999px] bg-[#FF8500] text-white font-[750] text-[clamp(15px,4vw,18px)] shadow-[0_6px_0_0_#C26500] flex items-center justify-center mt-[8px]"
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

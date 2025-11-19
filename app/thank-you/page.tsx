"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwhQLovZhZgIcOpWIYWitkWkT_4RVgkXdBWMfM0bdp4TtPjmA7uEwUKLY3c19401sSr/exec";

const ThankYou = () => {
  const searchParams = useSearchParams();

  useEffect(() => {
    // SSR / build paytida window yo'q, shuning uchun guard
    if (typeof window === "undefined") return;

    const params = new URLSearchParams(window.location.search);

    const countryCode = params.get("countryCode") || "+998";
    const phoneParam = params.get("phone") || "";
    const nameParam = params.get("name") || "";

    if (!phoneParam) {
      console.warn("No phone in URL, skipping lead send");
      return;
    }

    // faqat raqamlarni olib, to‘liq raqam yasaymiz
    const digits = phoneParam.replace(/\D/g, "");
    const fullPhone =
      phoneParam.startsWith("+") || phoneParam.startsWith("00")
        ? phoneParam
        : `${countryCode}${digits}`;

    // Sana + vaqt
    const now = new Date();
    const pad = (n: number) => String(n).padStart(2, "0");
    const formattedDateTime = `${now.getFullYear()}-${pad(
      now.getMonth() + 1
    )}-${pad(now.getDate())} ${pad(now.getHours())}:${pad(
      now.getMinutes()
    )}:${pad(now.getSeconds())}`;

    // 🔥 FormData qilib yuboramiz – CORS preflight bo‘lmaydi
    const formData = new FormData();
    formData.append("sheetName", "Lead");
    formData.append("Telefon raqam", fullPhone);
    formData.append("Royhatdan o'tgan vaqti", formattedDateTime);
    formData.append("Ism", nameParam)


    fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      body: formData,
    }).catch((err) => {
      console.error("Failed to send lead (no-cors):", err);
    });
  }, [searchParams]);

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

      <section className="flex flex-col justify-center items-center gap-[26px] mt-[107px]">
        <svg
          width="80"
          height="36"
          viewBox="0 0 80 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M47.8755 6.62042L18.9736 34.8947C17.4676 36.3684 15.0539 36.3684 13.548 34.8947L1.16143 22.7785C-0.965364 20.6984 -0.0339488 17.1051 2.83797 16.3106C4.17084 15.9418 5.59995 16.3093 6.58701 17.2747L16.264 26.7401L42.4532 1.11977C44.5787 -0.960321 48.1679 0.0315599 48.9136 2.90515C49.2597 4.23879 48.862 5.65506 47.8755 6.62042ZM78.8903 1.15833C77.3911 -0.367079 74.9328 -0.388678 73.4067 1.11015L47.2272 26.7401L44.6854 24.2533C42.5598 22.1732 38.9707 23.1651 38.2249 26.0387C37.8788 27.3723 38.2733 28.7885 39.2598 29.7539L44.5144 34.8947C46.0203 36.3684 48.434 36.3684 49.94 34.8947L78.842 6.62039C80.3669 5.12808 80.3886 2.68692 78.8903 1.16795V1.15833Z"
            fill="#FF8500"
          />
        </svg>

        <h2 className="font-[750] font-[HelveticaNeueLTStd] tracking-[0.04em] text-[clamp(20px,6vw,24px)] leading-[1.1] mb-2 uppercase text-center">
          Ma’lumotlar <br /> yuborildi
        </h2>

        <Link
          href="/"
          className="w-full max-w-[293px] h-[54px] rounded-[999px] bg-[#FF8500] text-white font-[750] text-[clamp(15px,4vw,18px)] shadow-[0_6px_0_0_#C26500] flex items-center justify-center mt-2"
        >
          Asosiy sahifaga qaytish
        </Link>
      </section>
    </>
  );
};

export default ThankYou;

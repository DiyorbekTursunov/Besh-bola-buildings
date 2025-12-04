"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwhQLovZhZgIcOpWIYWitkWkT_4RVgkXdBWMfM0bdp4TtPjmA7uEwUKLY3c19401sSr/exec";

const UYSOT_URL = "https://service.app.uysot.uz/v1/external-source";
// ⚠️ Ideally keep this token on the server, not in the client bundle
const UYSOT_AUTH =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxNzgiLCJleHAiOjcwNTQyMTY2OTJ9.CvlQBF3rqlz7AHId14MOCgUa97aPtzqjHyDuh3jubk0";

const ThankYou = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const run = async () => {
      const params = new URLSearchParams(window.location.search);

      const countryCode = params.get("countryCode") || "+998";
      const phoneParam = params.get("phone") || "";
      const nameParam = params.get("name") || "";
      const emailParam = params.get("email") || ""; // agar URL’da bo‘lsa

      if (!phoneParam) {
        console.warn("No phone in URL, skipping lead send");
        return;
      }

      // faqat raqamlarni olib, countryCode bilan to‘liq raqam yasaymiz
      const digits = phoneParam.replace(/\D/g, "");
      const fullPhone =
        phoneParam.startsWith("+") || phoneParam.startsWith("00")
          ? phoneParam
          : `${countryCode}${digits}`;

      const now = new Date();
      const pad = (n: number) => String(n).padStart(2, "0");
      const formattedDateTime = `${now.getFullYear()}-${pad(
        now.getMonth() + 1
      )}-${pad(now.getDate())} ${pad(now.getHours())}:${pad(
        now.getMinutes()
      )}:${pad(now.getSeconds())}`;

      // 1) Google Sheets (Apps Script)
      const formData = new FormData();
      formData.append("sheetName", "Lead");
      formData.append("Telefon raqam", fullPhone);
      formData.append("Royhatdan o'tgan vaqti", formattedDateTime);
      if (nameParam) {
        formData.append("Ism", nameParam);
      }

      fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: formData,
        mode: "no-cors",
      }).catch((err) => {
        console.error("Failed to send lead to Google Script:", err);
      });

      // 2) Uysot external-source API
      try {
        const res = await fetch(UYSOT_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-Auth": UYSOT_AUTH,
          },
          body: JSON.stringify({
            phoneNumber: fullPhone, // required
            name: nameParam || undefined, // optional
            email: emailParam || undefined, // optional
            message: "Lead from Besh bola buildings landing page",
            tagList: ["besh-bola-buildings", "website-lead"], // xohlagan tag’laringni qo‘y
          }),
        });

        if (!res.ok) {
          console.error(
            "Failed to send lead to Uysot:",
            res.status,
            res.statusText
          );
        }
      } catch (error) {
        console.error("Error sending lead to Uysot:", error);
      }
    };

    void run();
  }, []);

  return (
    <>
      <header>
        <div className="container flex justify-between items-center">
          <Image src={"/logo.png"} alt="Logo" width={52} height={56} />

          <p className="leading-4 uppercase font-[750] text-[14px] font-[HelveticaNeueLTStd]">
            Besh bola <span className="text-[#E84B0F]">buildings</span>
          </p>
        </div>
      </header>

      <section className="flex flex-col justify-center items-center mt-[107px]">
        <svg
          className="mb-6"
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
        <h2 className="font-medium font-[HelveticaNeueLTStd] tracking-[0.04em] text-[clamp(20px,6vw,24px)] leading-[1.1] mb-6 uppercase text-center">
          Ma’lumotlar <br /> yuborildi
        </h2>
        <h2 className="font-[750] font-[sans-serif] tracking-[0.04em] text-[14px] leading-[1.1] mb-4 text-center max-w-[320px]">
          Eng zo'r aksiyalar va yangiliklardan birinchi bo'lib xabardor
          bo'lishni istasangiz telegram kanalimizga obuna bo'ling!
        </h2>

        <Link
          href="https://t.me/+MeXvwji3z6BkYzZi"
          className="w-full max-w-[293px] h-[54px] rounded-[999px] bg-[#FF8500] text-white font-[750] text-[clamp(15px,4vw,18px)] shadow-[0_6px_0_0_#C26500] flex items-center justify-center mt-2"
        >
          Telegramga o'tish
        </Link>
      </section>
    </>
  );
};

// FUCKED

export default ThankYou;

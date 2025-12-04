"use client";

import Image from "next/image";
import { useState, type ChangeEvent, type KeyboardEvent } from "react";

type CountryCode = "+998" | "+7" | "+1" | "+996" | "+992";

type PhoneConfig = {
  placeholder: string;
  groups: number[];
  maxDigits: number;
};

const phoneConfigs: Record<CountryCode, PhoneConfig> = {
  "+998": {
    placeholder: "88 888 88 88",
    groups: [2, 3, 2, 2],
    maxDigits: 9,
  },
  "+7": {
    placeholder: "999 999 99 99",
    groups: [3, 3, 2, 2],
    maxDigits: 10,
  },
  "+1": {
    placeholder: "999 999 9999",
    groups: [3, 3, 4],
    maxDigits: 10,
  },
  "+996": {
    placeholder: "555 555 555",
    groups: [3, 3, 3],
    maxDigits: 9,
  },
  "+992": {
    placeholder: "555 555 555",
    groups: [3, 3, 3],
    maxDigits: 9,
  },
};

function formatPhone(raw: string, groups: number[]): string {
  const maxLen = groups.reduce((sum, n) => sum + n, 0);

  const digitsOnly = raw.replace(/\D/g, "").slice(0, maxLen);

  let result = "";
  let idx = 0;

  groups.forEach((len, i) => {
    if (digitsOnly.length > idx) {
      if (i > 0) result += " ";
      result += digitsOnly.slice(idx, idx + len);
      idx += len;
    }
  });

  return result;
}

export default function OperatorPage() {
  const [countryCode, setCountryCode] = useState<CountryCode>("+998");
  const [phone, setPhone] = useState<string>("");

  const currentConfig = phoneConfigs[countryCode];

  const htmlPattern = currentConfig.groups
    .map((g) => `\\d{${g}}`)
    .join(" "); // masalan: "\d{2} \d{3} \d{2} \d{2}"

  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value, currentConfig.groups);
    setPhone(formatted);
  };

  const handlePhoneKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    const allowedKeys = [
      "Backspace",
      "Delete",
      "ArrowLeft",
      "ArrowRight",
      "Tab",
      "Home",
      "End",
    ];

    if (
      allowedKeys.includes(e.key) ||
      e.ctrlKey ||
      e.metaKey ||
      e.altKey
    ) {
      return;
    }

    // faqat raqam uchun cheklov
    if (!/^\d$/.test(e.key)) {
      e.preventDefault();
      return;
    }

    const digitsCount = phone.replace(/\D/g, "").length;

    if (digitsCount >= currentConfig.maxDigits) {
      e.preventDefault();
    }
  };

  return (
    <>
      <header>
        <div className="container flex justify-between items-center">
          <a href={"/"}>
            <Image src={"/logo.png"} alt="Logo" width={52} height={56} />
          </a>

          <p className="leading-4 uppercase font-[750] text-[14px] font-[HelveticaNeueLTStd]">
            Besh bola <br /> <span className="text-[#E84B0F]">buildings</span>
          </p>
        </div>
      </header>

      <section className="py-10 bg-[#FDFDFD]">
        <div className="max-w-[374px] mx-auto px-4 text-center font-[HelveticaNeueLTStd]">
          <h2 className="font-[750] font-[HelveticaNeueLTStd] tracking-[0.04em] text-[clamp(20px,6vw,24px)] leading-[1.1] mb-2 uppercase">
            operator bilan bog’lanish
          </h2>

          <p className="text-[clamp(9px,2.6vw,11px)] leading-[1.4] mb-6 font-[HelveticaNeueLTStd]">
            Ismingiz va Telefon raqamingizni yuboring, <br /> qisqa muddatda
            siz bilan bog’lanamiz 😊
          </p>

          <form
            className="bg-[#F3F3F3] border border-[#999999] rounded-3xl px-5 py-[22px] text-left shadow-[0_4px_0_0_rgba(0,0,0,0.12)] font-[Poppins]"
            action="/thank-you"
            method="GET"
          >
            <label className="block mb-3.5">
              <span className="block text-[14px] mb-1.5">
                Ismingizni kiriting:
              </span>
              <input
                required
                type="text"
                name="name"
                placeholder="Ismingiz"
                className="w-full h-12 rounded-[10px] border border-[#D3D3D3] bg-white px-4 text-[14px] placeholder:text-[#B4B4B4] outline-none focus:border-[#FF8500]"
              />
            </label>

            <label className="block mb-5">
              <span className="block text-[14px] mb-1.5">
                Telefon raqamingiz:
              </span>

              <div className="flex gap-1.5">
                <div className="relative w-[88px]">
                  <select
                    name="countryCode"
                    value={countryCode}
                    onChange={(e) => {
                      setCountryCode(e.target.value as CountryCode);
                      setPhone("");
                    }}
                    required
                    className="w-full h-12 rounded-[10px] bg-[#A6A6A6] text-white
                      px-3 pr-8 text-[14px] outline-none cursor-pointer
                      appearance-none"
                  >
                    <option value="+998">+998</option>
                    <option value="+7">+7</option>
                    <option value="+1">+1</option>
                    <option value="+996">+996</option>
                    <option value="+992">+992</option>
                  </select>

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

                <input
                  type="tel"
                  name="phone"
                  value={phone}
                  onChange={handlePhoneChange}
                  onKeyDown={handlePhoneKeyDown}
                  placeholder={currentConfig.placeholder}
                  pattern={htmlPattern}
                  inputMode="numeric"
                  autoComplete="tel"
                  required
                  className="flex-1 h-12 rounded-[10px] border border-[#D3D3D3] bg-white px-4
                    text-[14px] placeholder:text-[#B4B4B4] outline-none focus:border-[#FF8500] w-full"
                />
              </div>
            </label>

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
}

"use client";

import Image from "next/image";
import arrowImage from "../../public/b/arrow-hero.png";
import { HouseBlockSecont, secoundHouses } from "../components/home-card-2";
import { useEffect, useState } from "react";

const Page = () => {
  const [modalIsOpen, setmodalIsOpen] = useState(false);
  const [openModal, setopenModal] = useState(0); // prices modal

  const plans = [
    {
      id: "no-start",
      label: "Boshlang'ich to'lovsiz",
      discount: "Yo‘q",
      payment: "4 mln 102 000 so‘m, 60 oyga",
      bonusTitle: "BONUS",
      bonusText: "Yo‘q",
      hasBonus: false,
    },
    {
      id: "25",
      label: "Boshlang'ich 25 mln so‘m",
      discount: "9 mln 858.000 so’m",
      payment: "3 mln 520.000 so’m 60 oyga",
      bonusTitle: "BONUS!",
      bonusText: "Bepul konditsioner",
      hasBonus: true,
    },
    {
      id: "60",
      label: "Boshlang'ich 60 mln so‘m",
      discount: "32 mln 860.000 so’m",
      payment: "2 mln 554.000 so’m 60 oyga",
      bonusTitle: "BONUS!",
      bonusText: "Parkovka, Televizor va Muzlatgich",
      hasBonus: true,
    },
    {
      id: "120",
      label: "Boshlang'ich 120 mln so‘m",
      discount: "49 mln 290.000 so’m",
      payment: "1 mln 280.000 so’m 60 oyga",
      bonusTitle: "BONUS!",
      bonusText: "Parkovka, Televizor, Muzlatgich va Iphone 17 Pro",
      hasBonus: true,
    },
  ];

  const plans2 = [
    {
      id: "no-start",
      label: "Boshlang'ich to'lovsiz",
      discount: "Yo‘q",
      payment: "7 mln 40.000 so’m 60 oyga",
      bonusTitle: "BONUS",
      bonusText: "Yo‘q",
      hasBonus: false,
    },
    {
      id: "25",
      label: "Boshlang’ich 60 mln so’m",
      discount: "56 mln 400.000 so’m",
      payment: "5 mln 100.000 so’m 60 oyga",
      bonusTitle: "BONUS!",
      bonusText: "Parkovka, Televizorva Muzlatgich",
      hasBonus: true,
    },
  ];

  const plans3 = [
    {
      id: "no-start",
      label: "Boshlang'ich to'lovsiz",
      discount: "Yo‘q",
      payment: "5 mln 729.000 so’m 60 oyga",
      bonusTitle: "BONUS",
      bonusText: "Yo‘q",
      hasBonus: false,
    },
    {
      id: "25",
      label: "Boshlang'ich 25 mln so‘m",
      discount: "13 mln 770.000 so’m",
      payment: "5 mln 83.000 so’m 60 oyga",
      bonusTitle: "BONUS!",
      bonusText: "Bepul konditsioner",
      hasBonus: true,
    },
    {
      id: "60",
      label: "Boshlang'ich 60 mln so‘m",
      discount: "45 mln 900.000 so’m",
      payment: "3 mln 964.000 so’m 60 oyga",
      bonusTitle: "BONUS!",
      bonusText: "Parkovka, Televizor va Muzlatgich",
      hasBonus: true,
    },
    {
      id: "120",
      label: "Boshlang'ich 120 mln so‘m",
      discount: "68 mln 850.000 so’m",
      payment: "2 mln 582.000 so’m 60 oyga",
      bonusTitle: "BONUS!",
      bonusText: "Parkovka, Televizor, Muzlatgich va Iphone 17 Pro",
      hasBonus: true,
    },
  ];

  const plans4 = [
    {
      id: "no-start",
      label: "Boshlang'ich to'lovsiz",
      discount: "Yo‘q",
      payment: "6 mln 522.000 so’m 60 oyga",
      bonusTitle: "BONUS",
      bonusText: "Yo‘q",
      hasBonus: false,
    },
    {
      id: "25",
      label: "Boshlang'ich 25 mln so‘m",
      discount: "15 mln 675.000 so’m",
      payment: "5 mln 844.000 so’m 60 oyga",
      bonusTitle: "BONUS!",
      bonusText: "Bepul konditsioner",
      hasBonus: true,
    },
    {
      id: "60",
      label: "Boshlang'ich 60 mln so‘m",
      discount: "52 mln 250.000 so’m",
      payment: "4 mln 651.000 so’m 60 oyga",
      bonusTitle: "BONUS!",
      bonusText: "Parkovka, Televizor va Muzlatgich",
      hasBonus: true,
    },
    {
      id: "120",
      label: "Boshlang'ich 120 mln so‘m",
      discount: "78 mln 375.000 so’m",
      payment: "3 mln 216.000 so’m 60 oyga",
      bonusTitle: "BONUS!",
      bonusText: "Parkovka, Televizor, Muzlatgich va Iphone 17 Pro",
      hasBonus: true,
    },
  ];

  useEffect(() => {
    setSelectedPlanId("no-start");
    setSelectedPlanId2("no-start");
    setSelectedPlanId3("no-start");
    setSelectedPlanId4("no-start");
  }, [openModal]);

  const [selectedPlanId, setSelectedPlanId] = useState("no-start");
  const [selectedPlanId2, setSelectedPlanId2] = useState("no-start");
  const [selectedPlanId3, setSelectedPlanId3] = useState("no-start");
  const [selectedPlanId4, setSelectedPlanId4] = useState("no-start");
  const selectedPlan = plans.find((p) => p.id === selectedPlanId)!;
  const selectedPlan2 = plans2.find((p) => p.id === selectedPlanId2)!;
  const selectedPlan3 = plans3.find((p) => p.id === selectedPlanId3)!;
  const selectedPlan4 = plans4.find((p) => p.id === selectedPlanId4)!;

  // ==== 1) Operator bilan bog'lanish sahifasi (oldingi modalIsOpen qismi) ====
  if (modalIsOpen) {
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
              action={"/thank-you"}
            >
              <label className="block mb-3.5">
                <span className="block text-[14px] mb-1.5">
                  Ismingizni kiriting:
                </span>
                <input
                  required
                  type="text"
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
                      defaultValue="+998"
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
                    placeholder="88 888 88 88"
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

            <Image
              className="[@media(max-width:400px)]:h-[90px]"
              src={arrowImage}
              alt="arrow"
            />
          </div>
        </div>
      </section>

      <section className="">
        <div className="">
          {secoundHouses.map((house) => (
            // faqat setopenModal prop qo‘shdik – UI o‘zgarmaydi
            <HouseBlockSecont
              key={house.id}
              {...house}
              setopenModal={setopenModal}
            />
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
                   appearance-none"
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

      {/* ==== Narxlar modali ==== */}
      {openModal === 1 && (
        <>
          <div
            className="fixed inset-0 bg-black/40 z-40"
            onClick={() => setopenModal(0)}
          />

          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <div className="relative w-full max-w-[360px] bg-white rounded-[26px] shadow-[0_12px_40px_rgba(0,0,0,0.25)] pt-6 pb-5 px-4">
              <button
                type="button"
                onClick={() => setopenModal(0)}
                className="absolute right-3 top-3 w-7 h-7 flex items-center justify-center rounded-full text-black text-[20px]"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.00911 10.1537L13.3973 15.5357C13.6833 15.8213 14.0711 15.9818 14.4754 15.9818C14.8798 15.9818 15.2675 15.8213 15.5535 15.5357C15.8394 15.2502 16 14.8628 16 14.4589C16 14.055 15.8394 13.6677 15.5535 13.3821L10.1632 8L15.5524 2.61791C15.6939 2.4765 15.8062 2.30863 15.8827 2.12389C15.9593 1.93916 15.9987 1.74117 15.9986 1.54123C15.9986 1.34129 15.9591 1.14332 15.8825 0.958621C15.8058 0.773921 15.6935 0.606108 15.5519 0.464764C15.4104 0.32342 15.2423 0.211313 15.0574 0.134844C14.8724 0.0583746 14.6742 0.0190406 14.474 0.0190878C14.2739 0.0191349 14.0757 0.0585623 13.8908 0.135119C13.7058 0.211675 13.5378 0.323861 13.3963 0.465272L8.00911 5.84737L2.62088 0.465272C2.48035 0.319805 2.31223 0.20375 2.12632 0.123877C1.94041 0.044005 1.74044 0.00191503 1.53807 6.38416e-05C1.3357 -0.00178735 1.13499 0.0366372 0.947644 0.113095C0.760302 0.189553 0.590079 0.302514 0.44691 0.445385C0.30374 0.588257 0.19049 0.758179 0.113768 0.945236C0.0370463 1.13229 -0.00161105 1.33274 5.14305e-05 1.53488C0.00171391 1.73702 0.0436629 1.9368 0.123451 2.12258C0.203239 2.30835 0.319268 2.47639 0.464769 2.61689L5.85504 8L0.465785 13.3831C0.320284 13.5236 0.204255 13.6917 0.124467 13.8774C0.0446789 14.0632 0.00272991 14.263 0.00106743 14.4651C-0.000595046 14.6673 0.0380623 14.8677 0.114784 15.0548C0.191506 15.2418 0.304756 15.4117 0.447926 15.5546C0.591095 15.6975 0.761318 15.8104 0.94866 15.8869C1.136 15.9634 1.33671 16.0018 1.53908 15.9999C1.74145 15.9981 1.94142 15.956 2.12733 15.8761C2.31324 15.7963 2.48137 15.6802 2.62189 15.5347L8.00911 10.1537Z"
                    fill="black"
                  />
                </svg>
              </button>

              <h2 className="text-center font-[750] text-[18px] leading-[120%] mb-4 uppercase font-[HelveticaNeueLTStd]">
                NARXLAR BILAN <br /> BATAFSIL TANISHING
              </h2>

              <div className="mb-4">
                <div className="relative">
                  <select
                    value={selectedPlanId}
                    onChange={(e) => setSelectedPlanId(e.target.value)}
                    className="w-full h-[46px] rounded-[10px] bg-[#FC4A06] text-white text-[14px] font-[750] px-4 pr-9 shadow-[0_4px_0_0_#C26500] outline-none cursor-pointer appearance-none"
                  >
                    <option value="no-start">
                      Boshlang'ich to'lovni tanlang
                    </option>
                    {plans.map((plan) => (
                      <option key={plan.id} value={plan.id}>
                        {plan.label}
                      </option>
                    ))}
                  </select>

                  <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
                    <svg
                      width="14"
                      height="14"
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
              </div>

              <div className="space-y-2.5 mb-5">
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-white rounded-[14px] border border-[#FFD6B6] px-3 py-2 shadow-[0_2px_8px_rgba(0,0,0,0.06)]">
                    <p className="text-[18px] font-bold mb-1">Chegirma:</p>
                    <p className="text-[12px] leading-[1.2]">
                      {selectedPlan.discount}
                    </p>
                  </div>

                  <div className="bg-white rounded-[14px] border border-[#FFD6B6] px-3 py-2 shadow-[0_2px_8px_rgba(0,0,0,0.06)]">
                    <p className="text-[18px] font-bold mb-1">Oylik to‘lov:</p>
                    <p className="text-[12px] leading-[1.2]">
                      {selectedPlan.payment}
                    </p>
                  </div>
                </div>

                {selectedPlan.hasBonus ? (
                  <div className="rounded-[14px] flex justify-between items-start overflow-hidden shadow-[0_2px_10px_rgba(0,0,0,0.12)] pl-2.5 h-[105px]">
                    <div className="mt-2.5">
                      <p className="text-[18px] font-[750] mb-1">
                        {selectedPlan.bonusTitle}
                      </p>
                      <p className="text-[14px] leading-[1.2]">
                        {selectedPlan.bonusText}
                      </p>
                    </div>
                    <div className="w-full h-full max-w-[168px] border-2 border-white  bg-linear-to-r from-[#FF8500] to-[#FFB733] px-3 flex items-center justify-center rounded-[10px] py-1">
                      {/* Konditsioner rasmi bo'lsa shu yerga qo'yasan */}
                      {selectedPlan.id === "25" && (
                        <Image
                          src="/konditsioner.png"
                          alt="Bonus"
                          width={115}
                          height={86}
                        />
                      )}

                      {selectedPlan.id === "60" && (
                        <Image
                          src="/sovga-rasmlari.png"
                          alt="Bonus"
                          width={150}
                          height={79}
                        />
                      )}

                      {selectedPlan.id === "120" && (
                        <Image
                          src="/sovga-rasmlari-2.png"
                          alt="Bonus"
                          width={159}
                          height={79}
                        />
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="bg-white rounded-[14px] border border-[#FFD6B6] px-3 py-2 shadow-[0_2px_8px_rgba(0,0,0,0.06)]  h-[105px]">
                    <p className="text-[11px] font-bold mb-1">BONUS</p>
                    <p className="text-[12px] leading-[1.2]">
                      {selectedPlan.bonusText}
                    </p>
                  </div>
                )}
              </div>

              <button
                onClick={() => {
                  setmodalIsOpen(true);
                  setopenModal(1);
                }}
                className="py-2.5 w-full bg-[#FF8500] border border-[#C26500] rounded-[100px] font-bold text-white shadow-[0px_4px_0px_0px_#C26500] text-[clamp(15px,3.5vw,20px)]"
              >
                Operator bilan bog’lanish {">>"}
              </button>
            </div>
          </div>
        </>
      )}

      {/* ==== Narxlar modali ==== */}
      {openModal === 2 && (
        <>
          <div
            className="fixed inset-0 bg-black/40 z-40"
            onClick={() => setopenModal(0)}
          />

          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <div className="relative w-full max-w-[360px] bg-white rounded-[26px] shadow-[0_12px_40px_rgba(0,0,0,0.25)] pt-6 pb-5 px-4">
              <button
                type="button"
                onClick={() => setopenModal(0)}
                className="absolute right-3 top-3 w-7 h-7 flex items-center justify-center rounded-full text-black text-[20px]"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.00911 10.1537L13.3973 15.5357C13.6833 15.8213 14.0711 15.9818 14.4754 15.9818C14.8798 15.9818 15.2675 15.8213 15.5535 15.5357C15.8394 15.2502 16 14.8628 16 14.4589C16 14.055 15.8394 13.6677 15.5535 13.3821L10.1632 8L15.5524 2.61791C15.6939 2.4765 15.8062 2.30863 15.8827 2.12389C15.9593 1.93916 15.9987 1.74117 15.9986 1.54123C15.9986 1.34129 15.9591 1.14332 15.8825 0.958621C15.8058 0.773921 15.6935 0.606108 15.5519 0.464764C15.4104 0.32342 15.2423 0.211313 15.0574 0.134844C14.8724 0.0583746 14.6742 0.0190406 14.474 0.0190878C14.2739 0.0191349 14.0757 0.0585623 13.8908 0.135119C13.7058 0.211675 13.5378 0.323861 13.3963 0.465272L8.00911 5.84737L2.62088 0.465272C2.48035 0.319805 2.31223 0.20375 2.12632 0.123877C1.94041 0.044005 1.74044 0.00191503 1.53807 6.38416e-05C1.3357 -0.00178735 1.13499 0.0366372 0.947644 0.113095C0.760302 0.189553 0.590079 0.302514 0.44691 0.445385C0.30374 0.588257 0.19049 0.758179 0.113768 0.945236C0.0370463 1.13229 -0.00161105 1.33274 5.14305e-05 1.53488C0.00171391 1.73702 0.0436629 1.9368 0.123451 2.12258C0.203239 2.30835 0.319268 2.47639 0.464769 2.61689L5.85504 8L0.465785 13.3831C0.320284 13.5236 0.204255 13.6917 0.124467 13.8774C0.0446789 14.0632 0.00272991 14.263 0.00106743 14.4651C-0.000595046 14.6673 0.0380623 14.8677 0.114784 15.0548C0.191506 15.2418 0.304756 15.4117 0.447926 15.5546C0.591095 15.6975 0.761318 15.8104 0.94866 15.8869C1.136 15.9634 1.33671 16.0018 1.53908 15.9999C1.74145 15.9981 1.94142 15.956 2.12733 15.8761C2.31324 15.7963 2.48137 15.6802 2.62189 15.5347L8.00911 10.1537Z"
                    fill="black"
                  />
                </svg>
              </button>

              <h2 className="text-center font-[750] text-[18px] leading-[120%] mb-4 uppercase font-[HelveticaNeueLTStd]">
                NARXLAR BILAN <br /> BATAFSIL TANISHING
              </h2>

              <div className="mb-4">
                <div className="relative">
                  <select
                    value={selectedPlanId2}
                    onChange={(e) => setSelectedPlanId2(e.target.value)}
                    className="w-full h-[46px] rounded-[10px] bg-[#FC4A06] text-white text-[14px] font-[750] px-4 pr-9 shadow-[0_4px_0_0_#C26500] outline-none cursor-pointer appearance-none"
                  >
                    <option value="no-start">
                      Boshlang'ich to'lovni tanlang
                    </option>
                    {plans2.map((plan) => (
                      <option key={plan.id} value={plan.id}>
                        {plan.label}
                      </option>
                    ))}
                  </select>

                  <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
                    <svg
                      width="14"
                      height="14"
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
              </div>

              <div className="space-y-2.5 mb-5">
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-white rounded-[14px] border border-[#FFD6B6] px-3 py-2 shadow-[0_2px_8px_rgba(0,0,0,0.06)]">
                    <p className="text-[18px] font-bold mb-1">Chegirma:</p>
                    <p className="text-[12px] leading-[1.2]">
                      {selectedPlan2.discount}
                    </p>
                  </div>

                  <div className="bg-white rounded-[14px] border border-[#FFD6B6] px-3 py-2 shadow-[0_2px_8px_rgba(0,0,0,0.06)]">
                    <p className="text-[18px] font-bold mb-1">Oylik to‘lov:</p>
                    <p className="text-[12px] leading-[1.2]">
                      {selectedPlan2.payment}
                    </p>
                  </div>
                </div>

                {selectedPlan2.hasBonus ? (
                  <div className="rounded-[14px] flex justify-between items-start overflow-hidden shadow-[0_2px_10px_rgba(0,0,0,0.12)] pl-2.5 h-[105px]">
                    <div className="mt-2.5">
                      <p className="text-[18px] font-[750] mb-1">
                        {selectedPlan2.bonusTitle}
                      </p>
                      <p className="text-[14px] leading-[1.2]">
                        {selectedPlan2.bonusText}
                      </p>
                    </div>
                    <div className="w-full h-full max-w-[168px] border-2 border-white  bg-linear-to-r from-[#FF8500] to-[#FFB733] px-3 flex items-center justify-center rounded-[10px] py-1">
                      {/* Konditsioner rasmi bo'lsa shu yerga qo'yasan */}
                      {selectedPlan2.id === "25" && (
                        <Image
                          src="/konditsioner.png"
                          alt="Bonus"
                          width={115}
                          height={86}
                        />
                      )}

                      {selectedPlan2.id === "60" && (
                        <Image
                          src="/sovga-rasmlari.png"
                          alt="Bonus"
                          width={150}
                          height={79}
                        />
                      )}

                      {selectedPlan2.id === "120" && (
                        <Image
                          src="/sovga-rasmlari-2.png"
                          alt="Bonus"
                          width={159}
                          height={79}
                        />
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="bg-white rounded-[14px] border border-[#FFD6B6] px-3 py-2 shadow-[0_2px_8px_rgba(0,0,0,0.06)]  h-[105px]">
                    <p className="text-[11px] font-bold mb-1">BONUS</p>
                    <p className="text-[12px] leading-[1.2]">
                      {selectedPlan.bonusText}
                    </p>
                  </div>
                )}
              </div>

              <button
                onClick={() => {
                  setmodalIsOpen(true);
                  setopenModal(0);
                }}
                className="py-2.5 w-full bg-[#FF8500] border border-[#C26500] rounded-[100px] font-bold text-white shadow-[0px_4px_0px_0px_#C26500] text-[clamp(15px,3.5vw,20px)]"
              >
                Operator bilan bog’lanish {">>"}
              </button>
            </div>
          </div>
        </>
      )}

      {/* ==== Narxlar modali ==== */}
      {openModal === 3 && (
        <>
          <div
            className="fixed inset-0 bg-black/40 z-40"
            onClick={() => setopenModal(0)}
          />

          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <div className="relative w-full max-w-[360px] bg-white rounded-[26px] shadow-[0_12px_40px_rgba(0,0,0,0.25)] pt-6 pb-5 px-4">
              <button
                type="button"
                onClick={() => setopenModal(0)}
                className="absolute right-3 top-3 w-7 h-7 flex items-center justify-center rounded-full text-black text-[20px]"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.00911 10.1537L13.3973 15.5357C13.6833 15.8213 14.0711 15.9818 14.4754 15.9818C14.8798 15.9818 15.2675 15.8213 15.5535 15.5357C15.8394 15.2502 16 14.8628 16 14.4589C16 14.055 15.8394 13.6677 15.5535 13.3821L10.1632 8L15.5524 2.61791C15.6939 2.4765 15.8062 2.30863 15.8827 2.12389C15.9593 1.93916 15.9987 1.74117 15.9986 1.54123C15.9986 1.34129 15.9591 1.14332 15.8825 0.958621C15.8058 0.773921 15.6935 0.606108 15.5519 0.464764C15.4104 0.32342 15.2423 0.211313 15.0574 0.134844C14.8724 0.0583746 14.6742 0.0190406 14.474 0.0190878C14.2739 0.0191349 14.0757 0.0585623 13.8908 0.135119C13.7058 0.211675 13.5378 0.323861 13.3963 0.465272L8.00911 5.84737L2.62088 0.465272C2.48035 0.319805 2.31223 0.20375 2.12632 0.123877C1.94041 0.044005 1.74044 0.00191503 1.53807 6.38416e-05C1.3357 -0.00178735 1.13499 0.0366372 0.947644 0.113095C0.760302 0.189553 0.590079 0.302514 0.44691 0.445385C0.30374 0.588257 0.19049 0.758179 0.113768 0.945236C0.0370463 1.13229 -0.00161105 1.33274 5.14305e-05 1.53488C0.00171391 1.73702 0.0436629 1.9368 0.123451 2.12258C0.203239 2.30835 0.319268 2.47639 0.464769 2.61689L5.85504 8L0.465785 13.3831C0.320284 13.5236 0.204255 13.6917 0.124467 13.8774C0.0446789 14.0632 0.00272991 14.263 0.00106743 14.4651C-0.000595046 14.6673 0.0380623 14.8677 0.114784 15.0548C0.191506 15.2418 0.304756 15.4117 0.447926 15.5546C0.591095 15.6975 0.761318 15.8104 0.94866 15.8869C1.136 15.9634 1.33671 16.0018 1.53908 15.9999C1.74145 15.9981 1.94142 15.956 2.12733 15.8761C2.31324 15.7963 2.48137 15.6802 2.62189 15.5347L8.00911 10.1537Z"
                    fill="black"
                  />
                </svg>
              </button>

              <h2 className="text-center font-[750] text-[18px] leading-[120%] mb-4 uppercase font-[HelveticaNeueLTStd]">
                NARXLAR BILAN <br /> BATAFSIL TANISHING
              </h2>

              <div className="mb-4">
                <div className="relative">
                  <select
                    value={selectedPlanId3}
                    onChange={(e) => setSelectedPlanId3(e.target.value)}
                    className="w-full h-[46px] rounded-[10px] bg-[#FC4A06] text-white text-[14px] font-[750] px-4 pr-9 shadow-[0_4px_0_0_#C26500] outline-none cursor-pointer appearance-none"
                  >
                    <option value="no-start">
                      Boshlang'ich to'lovni tanlang
                    </option>
                    {plans3.map((plan) => (
                      <option key={plan.id} value={plan.id}>
                        {plan.label}
                      </option>
                    ))}
                  </select>

                  <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
                    <svg
                      width="14"
                      height="14"
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
              </div>

              <div className="space-y-2.5 mb-5">
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-white rounded-[14px] border border-[#FFD6B6] px-3 py-2 shadow-[0_2px_8px_rgba(0,0,0,0.06)]">
                    <p className="text-[18px] font-bold mb-1">Chegirma:</p>
                    <p className="text-[12px] leading-[1.2]">
                      {selectedPlan3.discount}
                    </p>
                  </div>

                  <div className="bg-white rounded-[14px] border border-[#FFD6B6] px-3 py-2 shadow-[0_2px_8px_rgba(0,0,0,0.06)]">
                    <p className="text-[18px] font-bold mb-1">Oylik to‘lov:</p>
                    <p className="text-[12px] leading-[1.2]">
                      {selectedPlan3.payment}
                    </p>
                  </div>
                </div>

                {selectedPlan3.hasBonus ? (
                  <div className="rounded-[14px] flex justify-between items-start overflow-hidden shadow-[0_2px_10px_rgba(0,0,0,0.12)] pl-2.5 h-[105px]">
                    <div className="mt-2.5">
                      <p className="text-[18px] font-[750] mb-1">
                        {selectedPlan3.bonusTitle}
                      </p>
                      <p className="text-[14px] leading-[1.2]">
                        {selectedPlan3.bonusText}
                      </p>
                    </div>
                    <div className="w-full h-full max-w-[168px] border-2 border-white  bg-linear-to-r from-[#FF8500] to-[#FFB733] px-3 flex items-center justify-center rounded-[10px] py-1">
                      {/* Konditsioner rasmi bo'lsa shu yerga qo'yasan */}
                      {selectedPlan3.id === "25" && (
                        <Image
                          src="/konditsioner.png"
                          alt="Bonus"
                          width={115}
                          height={86}
                        />
                      )}

                      {selectedPlan3.id === "60" && (
                        <Image
                          src="/sovga-rasmlari.png"
                          alt="Bonus"
                          width={150}
                          height={79}
                        />
                      )}

                      {selectedPlan3.id === "120" && (
                        <Image
                          src="/sovga-rasmlari-2.png"
                          alt="Bonus"
                          width={159}
                          height={79}
                        />
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="bg-white rounded-[14px] border border-[#FFD6B6] px-3 py-2 shadow-[0_2px_8px_rgba(0,0,0,0.06)]  h-[105px]">
                    <p className="text-[11px] font-bold mb-1">BONUS</p>
                    <p className="text-[12px] leading-[1.2]">
                      {selectedPlan.bonusText}
                    </p>
                  </div>
                )}
              </div>

              <button
                onClick={() => {
                  setmodalIsOpen(true);
                  setopenModal(0);
                }}
                className="py-2.5 w-full bg-[#FF8500] border border-[#C26500] rounded-[100px] font-bold text-white shadow-[0px_4px_0px_0px_#C26500] text-[clamp(15px,3.5vw,20px)]"
              >
                Operator bilan bog’lanish {">>"}
              </button>
            </div>
          </div>
        </>
      )}

      {/* ==== Narxlar modali ==== */}
      {openModal === 4 && (
        <>
          <div
            className="fixed inset-0 bg-black/40 z-40"
            onClick={() => setopenModal(0)}
          />

          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <div className="relative w-full max-w-[360px] bg-white rounded-[26px] shadow-[0_12px_40px_rgba(0,0,0,0.25)] pt-6 pb-5 px-4">
              <button
                type="button"
                onClick={() => setopenModal(0)}
                className="absolute right-3 top-3 w-7 h-7 flex items-center justify-center rounded-full text-black text-[20px]"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.00911 10.1537L13.3973 15.5357C13.6833 15.8213 14.0711 15.9818 14.4754 15.9818C14.8798 15.9818 15.2675 15.8213 15.5535 15.5357C15.8394 15.2502 16 14.8628 16 14.4589C16 14.055 15.8394 13.6677 15.5535 13.3821L10.1632 8L15.5524 2.61791C15.6939 2.4765 15.8062 2.30863 15.8827 2.12389C15.9593 1.93916 15.9987 1.74117 15.9986 1.54123C15.9986 1.34129 15.9591 1.14332 15.8825 0.958621C15.8058 0.773921 15.6935 0.606108 15.5519 0.464764C15.4104 0.32342 15.2423 0.211313 15.0574 0.134844C14.8724 0.0583746 14.6742 0.0190406 14.474 0.0190878C14.2739 0.0191349 14.0757 0.0585623 13.8908 0.135119C13.7058 0.211675 13.5378 0.323861 13.3963 0.465272L8.00911 5.84737L2.62088 0.465272C2.48035 0.319805 2.31223 0.20375 2.12632 0.123877C1.94041 0.044005 1.74044 0.00191503 1.53807 6.38416e-05C1.3357 -0.00178735 1.13499 0.0366372 0.947644 0.113095C0.760302 0.189553 0.590079 0.302514 0.44691 0.445385C0.30374 0.588257 0.19049 0.758179 0.113768 0.945236C0.0370463 1.13229 -0.00161105 1.33274 5.14305e-05 1.53488C0.00171391 1.73702 0.0436629 1.9368 0.123451 2.12258C0.203239 2.30835 0.319268 2.47639 0.464769 2.61689L5.85504 8L0.465785 13.3831C0.320284 13.5236 0.204255 13.6917 0.124467 13.8774C0.0446789 14.0632 0.00272991 14.263 0.00106743 14.4651C-0.000595046 14.6673 0.0380623 14.8677 0.114784 15.0548C0.191506 15.2418 0.304756 15.4117 0.447926 15.5546C0.591095 15.6975 0.761318 15.8104 0.94866 15.8869C1.136 15.9634 1.33671 16.0018 1.53908 15.9999C1.74145 15.9981 1.94142 15.956 2.12733 15.8761C2.31324 15.7963 2.48137 15.6802 2.62189 15.5347L8.00911 10.1537Z"
                    fill="black"
                  />
                </svg>
              </button>

              <h2 className="text-center font-[750] text-[18px] leading-[120%] mb-4 uppercase font-[HelveticaNeueLTStd]">
                NARXLAR BILAN <br /> BATAFSIL TANISHING
              </h2>

              <div className="mb-4">
                <div className="relative">
                  <select
                    value={selectedPlanId4}
                    onChange={(e) => setSelectedPlanId4(e.target.value)}
                    className="w-full h-[46px] rounded-[10px] bg-[#FC4A06] text-white text-[14px] font-[750] px-4 pr-9 shadow-[0_4px_0_0_#C26500] outline-none cursor-pointer appearance-none"
                  >
                    <option value="no-start">
                      Boshlang'ich to'lovni tanlang
                    </option>
                    {plans4.map((plan) => (
                      <option key={plan.id} value={plan.id}>
                        {plan.label}
                      </option>
                    ))}
                  </select>

                  <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
                    <svg
                      width="14"
                      height="14"
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
              </div>

              <div className="space-y-2.5 mb-5">
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-white rounded-[14px] border border-[#FFD6B6] px-3 py-2 shadow-[0_2px_8px_rgba(0,0,0,0.06)]">
                    <p className="text-[18px] font-bold mb-1">Chegirma:</p>
                    <p className="text-[12px] leading-[1.2]">
                      {selectedPlan4.discount}
                    </p>
                  </div>

                  <div className="bg-white rounded-[14px] border border-[#FFD6B6] px-3 py-2 shadow-[0_2px_8px_rgba(0,0,0,0.06)]">
                    <p className="text-[18px] font-bold mb-1">Oylik to‘lov:</p>
                    <p className="text-[12px] leading-[1.2]">
                      {selectedPlan4.payment}
                    </p>
                  </div>
                </div>

                {selectedPlan4.hasBonus ? (
                  <div className="rounded-[14px] flex justify-between items-start overflow-hidden shadow-[0_2px_10px_rgba(0,0,0,0.12)] pl-2.5 h-[105px]">
                    <div className="mt-2.5">
                      <p className="text-[18px] font-[750] mb-1">
                        {selectedPlan4.bonusTitle}
                      </p>
                      <p className="text-[14px] leading-[1.2]">
                        {selectedPlan4.bonusText}
                      </p>
                    </div>
                    <div className="w-full h-full max-w-[168px] border-2 border-white  bg-linear-to-r from-[#FF8500] to-[#FFB733] px-3 flex items-center justify-center rounded-[10px] py-1">
                      {/* Konditsioner rasmi bo'lsa shu yerga qo'yasan */}
                      {selectedPlan4.id === "25" && (
                        <Image
                          src="/konditsioner.png"
                          alt="Bonus"
                          width={115}
                          height={86}
                        />
                      )}

                      {selectedPlan4.id === "60" && (
                        <Image
                          src="/sovga-rasmlari.png"
                          alt="Bonus"
                          width={150}
                          height={79}
                        />
                      )}

                      {selectedPlan4.id === "120" && (
                        <Image
                          src="/sovga-rasmlari-2.png"
                          alt="Bonus"
                          width={159}
                          height={79}
                        />
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="bg-white rounded-[14px] border border-[#FFD6B6] px-3 py-2 shadow-[0_2px_8px_rgba(0,0,0,0.06)]  h-[105px]">
                    <p className="text-[11px] font-bold mb-1">BONUS</p>
                    <p className="text-[12px] leading-[1.2]">
                      {selectedPlan.bonusText}
                    </p>
                  </div>
                )}
              </div>

              <button
                onClick={() => {
                  setmodalIsOpen(true);
                  setopenModal(0);
                }}
                className="py-2.5 w-full bg-[#FF8500] border border-[#C26500] rounded-[100px] font-bold text-white shadow-[0px_4px_0px_0px_#C26500] text-[clamp(15px,3.5vw,20px)]"
              >
                Operator bilan bog’lanish {">>"}
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Page;

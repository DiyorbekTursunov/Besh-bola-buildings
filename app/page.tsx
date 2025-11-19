"use client";

import Image from "next/image";
import locationImg from "../public/location.png";
import cameraImg from "../public/camera.png";
import desingImg from "../public/desing.png";
import freeParkingImg from "../public/free-parking.png";

import Link from "next/link";
import { HouseBlock, houses } from "./components/home-card";
import { useEffect, useState } from "react";

export default function Home() {
  const [modalIsOpen, setmodalIsOpen] = useState(false); // operator form
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

            {/* === Operator modal ichidagi forma (Home component ichida) === */}
            <form
              className="bg-[#F3F3F3] border border-[#999999] rounded-3xl px-5 py-[22px] text-left shadow-[0_4px_0_0_rgba(0,0,0,0.12)] font-[Poppins]"
              action="/thank-you"
              method="GET" // 👈 GET bo‘lsin, queryga chiqishi uchun
            >
              <label className="block mb-3.5">
                <span className="block text-[14px] mb-1.5">
                  Ismingizni kiriting:
                </span>
                <input
                  required
                  type="text"
                  name="name" // 👈 URL’da ?name= ...
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
                      name="countryCode" // 👈 URL’da ?countryCode=%2B998
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
                    name="phone" // 👈 URL’da ?phone=111111111
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

  // ==== 2) Asosiy sahifa + narxlar modali ====
  return (
    <>
      <header className="bg-[#CEE2F2] rounded-br-[20px] rounded-bl-[20px]">
        <div className="container flex justify-between items-center">
          <Image src={"/logo.png"} alt="Logo" width={52} height={56} />

          <p className="leading-4 uppercase font-[750] text-[14px] font-[HelveticaNeueLTStd]">
            Besh bola <br /> <span className="text-[#E84B0F]">buildings</span>
          </p>
        </div>
      </header>

      <section className="flex flex-col justify-center">
        <Image
          className="absolute left-1/2 -translate-x-1/2 top-0 -z-10"
          src="/hero-img.png"
          alt="Hero"
          width={500}
          height={740}
        />
        <div className="max-w-[500px] mx-auto px-4">
          <div className="[@media(max-width:400px)]:pb-[250px] pb-[325px] relative">
            <h1 className="font-[750] leading-[130%] text-white font-[HelveticaNeueLTStd] text-[clamp(18px,6.2vw,32px)] mt-6">
              Orzuyingizdagi uy{" "}
              <span className="bg-[#F18107] text-white px-1">
                boshlang’ich to’lovsiz
              </span>{" "}
              <br /> va{" "}
              <span className="bg-[#F18107] text-white px-1">sovg’alar</span>{" "}
              bilan!
            </h1>
          </div>

          <button
            onClick={() => setmodalIsOpen(true)}
            className="w-full max-w-[433px] flex items-center justify-center font-bold gap-1 bg-[#FF8500] text-white [@media(max-width:400px)]:py-[25px] py-10 px-[30px] rounded-2xl font-[HelveticaNeueLTStd] [@media(max-width:400px)]:mb-[30px] mb-[60px] text-[clamp(12px,3.8vw,22px)] shadow-[0px_6px_0px_0px_#C26500] mx-auto"
          >
            <svg
              width="30"
              height="36"
              viewBox="0 0 30 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="[@media(max-width:400px)]:w-[22px]"
            >
              <path
                d="M22.5861 35.4664C21.1618 35.2679 19.2328 34.4738 16.4699 32.3826C13.1113 29.8318 10.5561 27.5531 7.43613 23.4343C4.42904 19.4563 3.04395 16.9591 1.26795 12.2981C-0.738797 7.03533 0.076656 4.53696 0.741558 3.51335C1.53404 2.28958 2.54362 1.63227 3.81584 1.01752C4.53723 0.676671 5.28859 0.402965 6.06027 0.199949C6.1376 0.178786 6.20961 0.158295 6.27396 0.139785C6.65788 0.0274198 7.23942 -0.142109 7.89601 0.21717C8.33443 0.455298 8.69791 0.868133 9.25542 1.59666C10.399 3.08886 11.805 6.25305 12.274 7.77623C12.5885 8.8025 12.7967 9.48013 12.698 10.1937C12.5816 11.0291 12.0715 11.6147 11.4644 12.2389C11.3507 12.3561 11.2384 12.4676 11.1296 12.5759C10.4725 13.2281 10.3213 13.422 10.3491 13.8095C10.4063 14.5888 11.3058 17.0101 13.0228 19.2777C14.7397 21.5452 16.7689 22.9869 17.5059 23.2547C17.8867 23.3934 18.1197 23.2964 18.9529 22.8265C19.0724 22.7591 19.1952 22.6893 19.3231 22.6201C20.1817 22.15 20.8531 21.8263 21.6689 21.9401L21.6733 21.9407C22.3833 22.0397 22.9482 22.4323 23.8844 23.0804C25.1055 23.926 27.856 26.1323 28.9867 27.6428C29.5367 28.3769 29.8361 28.8382 29.9462 29.3243C30.112 30.0562 29.7887 30.5666 29.5765 30.909C29.5411 30.9658 29.502 31.028 29.4602 31.0973C29.0517 31.7823 28.5809 32.4282 28.0539 33.0269C27.1165 34.0788 26.2054 34.8673 24.8082 35.295C24.0901 35.5198 23.3303 35.5783 22.5861 35.4664Z"
                fill="white"
              />
            </svg>
            Operator bilan bog’lanish
          </button>

          <div className="w-full mx-auto px-[30px] py-[13px] border-[3px] border-[#EA5015] text-center rounded-[20px] [@media(max-width:400px)]:mb-[30px] mb-[50px] max-w-[clamp(280px,80vw,374px)]">
            <h2 className="text-[#EA5015] font-[750] font-[HelveticaNeueLTStd] text-[clamp(22px,5vw,26px)]">
              Shoshiling!
            </h2>

            <p className="font-medium text-[clamp(12px,3.4vw,18px)]">
              Aksiyadagi xonadonlar faqat 10 dona
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#FFF6ED] pt-[18px] pb-10">
        <div className="max-w-[374px] px-4 mx-auto space-y-[83px]">
          {houses.map((house) => (
            <HouseBlock key={house.id} {...house} setopenModal={setopenModal} />
          ))}
        </div>
      </section>

      <section className="bg-[#FBFBFB] pt-8 [@media(max-width:400px)]:pb-0 pb-10 font-[HelveticaNeueLTStd]">
        <div className="max-w-[444px] mx-auto px-4 mb-[50px]">
          <h2 className="font-[750] leading-[120%] text-[#111111] font-[HelveticaNeueLTStd] mb-5 text-[clamp(16px,5vw,24px)]">
            Nima uchun <span className="text-[#F18107]">Marg’ilon City</span>{" "}
            <br />
            dan uy olishingiz kerak?
          </h2>

          <div className="grid grid-cols-2 gap-2.5 mb-2.5">
            <div className="flex items-center justify-between border border-[#FFB45A] rounded-2xl px-2.5 py-3 relative shadow-[0px_2px_15px_0px_#EA50154D]">
              <p className="font-bold leading-[1.2] [@media(max-width:400px)]:pb-6 pb-11 text-[clamp(12px,3.3vw,17px)] max-w-[clamp(70px,22vw,90px)]">
                Qulay <br /> joylashuv
              </p>

              <Image
                src={locationImg}
                alt="Qulay joylashuv"
                width={55}
                height={94}
                className="absolute right-0 [@media(max-width:400px)]:w-10"
              />
            </div>

            <div className="flex items-center justify-between border border-[#FFB45A] rounded-2xl px-2.5 py-3 relative shadow-[0px_2px_15px_0px_#EA50154D]">
              <p className="font-bold leading-[1.2] [@media(max-width:400px)]:pb-6 pb-11 text-[clamp(12px,3.3vw,17px)] max-w-[clamp(70px,22vw,90px)]">
                24/7 <br /> Xavfsizlik
              </p>

              <Image
                src={cameraImg}
                alt="24/7 xavfsizlik"
                width={83}
                height={81}
                className="absolute right-0 [@media(max-width:400px)]:w-[50px]"
              />
            </div>
          </div>

          <div className="mb-2.5">
            <div className="border border-[#FFB45A] rounded-2xl px-3.5 py-3.5 relative shadow-[0px_2px_15px_0px_#EA50154D]">
              <p className="font-bold leading-[1.2] [@media(max-width:400px)]:pb-6 pb-11 text-[clamp(12px,3.3vw,17px)]">
                Zamonaviy dizayn <br /> va sifat
              </p>

              <Image
                src={desingImg}
                alt="Zamonaviy dizayn va sifat"
                width={448}
                height={71}
                className="w-full bottom-0 left-0 absolute"
              />
            </div>
          </div>

          <div>
            <div className="border border-[#FFB45A] rounded-2xl px-3.5 py-3.5 relative overflow-hidden shadow-[0px_2px_15px_0px_#EA50154D]">
              <p className="font-bold leading-[1.2] pb-11 text-[clamp(12px,3.3vw,17px)]">
                Bepul Parkovka
              </p>

              <Image
                src={freeParkingImg}
                alt="Bepul parkovka"
                width={130}
                height={60}
                className="w-full [@media(max-width:400px)]:bottom-[-50px] bottom-[-68px] left-0 absolute"
              />
            </div>
          </div>
        </div>

        <div className="px-4">
          <button
            onClick={() => setmodalIsOpen(true)}
            className="flex items-center justify-center font-bold gap-1 bg-[#FF8500] text-white [@media(max-width:400px)]:py-[25px] py-10 px-[30px] rounded-2xl font-[HelveticaNeueLTStd] [@media(max-width:400px)]:mb-11 mb-[60px] mx-auto text-[clamp(12.3px,3.4vw,18px)] shadow-[0px_4px_0px_0px_#C26500]"
          >
            <svg
              width="30"
              height="36"
              viewBox="0 0 30 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="[@media(max-width:400px)]:w-[22px]"
            >
              <path
                d="M22.5861 35.4664C21.1618 35.2679 19.2328 34.4738 16.4699 32.3826C13.1113 29.8318 10.5561 27.5531 7.43613 23.4343C4.42904 19.4563 3.04395 16.9591 1.26795 12.2981C-0.738797 7.03533 0.076656 4.53696 0.741558 3.51335C1.53404 2.28958 2.54362 1.63227 3.81584 1.01752C4.53723 0.676671 5.28859 0.402965 6.06027 0.199949C6.1376 0.178786 6.20961 0.158295 6.27396 0.139785C6.65788 0.0274198 7.23942 -0.142109 7.89601 0.21717C8.33443 0.455298 8.69791 0.868133 9.25542 1.59666C10.399 3.08886 11.805 6.25305 12.274 7.77623C12.5885 8.8025 12.7967 9.48013 12.698 10.1937C12.5816 11.0291 12.0715 11.6147 11.4644 12.2389C11.3507 12.3561 11.2384 12.4676 11.1296 12.5759C10.4725 13.2281 10.3213 13.422 10.3491 13.8095C10.4063 14.5888 11.3058 17.0101 13.0228 19.2777C14.7397 21.5452 16.7689 22.9869 17.5059 23.2547C17.8867 23.3934 18.1197 23.2964 18.9529 22.8265C19.0724 22.7591 19.1952 22.6893 19.3231 22.6201C20.1817 22.15 20.8531 21.8263 21.6689 21.9401L21.6733 21.9407C22.3833 22.0397 22.9482 22.4323 23.8844 23.0804C25.1055 23.926 27.856 26.1323 28.9867 27.6428C29.5367 28.3769 29.8361 28.8382 29.9462 29.3243C30.112 30.0562 29.7887 30.5666 29.5765 30.909C29.5411 30.9658 29.502 31.028 29.4602 31.0973C29.0517 31.7823 28.5809 32.4282 28.0539 33.0269C27.1165 34.0788 26.2054 34.8673 24.8082 35.295C24.0901 35.5198 23.3303 35.5783 22.5861 35.4664Z"
                fill="white"
              />
            </svg>
            Operator bilan bog’lanish
          </button>
        </div>
      </section>

      <section>
        <>
          <h2 className="text-[clamp(24px,5.5vw,32px)] leading-[130%] font-[750] font-[HelveticaNeueLTStd] text-center mb-4">
            Manzilimiz
          </h2>

          <div className="max-w-[500px] mx-auto w-full overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6194403.047776734!2d62.66547909486545!3d40.70456716190876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b20a5d676b1%3A0xca0a6dad7e841e20!2z0KPQt9Cx0LXQutC40YHRgtCw0L0!5e0!3m2!1sru!2s!4v1763468568867!5m2!1sru!2s"
              width="600"
              height="450"
              style={{ border: "0" }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="bg-[#1A1A1A] px-4 py-3">
            <div className="container flex items-center justify-between gap-3">
              <div className="flex items-center">
                <Image src="/logo.png" alt="BBB logo" width={52} height={56} />
              </div>

              <div className="flex items-end flex-col gap-[9px]">
                <div className="flex items-center gap-1.5">
                  <Link href="#" target="_blank" rel="noopener noreferrer">
                    <Image
                      src="/telegram-logo.png"
                      alt="Telegram"
                      width={25}
                      height={25}
                      className="w-5 h-5 object-contain"
                    />
                  </Link>
                  <Link href="" target="_blank" rel="noopener noreferrer">
                    <Image
                      src="/instagram-logo.png"
                      alt="Instagram"
                      width={25}
                      height={25}
                      className="w-5 h-5 object-contain"
                    />
                  </Link>
                </div>

                <a
                  href="tel:+998785559090"
                  className="flex items-center gap-y-2.5 gap-x-[7px] text-white rounded-full font-bold underline text-[18px]"
                >
                  <Image
                    src="/phone-logo.png"
                    alt="Telefon"
                    width={22}
                    height={22}
                    className="w-3.5 h-3.5 object-contain"
                  />
                  <span>+998 78-555-90-90</span>
                </a>
              </div>
            </div>
          </div>
        </>
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
}

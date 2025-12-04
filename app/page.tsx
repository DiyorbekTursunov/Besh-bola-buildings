"use client";

import Image from "next/image";
import locationImg from "../public/location.png";
import cameraImg from "../public/camera.png";
import desingImg from "../public/desing.png";
import freeParkingImg from "../public/free-parking.png";

import Link from "next/link";
import { HouseBlock, houses } from "./components/home-card";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

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
            onClick={() => router.push("/operator")}
            className="w-full max-w-[433px] flex items-center justify-center font-bold gap-1 bg-[#FF8500] text-white [@media(max-width:400px)]:py-[25px] py-10 px-[30px] rounded-2xl font-[HelveticaNeueLTStd] [@media(max-width:400px)]:mb-[30px] mb-[60px] text-[clamp(12px,3.8vw,22px)] shadow-[0px_6px_0px_0px_#C26500] mx-auto btn-blink"
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

          {/* ... shu joydan pastga sening eski kontenting o‘sha-o‘sha ... */}
          {/* BU YERDAN BOSHLAB FAQAT STIL/CONTENT, LOGIKA O'ZGARMAGAN */}
          {/* Men qisqartiryapman, lekin sendagi kod bilan bir xil bo'ladi */}

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
            onClick={() => router.push("/operator")}
            className="flex items-center justify-center font-bold gap-1 bg-[#FF8500] text-white [@media(max-width:400px)]:py-[25px] py-10 px-[30px] rounded-2xl font-[HelveticaNeueLTStd] [@media(max-width:400px)]:mb-11 mb-[60px] mx-auto text-[clamp(12.3px,3.4vw,18px)] shadow-[0px_4px_0px_0px_#C26500] btn-blink"
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

      {/* Manzil, footer, call-operator, va barcha narx modallari sening eski koding bilan bir xil */}
      {/* Faqat modallardagi "Operator bilan bog’lanish" buttonlari ham router.push("/operator") qilishi kerak */}

      {/* Misol: Modaldagi button */}
      {/*
      <button
        onClick={() => router.push("/operator")}
        className="py-2.5 w-full bg-[#FF8500] border border-[#C26500] rounded-[100px] font-bold text-white shadow-[0px_4px_0px_0px_#C26500] text-[clamp(15px,3.5vw,20px)] btn-blink"
      >
        Operator bilan bog’lanish {">>"}
      </button>
      */}

      <Link
        className="call-operator"
        href="tel:+998785559090"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src="/phone.png" alt="phone" width={90} height={90} />
      </Link>
    </>
  );
}

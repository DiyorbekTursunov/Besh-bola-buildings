"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

// ---- DATA: kartalar ----
export const houses = [
  {
    id: 1,
    headingTop: "Yosh oilalar uchun",
    headingMid: "maxsus 1 xonalik",
    headingBottom: "xonadonimiz",
    title: "1-XONADON 32.86m²",
    floor: "3-qavat",
    repaired: "Ta’mirlangan",
    rooms: "1 xonalik",
    images: ["/house-img-1.png", "/house-img-2.png"],
  },
  {
    id: 2,
    headingTop: "Atigi 8 dona qolgan",
    headingMid: "2 xonalik xonadonimiz",
    headingBottom: "",
    title: "2-XONADON 32m²",
    floor: "2-qavat",
    repaired: "Ta’mirlangan",
    rooms: "2 xonalik",
    images: ["/house-img-3.png", "/house-img-4.png"],
  },
  {
    id: 3,
    headingTop: "10 dona qolgan",
    headingMid: "3 xonalik xonadonimiz",
    headingBottom: "",
    title: "3-XONADON 56.4m²",
    floor: "3-qavat",
    repaired: "Ta’mirlangan",
    rooms: "3 xonalik",
    images: ["/house-img-5.png", "/house-img-6.png"],
  },
  {
    id: 4,
    headingTop: "Eng ko’p sotilgan",
    headingMid: "2 xonalik xonadonimiz",
    headingBottom: "",
    title: "4-XONADON 32m²",
    floor: "3-qavat",
    repaired: "Ta’mirlangan",
    rooms: "2 xonalik",
    images: ["/house-img-7.png", "/house-img-8.png"],
  },
];

// 🔹 Bitta kartka + heading bloki
export function HouseBlock({
  id,
  setopenModal,
  headingTop,
  headingMid,
  headingBottom,
  title,
  floor,
  repaired,
  rooms,
  images,
}: {
  id: number;
  setopenModal: any;
  headingTop: string;
  headingMid: string;
  headingBottom: string;
  title: string;
  floor: string;
  repaired: string;
  rooms: string;
  images: string[];
}) {
  return (
    <>
      <h2 className="font-[750] font-[HelveticaNeueLTStd] mb-2.5 leading-[120%] text-[clamp(21px,5vw,26px)]">
        {headingTop} <br /> {headingMid}
        {headingBottom && (
          <>
            <br /> {headingBottom}
          </>
        )}
      </h2>
      <div className="max-w-[374px] mx-auto border border-[#000000] p-[15px] rounded-[20px] bg-white">
        {/* IMAGE SWIPER ONLY HERE */}
        <div className="mb-2.5">
          <Swiper
            modules={[Pagination]}
            slidesPerView={1}
            spaceBetween={8}
            pagination={{ clickable: true }}
            className="house-image-swiper"
          >
            {images.map((src, idx) => (
              <SwiperSlide key={idx}>
                <Image
                  src={src}
                  alt={`${title} rasmi ${idx + 1}`}
                  width={344}
                  height={216}
                  className="w-full h-auto rounded-xl"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <h3 className="font-[750] font-[HelveticaNeueLTStd] mb-2.5 text-center text-[clamp(16px,1.8vw,28px)]">
          {title}
        </h3>

        <div className="mb-5">
          <div className="flex gap-2.5 items-center mb-2.5">
            <span className="w-full bg-black px-[9px] py-1.5 rounded-[5px] text-white max-w-[clamp(141px,35vw,185px)] text-[clamp(14px,3.5vw,18px)]">
              Nechanchi qavat:
            </span>

            <span className="font-[590] text-[clamp(18px,5vw,22px)]">
              {floor}
            </span>
          </div>

          <div className="flex gap-2.5 items-center mb-2.5">
            <span className="w-full bg-black px-[9px] py-1.5 rounded-[5px] text-white max-w-[clamp(141px,35vw,185px)] text-[clamp(14px,3.8vw,18px)]">
              Ta’mirlanganmi:
            </span>

            <span className="font-[590] text-[clamp(18px,4.5vw,19px)]">
              {repaired}
            </span>
          </div>

          <div className="flex gap-2.5 items-center">
            <span className="w-full bg-black px-[9px] py-1.5 rounded-[5px] text-white max-w-[clamp(141px,35vw,185px)] text-[clamp(14px,3.5vw,18px)]">
              Necha xonalik:
            </span>

            <span className="font-[590] text-[clamp(18px,5vw,22px)]">
              {rooms}
            </span>
          </div>
        </div>

        <button
          onClick={() => setopenModal(id)}
          className="py-2.5 w-full bg-[#FF8500] border border-[#C26500] rounded-[100px] font-bold text-white shadow-[0px_4px_0px_0px_#C26500] text-[clamp(15px,3.5vw,20px)]"
        >
          Narxlar va sovg’alarni bilish {">>"}
        </button>
      </div>
    </>
  );
}

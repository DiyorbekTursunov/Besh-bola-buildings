"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

// ---- DATA: kartalar ----
export const secoundHouses = [
  {
    id: 1,
    title: "1-XONADON 32.86m²",
    floor: "3-qavat",
    repaired: "Ta’mirlangan",
    rooms: "1 xonalik",
    images: ["/house-img-1.png", "/house-img-2.png"],
  },
  {
    id: 2,
    title: "2-XONADON 32m²",
    floor: "2-qavat",
    repaired: "Ta’mirlangan",
    rooms: "2 xonalik",
    images: ["/house-img-3.png", "/house-img-4.png"],
  },
  {
    id: 3,
    title: "3-XONADON 56.4m²",
    floor: "3-qavat",
    repaired: "Ta’mirlangan",
    rooms: "3 xonalik",
    images: ["/house-img-5.png", "/house-img-6.png"],
  },
  {
    id: 4,
    title: "4-XONADON 32m²",
    floor: "3-qavat",
    repaired: "Ta’mirlangan",
    rooms: "2 xonalik",
    images: ["/house-img-7.png", "/house-img-8.png"],
  },
];

// 🔹 Bitta kartka + heading bloki
export function HouseBlockSecont({
  title,
  floor,
  repaired,
  rooms,
  images,
}: {
  title: string;
  floor: string;
  repaired: string;
  rooms: string;
  images: string[];
}) {
  return (
    <>
      <div className="max-w-[374px] mx-auto border border-[#000000] p-[15px] rounded-[20px] bg-white">
        {/* IMAGE SWIPER ONLY HERE */}
        <div className="mb-[10px]">
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
                  className="w-full h-auto rounded-[12px]"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <h3 className="font-[750] font-[HelveticaNeue] mb-[10px] text-center text-[clamp(20px,1.8vw,28px)]">
          {title}
        </h3>

        <div className="mb-[20px]">
          <div className="flex gap-[10px] items-center mb-[10px]">
            <span className="w-full bg-[#000] px-[9px] py-[6px] rounded-[5px] text-[#fff] max-w-[clamp(141px,35vw,185px)] text-[clamp(14px,3.5vw,18px)]">
              Nechanchi qavat:
            </span>

            <span className="font-[590] text-[clamp(18px,5vw,22px)]">
              {floor}
            </span>
          </div>

          <div className="flex gap-[10px] items-center mb-[10px]">
            <span className="w-full bg-[#000] px-[9px] py-[6px] rounded-[5px] text-[#fff] max-w-[clamp(141px,35vw,185px)] text-[clamp(14px,3.8vw,18px)]">
              Ta’mirlanganmi:
            </span>

            <span className="font-[590] text-[clamp(18px,5vw,22px)]">
              {repaired}
            </span>
          </div>

          <div className="flex gap-[10px] items-center">
            <span className="w-full bg-[#000] px-[9px] py-[6px] rounded-[5px] text-[#fff] max-w-[clamp(141px,35vw,185px)] text-[clamp(14px,3.5vw,18px)]">
              Necha xonalik:
            </span>

            <span className="font-[590] text-[clamp(18px,5vw,22px)]">
              {rooms}
            </span>
          </div>
        </div>

        <button className="py-[10px] w-full bg-[#FF8500] border border-[#C26500] rounded-[100px] font-[700] text-[#fff] shadow-[0px_4px_0px_0px_#C26500] text-[clamp(15px,3.5vw,20px)]">
          Narxlar va sovg’alarni bilish {">>"}
        </button>
      </div>
    </>
  );
}

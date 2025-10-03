import React from "react";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";
import Image from "next/image";

export function CowImageCluster() {
  const items = [
    {
      key: "1",
      image: "/images/cow_1.png",
      className: "absolute top-2 left-[16%]",
    },
    {
      key: "2",
      image: "/images/cow_2.png",
      className: "absolute top-30 left-[41%]",
    },
    {
      key: "3",
      image: "/images/cow_3.png",
      className: "absolute lg:top-50 lg:left-[8%] top-38 left-[25%]",
    },
    {
      key: "4",
      image: "/images/cow_4.png",
      className: "absolute lg:top-80 lg:left-[46%] top-6 left-[35%]",
    },
    {
      key: "5",
      image: "/images/cow_5.png",
      className: "absolute top-4 left-[50%]",
    },
    {
      key: "6",
      image: "/images/cow_6.png",
      className: "absolute lg:top-90 lg:left-[11%] top-54 left-[11%]",
    },
    {
      key: "7",
      image: "/images/cow_7.png",
      className: "absolute lg:top-70 lg:left-[41%] top-58 left-[45%]",
    },
    {
      key: "8",
      image: "/images/cow_8.png",
      className: "absolute lg:top-50 lg:left-[51%] top-30 left-[55%]",
    },
  ];
  return (
    <DraggableCardContainer className="relative flex h-[400px] lg:h-[700px] w-full items-center justify-center overflow-hidden rounded-2xl">
      {items.map((item) => (
        <DraggableCardBody key={item.key} className={item.className}>
          <Image
            src={item.image}
            alt="Cow Image"
            width={200}
            height={200}
            className="pointer-events-none relative z-10 size-40 lg:size-70 object-cover"
          />
        </DraggableCardBody>
      ))}
    </DraggableCardContainer>
  );
}

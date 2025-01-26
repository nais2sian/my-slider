import { SlideItem } from "@/data/slides";
import Image from "next/image";

interface ServerSliderProps {
  slides: SlideItem[];
}

export default function ServerSlider({ slides }: ServerSliderProps) {
  return (
    <div
      data-slider-track
      className="
        flex
        gap-4
        transition-transform
        duration-300
        ease-in-out
        relative
      "
    >
      {slides.map((slide) => (
        <div
          key={slide.id}
          className="
            flex-shrink-0
            w-full
            h-[212px]
            rounded-[8px]
            xs:max-w-[358px]
            lg:max-w-[412px]
            bg-lightGray
          "
        >
          <div className="flex flex-col p-[16px] lg:p-[24px] justify-between h-full">
            <div className="gap-[24px] flex flex-row lg:flex-col lg:justify-between items-center lg:h-full lg:items-start">
              <div
                className="
                  relative
                  w-[60px]
                  h-[60px]
                  lg:w-[80px]
                  lg:h-[80px]
                  flex-shrink-0
                "
              >
                <Image
                  src={slide.imageUrl}
                  alt={slide.title}
                  fill
                  className="object-contain"
                />
              </div>
              <h3
                className="
                  lg:text-[32px]
                  text-[24px]
                  leading-[28px]
                  font-pp
                "
              >
                {slide.title}
              </h3>
            </div>
            <p
              className="
                lg:hidden
                text-[14px]
                font-pp
                font-normal
                leading-[20px]
                tracking-[0.02em]
                pr-[13px]
              "
            >
              {slide.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

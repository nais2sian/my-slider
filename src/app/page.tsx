import Slider from "./components/Slider";
import { slidesData } from "@/data/slides";

export default function Home() {
  return (
    <main>
      <div className="ml-4 mr-4">
        <div className="flex mb-10 h-[68px] items-center lg:border-b lg:border-[#D1D1D1] w-full">
          <div className="grid lg:grid-cols-[1fr_2fr_1fr] w-full">
            <div className="lg:border-none border-b border-[#D1D1D1] lg:flex text-[32px] leading-[36px] font-pp text-accent">
              1.0
            </div>
            <h1 className="text-[32px] leading-[36px] font-pp text-accent">
              Наши услуги
            </h1>
          </div>
        </div>
        <Slider slides={slidesData} />
      </div>
    </main>
  );
}

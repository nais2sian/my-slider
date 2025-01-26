import ServerSlider from "./ServerSlider";
import SliderClient from "./SliderClient";
import { SlideItem } from "@/data/slides";

export default function Slider({ slides }: { slides: SlideItem[] }) {
  return (
    <section className="w-full relative">
      <SliderClient slides={slides} />
      <ServerSlider slides={slides} />
    </section>
  );
}

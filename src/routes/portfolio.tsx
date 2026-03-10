import { createFileRoute } from "@tanstack/react-router";
import ImageSlider from "#/components/ImageSlider";
import flowerImg from "../images/flower.jpg";
import lighthouseImg from "../images/lighthouse.jpg";
import dandelion from "../images/dandelion.jpg";
import sunsetImg from "../images/sunset.jpg";

export const Route = createFileRoute("/portfolio")({
  component: RouteComponent,
});

const images = [
  lighthouseImg,
  flowerImg,
  dandelion,
  sunsetImg,
  lighthouseImg,
  flowerImg,
  dandelion,
  sunsetImg,
  // Add more image URLs here
];

function RouteComponent() {
  return (
    <>
      <section
        className="section-5 sections  flex flex-col items-center justify-center rounded-xl h-[80vh]"
        id="portfolio"
      >
        <h2 className="portfolio-title section-title text-5xl text-center mt-17.5 p-2.5 w-auto rounded-xl mb-40">
          Portfolio
        </h2>
        <div className="flex flex-col pt-32 pl-9 pr-9 bg-[var(--bg-transparent)] shadow-[var(--box-shadow)] w-[90%] h-[80%] rounded-xl">
          <ImageSlider images={images} />
        </div>
      </section>
    </>
  );
}

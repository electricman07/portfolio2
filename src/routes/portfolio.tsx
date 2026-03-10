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
        className="section-5 sections bg-[var(--bg-primary)] flex flex-col items-center justify-center rounded-xl shadow-[var(--box-shadow)]"
        id="portfolio"
      >
        <h2 className="portfolio-title section-title text-5xl text-center mt-17.5 p-2.5 w-auto rounded-xl">
          Portfolio
        </h2>
        <div className="flex flex-col ">
          <ImageSlider images={images} />
        </div>
      </section>
    </>
  );
}

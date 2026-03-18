import { createFileRoute } from "@tanstack/react-router";
import ImageSlider from "#/components/ImageSlider";
import Rylee from "/images/websites/rylee.png";
import Rylee2 from "/images/websites/Rylee2.png";

export const Route = createFileRoute("/portfolio")({
  component: RouteComponent,
});

const images = [
  Rylee,
  Rylee2,
  Rylee,
  Rylee2,
  // Add more image URLs here
];

function RouteComponent() {
  return (
    <>
      <section
        className="section-5 sections  flex flex-col items-center justify-center rounded-xl h-full"
        id="portfolio"
      >
        <h2 className="portfolio-title section-title text-2xl md:text-5xl text-center mt-17.5 p-2.5 w-auto rounded-xl mb-40">
          Portfolio
        </h2>
        <div className="flex flex-col  pl-9 pr-9  w-[90%] h-[80%] rounded-xl">
          <ImageSlider images={images} />
        </div>
      </section>
    </>
  );
}

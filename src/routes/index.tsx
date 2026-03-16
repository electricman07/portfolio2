import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: App });

function App() {
  return (
    <main className="container flex flex-col justify-center items-center">
      <section
        className="header-container h-screen w-full flex-col sm:flex-row flex gap-10 items-center sm:justify-around"
        id="home"
      >
        <div className="image-container w-[50%} flex">
          <div className="image-src h-50 w-50 md:h-75 md:w-75 rounded-[50%] mt-10 sm:mr-10">
            <img
              className="md:ml-12 md:mt-12"
              src="/images/Avatar200.png"
              alt=""
            />
          </div>
        </div>

        <div className="title-container flex flex-col justify-center items-center w-[80%] h-[15%] lg:w-[50%] lg:h-[25%] rounded-xl gap-10 text-(--text-primary) ">
          <div className="title flex justify-center">
            <span className="title-span mr-2.5">I am </span>
            <h2 className="main-title text-2xl md:text-3xl lg:text-5xl m-0 italic tracking-wide font-[grandstander]">
              Glen Popowich
            </h2>
          </div>
          <h3 className="sub-title text-[0.75rem] md:text-xl lg:text-3xl m-0 lg:mt-1.5">
            Web Designer / Developer
          </h3>
        </div>
      </section>
    </main>
  );
}

import { Maps } from "../../components/Maps/Maps";

export const Dashbord = () => {
  return (
    <>
      <section class="relative bg-white">
        <img
          class="absolute inset-0 object-[75%] sm:object-[25%] object-cover w-full h-full opacity-25 sm:opacity-100"
          src="https://ezlogz.com/frontend_landing/public/parts/images/passenger/pass.jpg"
          alt="Couple on a bed with a dog"
        />

        <div class="hidden sm:block sm:inset-0 sm:absolute sm:bg-gradient-to-r sm:from-white sm:to-transparent"></div>

        <div class="relative max-w-screen-xl px-4 py-32 mx-auto lg:h-screen lg:items-center lg:flex">
          <div class="max-w-xl text-center sm:text-left">
            <h1 class="text-3xl font-extrabold sm:text-5xl">
              Let us find your
              <strong class="font-extrabold text-rose-700 sm:block">
                Green University Bus.
              </strong>
            </h1>

            <p class="max-w-lg mt-4 sm:leading-relaxed sm:text-xl">
              A Real Time Bus Tracking Solution for Green University Students.
            </p>

            <div class="flex flex-wrap gap-4 mt-8 text-center">
              <a
                class="block w-full px-12 py-3 text-sm font-medium text-white rounded shadow bg-rose-600 sm:w-auto active:bg-rose-500 hover:bg-rose-700 focus:outline-none focus:ring"
                href="/get-started"
              >
                Get Started
              </a>

              <a
                class="block w-full px-12 py-3 text-sm font-medium bg-white rounded shadow text-rose-600 sm:w-auto hover:text-rose-700 active:text-rose-500 focus:outline-none focus:ring"
                href="/about"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
      <div>
        <Maps />
      </div>
    </>
  );
};

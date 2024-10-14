export default function Hero() {
  return (
    <section id="home" className="relative hero-section text-[#945F7D] h-screen w-screen flex flex-col items-center justify-center">
      <div className="container mx-auto text-center mb-32 sm:mb-40 lg:mb-44 px-4 sm:px-0">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
          Crafting seamless digital experiences.
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl font-medium mb-6 sm:mb-8">
          Blending creativity, usability, and technology to design products that
          make life easier for users.
        </p>
        <button
          type="button"
          className="text-[#945F7D] border border-[#945F7D] font-medium rounded-full text-sm sm:text-base lg:text-lg px-4 py-2 sm:px-5 sm:py-2.5 lg:px-6 lg:py-3 transition-all duration-300 ease-in-out"
        >
          <span>Explore Now</span>
        </button>
      </div>
      <div className="absolute w-[12rem] sm:w-[22rem] lg:w-[42rem] bottom-0 z-10">
        <img
          src="/images/CAT.png"
          alt="Cute Cat"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute w-full h-16 sm:h-32 lg:h-40 bottom-0 bg-white rounded-t-[60px] sm:rounded-t-[100px] z-0"></div>
    </section>
  );
}

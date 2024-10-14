export default function About() {
  return (
    <div id="about" className="about-container w-screen min-h-screen bg-white flex flex-col md:flex-row">
      {/* Left Text Section */}
      <div className="p-6 md:p-16 lg:p-28 w-full md:w-1/2 flex flex-col gap-4">
        <span className="text-[#42434F] text-lg sm:text-xl lg:text-2xl">
          Hi, I'm
        </span>
        <span className="text-[#945F7D] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-[family-name:var(--font-AlomaniByCattobiens-Regular)]">
          firstyara putri
        </span>
        <span className="text-[#42434F] text-sm sm:text-lg lg:text-2xl font-regular">
          an UI/UX designer who loves learning new things! I have 6 months of
          experience in UI/UX and 1 year as a backend web developer. I've been
          focused on both fields since vocational high school and am currently
          pursuing an undergraduate Bachelor's program in Computer Science. I
          enjoy learning how to design UI and then developing it!
        </span>
        <span className="text-[#42434F] text-sm sm:text-lg lg:text-2xl">
          When I'm not into coding or designing, I love listening to music,
          watching movies, and of course, eating ramen!
        </span>
      </div>

      {/* Right Image Section */}
      <div className="p-6 md:p-16 lg:p-28 w-full md:w-1/2 flex items-center justify-center">
        <div className="w-[16rem] sm:w-[24rem] md:w-[30rem]">
          <img
            src="/images/Char1.png"
            alt="Cute Char"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

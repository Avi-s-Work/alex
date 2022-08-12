import Image from "next/image";

export default function Testimonial() {
  return (
    <>
      {/* Heading  */}
      <div className="flex flex-col items-center pb-14 pt-40">
        <div>
          <h1
            style={{ lineHeight: "63px" }}
            className="text-5xl text-center font-noticia"
          >
            Our Testimonial
          </h1>
        </div>
        <div className="flex mt-1">
          <Image
            src="/images/Heading_Lines/testimonial_line.png"
            alt="testimonial_line"
            width="284"
            height="11"
          />
        </div>
      </div>
      <section className="flex flex-col items-center justify-center pb-40">
        {/* Main Part */}
        {/* Gray Portion  */}
        <div
          style={{ width: "84%", height: "265px" }}
          className="bg-gray-50 relative border border-red-500"
        ></div>
        {/* Cards */}
        <div className="absolute grid grid-cols-2 gap-x-8">
          {/* Single Card */}
          <div className="bg-white rounded border border-red-500 shadow-lg flex flex-col items-center py-14 px-4">
            <div className="flex items-center justify-end">
              <Image
                src="/images/cloud.png"
                alt="cloud"
                width="66"
                height="44"
              />
            </div>
          </div>
          {/* Single Card */}
          <div className="bg-white rounded shadow-lg flex flex-col items-center pb-14 px-4">
            <div className="flex items-center justify-end">
              <div className="pt-8">
                <Image
                  src="/images/Idea.png"
                  alt="Idea"
                  width="110"
                  height="110"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

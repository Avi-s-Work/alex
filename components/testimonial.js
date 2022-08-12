import Image from "next/image";

export default function Testimonial() {
  return (
    <>
      {/* Heading  */}
      <div className="w-96 mx-auto grid grid-rows-2 items-center pb-14 pt-40">
        <div>
          <h1 className="text-5xl text-center font-noticia">Our Testimonial</h1>
        </div>
        <div className="flex justify-end mb-3">
          <Image
            src="/images/Heading_Lines/testimonial_line.png"
            alt="testimonial_line"
            width="284"
            height="11"
          />
        </div>
      </div>
      <section className="flex flex-col items-center justify-center pb-40">
        {/* Gray Portion  */}
        <div
          style={{ width: "66%", height: "685px" }}
          className="bg-gray-50 relative border border-red-500"
        ></div>
        {/* Cards */}
        <div className="absolute grid grid-cols-2 items-center w-full xl:px-96 lg:px-20 md:px-20 sm:px-10 px-10">
          {/* Single Card */}
          <div className="border border-red-500 flex items-base ml-10">
            <div>
              <Image
                src="/images/left_quote.png"
                alt="left_quote"
                width="460"
                height="460"
              />
            </div>
            <div className="flex flex-col">
              <p className="text-lg text-gray-400">
                Lorem ipsum dolor sit amet, conse ctetur addipis cing elit.
                Malesa est sagittis et nulla leo ut nulsla aliquam. Nisi,
                fermentum venentis enim vel sussp end wergisse eu magnis libero
                orci. Males uasda eget gravda et. Vivmus arcu laoreet gravida
                purus cras. Et laoreet sit feugiat vehicula dufzi, eme tum
                venentis enim vel suspend wergisse eu maAgnis .
              </p>
            </div>
          </div>
          {/* Single Card */}
          <div className="border border-red-500 flex items-center justify-end mr-10">
            <Image src="/images/lady.png" alt="lady" width="445" height="525" />
          </div>
        </div>
      </section>
    </>
  );
}

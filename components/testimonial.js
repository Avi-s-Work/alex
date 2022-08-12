import Image from "next/image";
import Link from "next/link";

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
      <section className="flex flex-col items-center justify-center">
        {/* Gray Portion  */}
        <div
          style={{ width: "66%", height: "685px" }}
          className="bg-gray-50 relative "
        ></div>
        {/* Cards */}
        <div className="absolute flex items-base justify-center w-full xl:px-96 lg:px-20 md:px-20 sm:px-10 px-10">
          {/* Single Card */}
          <div className=" flex">
            <div className="mr-4">
              <Image
                src="/images/left_quote.png"
                alt="left_quote"
                width="60"
                height="60"
              />
            </div>
            <div className="flex flex-col mt-14 mr-10">
              <p style={{ width: "538px" }} className=" text-2xl text-gray-400">
                Lorem ipsum dolor sit amet, conse ctetur addipis cing elit.
                Malesa est sagittis et nulla leo ut nulsla aliquam. Nisi,
                fermentum venentis enim vel sussp end wergisse eu magnis libero
                orci. Males uasda eget gravda et. Vivmus arcu laoreet gravida
                purus cras. Et laoreet sit feugiat vehicula dufzi, eme tum
                venentis enim vel suspend wergisse eu maAgnis .
              </p>
              {/* Profile  */}
              <div className="flex items-center gap-x-4 mt-8">
                <div>
                  <Image
                    src="/images/lady_DP.png"
                    alt="lady_DP"
                    width="70"
                    height="70"
                  />
                </div>
                <div className="flex flex-col">
                  <strong className="text-xl">Ronald Richards</strong>
                  <span className="text-base text-gray-400">
                    CEO, Themeexpart Limited
                  </span>
                </div>
              </div>
              {/* Next / Prev */}
              <div className="flex items-center gap-x-5 mt-10">
                <div className="cursor-pointer">
                  <Link href="/">
                    <Image
                      src="/images/left_arrow.png"
                      alt="left_arrow"
                      width="50"
                      height="50"
                    />
                  </Link>
                </div>
                <div className="cursor-pointer">
                  <Link href="/">
                    <Image
                      src="/images/right_arrow.png"
                      alt="right_arrow"
                      width="50"
                      height="50"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* Single Card */}
          <div className=" flex items-center justify-end">
            <Image src="/images/lady.png" alt="lady" width="445" height="525" />
          </div>
        </div>
      </section>
    </>
  );
}

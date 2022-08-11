import Image from "next/image";
import Link from "next/link";
export default function services() {
  return (
    <>
      <section className="flex flex-col items-center pt-28">
        {/* Heading  */}
        <div className="grid grid-rows-2">
          <div>
            <h1 className="text-5xl font-noticia text-center">
              Providing Services
            </h1>
          </div>
          <div className="flex items-center justify-end mb-4">
            <Image
              src="/images/Heading_Lines/services_line.png"
              alt="services_line"
              width="194"
              height="17"
            />
          </div>
        </div>
        {/* Gray Portion  */}
        <div
          style={{ width: "1370px", height: "265px" }}
          className="bg-gray-50 mt-60 relative hidden xl:flex"
        ></div>
        {/* Cards */}
        <div className="absolute xl:px-96 lg:px-20 md:px-20 sm:px-10 px-10 grid grid-cols-3 gap-x-8 pt-32">
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
            <h1 className="pt-12 text-2xl font-noticia text-center">
              Research And Design
            </h1>
            <p className="pt-5 text-gray-400 text-base text-center">
              Lorem ipsum dolor amet, consesd ctetur adipiscing elit. Malesa est
              sagittis et nuasslla ntis enim vel suspend wergisse eu masgnis
              suada vitae, ullamchper nisl eget gravda.
            </p>
            <Link href="/">
              <div className="pt-6 flex items-center cursor-pointer">
                <span className="text-red-500 mr-2 font-bold text-base cursor-pointer">
                  View Details
                </span>
                <Image
                  src="/images/tiny_arrow.png"
                  alt="tiny_arrow"
                  width="14px"
                  height="14px"
                />
              </div>
            </Link>
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
            <h1 className="text-2xl font-noticia text-center">
              User Interface Design
            </h1>
            <p className="pt-5 text-gray-400 text-base text-center">
              Lorem ipsum dolor amet, consesd ctetur adipiscing elit. Malesa est
              sagittis et nuasslla ntis enim vel suspend wergisse eu masgnis
              suada vitae, ullamchper nisl eget gravda.
            </p>
            <Link href="/">
              <div className="pt-6 flex items-center cursor-pointer">
                <span className="text-red-500 mr-2 font-bold text-base cursor-pointer">
                  View Details
                </span>
                <Image
                  src="/images/tiny_arrow.png"
                  alt="tiny_arrow"
                  width="14px"
                  height="14px"
                />
              </div>
            </Link>
          </div>
          {/* Single Card */}
          <div className="border border-red-500 bg-white rounded shadow-lg flex flex-col items-center pb-14 px-4">
            <div className="flex items-center justify-end">
              <div className="pt-9">
                <Image
                  src="/images/Design.png"
                  alt="Design"
                  width="91"
                  height="91"
                />
              </div>
            </div>
            <h1 className="pt-4 text-2xl font-noticia text-center">
              User Experience Design
            </h1>
            <p className="pt-5 text-gray-400 text-base text-center">
              Lorem ipsum dolor amet, consesd ctetur adipiscing elit. Malesa est
              sagittis et nuasslla ntis enim vel suspend wergisse eu masgnis
              suada vitae, ullamchper nisl eget gravda.
            </p>
            <Link href="/">
              <div className="pt-6 flex items-center cursor-pointer">
                <span className="text-red-500 mr-2 font-bold text-base cursor-pointer">
                  View Details
                </span>
                <Image
                  src="/images/tiny_arrow.png"
                  alt="tiny_arrow"
                  width="14px"
                  height="14px"
                />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

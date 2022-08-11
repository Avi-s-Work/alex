import Image from "next/image";
export default function services() {
  return (
    <>
      <section className="flex flex-col items-center py-28">
        {/* Heading  */}
        <div className="grid grid-rows-2">
          <div>
            <h1 className="text-5xl font-noticia">Providing Services</h1>
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
        {/* Cards */}
        <div className="w-full xl:px-96 lg:px-20 md:px-20 sm:px-10 px-10 grid grid-cols-3">
          {/* Single Card */}
          <div className="rounded shadow-lg flex flex-col items-center p-20">
            <div className="flex items-center justify-end mb-4">
              <Image
                src="/images/Idea.png"
                alt="services_line"
                width="110"
                height="110"
              />
            </div>
            <div>
              <h1 className="text-2xl font-noticia">Providing Services</h1>
            </div>
            <div>
              <p className="text-base text-center">
                Lorem ipsum dolor amet, consesd ctetur adipiscing elit. Malesa
                est sagittis et nuasslla ntis enim vel suspend wergisse eu
                masgnis suada vitae, ullamchper nisl eget gravda.
              </p>
            </div>
          </div>
          {/* Single Card */}
          <div className="rounded shadow-lg flex flex-col items-center p-20">
            <div className="flex items-center justify-end mb-4">
              <Image
                src="/images/Idea.png"
                alt="services_line"
                width="110"
                height="110"
              />
            </div>
            <div>
              <h1 className="text-2xl font-noticia">Providing Services</h1>
            </div>
            <div>
              <p className="text-base text-center">
                Lorem ipsum dolor amet, consesd ctetur adipiscing elit. Malesa
                est sagittis et nuasslla ntis enim vel suspend wergisse eu
                masgnis suada vitae, ullamchper nisl eget gravda.
              </p>
            </div>
          </div>
          {/* Single Card */}
          <div className="rounded shadow-lg flex flex-col items-center p-20">
            <div className="flex items-center justify-end mb-4">
              <Image
                src="/images/Idea.png"
                alt="services_line"
                width="110"
                height="110"
              />
            </div>
            <div>
              <h1 className="text-2xl font-noticia">Providing Services</h1>
            </div>
            <div>
              <p className="text-base text-center">
                Lorem ipsum dolor amet, consesd ctetur adipiscing elit. Malesa
                est sagittis et nuasslla ntis enim vel suspend wergisse eu
                masgnis suada vitae, ullamchper nisl eget gravda.
              </p>
            </div>
          </div>
        </div>
        {/* Gray Portion  */}
        <div
          style={{ width: "1370px", height: "265px" }}
          className="bg-gray-100 mt-72"
        ></div>
      </section>
    </>
  );
}

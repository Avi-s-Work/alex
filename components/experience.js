import Image from "next/image";

export default function Experience() {
  return (
    <>
      <section className="w-full xl:px-96 lg:px-20 md:px-20 sm:px-10 px-10 grid grid-cols-2 items-center pt-40">
        {/* Left Part //////////////////////////////////////////////// */}
        <div className="border border-red-500 mr-20">
          {/* Heading  */}
          <div className="flex flex-col">
            <div>
              <h1
                style={{ lineHeight: "63px" }}
                className="text-5xl font-noticia"
              >
                I Have Brunch Of <br /> Huge Experience.....
              </h1>
            </div>
            <div className="flex items-center justify-end mt-2 mr-28">
              <Image
                src="/images/Heading_Lines/experience_line.png"
                alt="experience_line"
                width="239"
                height="11"
              />
            </div>
          </div>
          {/* Details  */}
          <div className="my-8">
            <p className="text-lg text-gray-400">
              Lorem ipsum dolor sit amet, conse asdsd ctetur adipiscing <br />{" "}
              elit. Malesa est sagittis et nualla leo ut nulla aliquam. Nisi,{" "}
              <br /> fermetum suspend vene ntis enim vel sussrf bedspend
            </p>
          </div>
          <hr />
          <div className="flex items-center justify-between gap-x-8 mt-8">
            <div className="bg-gray-50 px-8 py-6">
              <h1 className="text-5xl font-noticia text-red-500">287+</h1>
              <p className="mt-3 text-base text-gray-400">
                Lorem ipsum dolor sit amet, consesd
              </p>
            </div>
            <div className="bg-gray-50 px-8 py-6">
              <h1 className="text-5xl font-noticia text-red-500">12 years</h1>
              <p className="mt-3 text-base text-gray-400">
                Lorem ipsum dolor siswsst amet, codvsd nssde esd
              </p>
            </div>
          </div>
        </div>
        {/* Right Part //////////////////////////////////////////////// */}
        <div className="border border-red-500 grid grid-rows-3 gap-y-11 ml-6">
          {/* Companies  */}
          <div>
            <h1 className="text-2xl font-noticia text-gray-600">
              Senior Product Designer
            </h1>
            <h1 className="text-4xl font-noticia mt-2 mb-6">
              Agency Vision Trust
            </h1>
            <hr />
            <div className="flex items-center justify-between mt-4">
              <p className="text-base text-gray-400">Dec 2018 - Sep 2019</p>
              <p className="text-base text-gray-400">
                Thornridge Cir. Shiloh, Hawaii
              </p>
            </div>
          </div>
          {/* Companies  */}
          <div>
            <h1 className="text-2xl font-noticia text-gray-600">
              Lead User Experience Designer
            </h1>
            <h1 className="text-4xl font-noticia mt-2 mb-6">
              Balkan Brothers Ltd.
            </h1>
            <hr />
            <div className="flex items-center justify-between mt-4">
              <p className="text-base text-gray-400">Dec 2018 - Sep 2019</p>
              <p className="text-base text-gray-400">
                Washington. Manchester, Kentucky
              </p>
            </div>
          </div>
          {/* Companies  */}
          <div>
            <h1 className="text-2xl font-noticia text-gray-600">
              User Experience Designer
            </h1>
            <h1 className="text-4xl font-noticia mt-2 mb-6">
              Grabstar Design House
            </h1>
            <hr />
            <div className="flex items-center justify-between mt-4">
              <p className="text-base text-gray-400">Dec 2018 - Sep 2019</p>
              <p className="text-base text-gray-400">
                Thoridge. Syracuse, Connecticut
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

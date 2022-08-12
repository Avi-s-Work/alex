import Image from "next/image";

export default function Experience() {
  return (
    <>
      <section className="w-full xl:px-96 lg:px-20 md:px-20 sm:px-10 px-10 grid grid-cols-2 items-center py-40">
        <div className="bg-green-300 border border-red-500">
          {/* Heading  */}
          <div className="flex flex-col">
            <div>
              <h1 className="text-5xl font-noticia">
                I Have Brunch Of <br /> Huge Experience.....
              </h1>
            </div>
            <div className="flex items-center justify-end mt-4 mr-16 pr-2">
              <Image
                src="/images/Heading_Lines/experience_line.png"
                alt="experience_line"
                width="239"
                height="11"
              />
            </div>
          </div>
        </div>
        <div className="border border-red-500 w-52 h-52 bg-green-300"></div>
      </section>
    </>
  );
}

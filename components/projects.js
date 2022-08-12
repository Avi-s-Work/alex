import Image from "next/image";
export default function Projects() {
  return (
    <>
      {/* Heading  */}
      <div
        style={{ width: "468px" }}
        className="mx-auto grid grid-rows-2 items-center pb-14 pt-40"
      >
        <div>
          <h1 className="text-5xl text-center font-noticia">
            My Selected Projects
          </h1>
        </div>
        <div className="flex justify-center mb-4 mr-28">
          <Image
            src="/images/Heading_Lines/projects_line.png"
            alt="projects_line"
            width="194"
            height="17"
          />
        </div>
      </div>
      <section className="pb-40 w-full xl:px-96 lg:px-20 md:px-20 sm:px-10 px-10 grid grid-cols-2 items-center gap-y-6 gap-x-8">
        <div className="relative">
          <Image
            src="/images/Projects/Drinking.png"
            alt="Drinking"
            width="570"
            height="571"
          />
          <div className="absolute bottom-9 left-9">
            <h1 className="text-2xl text-white font-noticia">
              Drinking from the sea of knowledge
            </h1>
            <span className="text-lg text-white">
              Digital / Exhibition / VR / AR
            </span>
          </div>
        </div>
        <div className="relative">
          <Image
            src="/images/Projects/Feast.png"
            alt="Feast"
            width="570"
            height="571"
          />
          <div className="absolute bottom-9 left-9">
            <h1 className="text-2xl text-white font-noticia">
              A Feast Of A Time-Honored History
            </h1>
            <span className="text-lg text-white">Digital / Events</span>
          </div>
        </div>
        <div className="relative">
          <Image
            src="/images/Projects/GooglePlay.png"
            alt="GooglePlay"
            width="570"
            height="571"
          />
          <div className="absolute bottom-9 left-9">
            <h1 className="text-2xl text-white font-noticia">
              Google Play ACG Interactive Game
            </h1>
            <span className="text-lg text-white">Exhibition / VR / AR</span>
          </div>
        </div>
        <div className="relative">
          <Image
            src="/images/Projects/Monopoly.png"
            alt="Monopoly"
            width="570"
            height="571"
          />
          <div className="absolute bottom-9 left-9">
            <h1 className="text-2xl text-white font-noticia">
              Monopoly Dreams Hong Kong
            </h1>
            <span className="text-lg text-white">
              Digital / Exhibition / Installations
            </span>
          </div>
        </div>
      </section>
    </>
  );
}

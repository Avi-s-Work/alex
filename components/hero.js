import Image from "next/image";

export default function Hero() {
  return (
    <>
      <div className="xl:pt-52 pt-36 flex flex-col items-center">
        <div>
          <Image
            src="/images/profile_circle.svg"
            alt="Noze"
            width="228"
            height="130"
          />
        </div>
        <div>
          <h1 className="font-noticia text-2xl mt-7 text-center text-red-500">
            Hello, Myself Alex....
          </h1>
          <h1 className="font-noticia text-6xl mt-5 text-center text-black">
            Creating Fast Website <br /> And Softwares
          </h1>
          <p className="mt-7 text-lg text-center text-gray-400">
            Lorem ipsum dolor sit amet, consecttur adipiscing Orci <br /> fauff
            cibus urna, sed senectus iaculis leo condimentum. Maenas nec <br />
            adipiscing neque, pellentesque in. Metus fusce.
          </p>
        </div>
      </div>
    </>
  );
}

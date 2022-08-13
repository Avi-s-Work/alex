import Image from "next/image";

export default function Hero() {
  return (
    <>
      <div className="xl:pt-52 pt-36 flex flex-col items-center relative">
        <div>
          <Image
            src="/images/profile_circle.svg"
            alt="Noze"
            width="228"
            height="130"
          />
        </div>
        <section>
          <h1 className="font-noticia text-2xl mt-7 text-center text-red-500">
            Hello, Myself Alex....
          </h1>
          <h1 className="font-noticia text-6xl mt-5 text-center text-black">
            Creating Fast Website <br /> And Softwares
          </h1>
          <p className="mt-7 mb-9 text-lg text-center text-gray-400">
            Lorem ipsum dolor sit amet, consecttur adipiscing Orci <br /> fauff
            cibus urna, sed senectus iaculis leo condimentum. Maenas nec <br />
            adipiscing neque, pellentesque in. Metus fusce.
          </p>
        </section>
        <button className="bg-red-500 hover:bg-red-700 text-white text-base py-3 px-10 rounded-full">
          Know About Me
        </button>
        <section className="mt-36 grid grid-flow-col items-center gap-x-20">
          <div>
            <Image
              className="opacity-80"
              src="/images/Social_Icons/facebook.png"
              alt="facebook"
              width="144"
              height="27"
            />
          </div>
          <div>
            <Image
              className="opacity-80"
              src="/images/Social_Icons/tinder.png"
              alt="tinder"
              width="94"
              height="33"
            />
          </div>
          <div>
            <Image
              className="opacity-80"
              src="/images/Social_Icons/airbnb.png"
              alt="airbnb"
              width="134"
              height="42"
            />
          </div>
          <div>
            <Image
              className="opacity-80"
              src="/images/Social_Icons/microsoft.png"
              alt="microsoft"
              width="155"
              height="32"
            />
          </div>
          <div>
            <Image
              className="opacity-80"
              src="/images/Social_Icons/hubspot.png"
              alt="hubspot"
              width="122"
              height="32"
            />
          </div>
          <div>
            <Image
              className="opacity-80"
              src="/images/Social_Icons/tinder_last.png"
              alt="tinder_last"
              width="94"
              height="33"
            />
          </div>
        </section>
      </div>
      <div>
        <div className="absolute top-10">
          <Image
            className="opacity-50"
            src="/images/Banner_Circles/Circle_S.png"
            alt="Circle_S"
            width="94"
            height="33"
          />
        </div>
      </div>
    </>
  );
}

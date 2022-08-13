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
      {/* Banner Circles  */}
      <div>
        <div className="absolute top-[282px] left-[388px]">
          <Image
            className="opacity-90"
            src="/images/Banner_Circles/Circle_M.png"
            alt="Circle_S"
            width="75"
            height="75"
          />
        </div>
        <div className="absolute top-[282px] right-[560px]">
          <Image
            className="opacity-90"
            src="/images/Banner_Circles/Circle_XS.png"
            alt="Circle_S"
            width="30"
            height="30"
          />
        </div>
        <div className="absolute top-[622px] left-[475px]">
          <Image
            className="opacity-90"
            src="/images/Banner_Circles/Circle_S.png"
            alt="Circle_S"
            width="38"
            height="38"
          />
        </div>
        <div className="absolute top-[545px] right-[390px]">
          <Image
            className="opacity-90"
            src="/images/Banner_Circles/Circle_L.png"
            alt="Circle_S"
            width="135"
            height="135"
          />
        </div>
        <div className="absolute top-[504px] left-[160px]">
          <Image
            className="opacity-90"
            src="/images/Banner_Circles/half_circle_L.png"
            alt="half_circle_L"
            width="189"
            height="377"
          />
        </div>
        <div className="absolute top-[146px] right-[160px]">
          <Image
            className="opacity-90"
            src="/images/Banner_Circles/half_circle_M.png"
            alt="half_circle_M"
            width="139"
            height="279"
          />
        </div>
        <div className="absolute top-[839px] right-[160px]">
          <Image
            className="opacity-90"
            src="/images/Banner_Circles/half_circle_S.png"
            alt="half_circle_S"
            width="31"
            height="62"
          />
        </div>
      </div>
    </>
  );
}

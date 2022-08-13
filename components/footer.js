import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="mt-32">
        <h1 className="text-red-500 text-2xl text-center mb-12 font-noticia">
          Ready To Work?
        </h1>
        <p className="mb-2.5 text-lg text-gray-400 text-center">
          Thornridge Cir. Shiloh, Hawaii 81063
        </p>
        <h1 className="mb-6 text-5xl text-center font-noticia">
          helloalex@gmail.com
        </h1>
        <p className="mb-12 text-lg text-gray-400 text-center">
          +880 (308) 555-0121
        </p>
        <div className="pb-20 flex items-center justify-center gap-x-8 mx-auto">
          <Link href="/">
            <span className="hover:text-gray-500 cursor-pointer">Whatsapp</span>
          </Link>
          <Link href="/">
            <span className="hover:text-gray-500 cursor-pointer">Facebook</span>
          </Link>
          <Link href="/">
            <span className="hover:text-gray-500 cursor-pointer">Instagram</span>
          </Link>
        </div>
        <div className="h-32 border-t flex items-center justify-center">
          <span className="text-sm text-gray-400">
            Designed By Themefisher & Developed By Gethugothemes
          </span>
        </div>
      </footer>
    </>
  );
}

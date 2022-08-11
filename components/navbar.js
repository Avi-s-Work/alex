import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
export default function Navbar() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        style={{ height: "115px" }}
        className={`fixed flex items-center justify-between top-0 z-30 w-full bg-white border-b ${
          isScrolled && "shadow-lg"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <div className="flex items-center cursor-pointer">
              <Image
                src="/images/email.png"
                alt="Noze"
                width="50"
                height="50"
              />
            </div>
          </Link>
          <div>
            <Link href="/">
              <span className="ml-2 text-sm cursor-pointer mr-8 text-gray-400 hover:text-gray-500">
                helloalex.developer
              </span>
            </Link>
          </div>
        </div>
        {/* Pre Order  */}
        <div className="flex items-center">
          <Link href="/">
            <span className="text-sm cursor-pointer mr-8 text-gray-400 hover:text-gray-500">
              Home
            </span>
          </Link>

          <Link href="/">
            <span className="text-sm cursor-pointer mr-8 text-gray-400 hover:text-gray-500">
              About
            </span>
          </Link>

          <Link href="/">
            <span className="text-sm cursor-pointer mr-8 text-gray-400 hover:text-gray-500">
              Contact
            </span>
          </Link>

          <Link href="/">
            <span className="text-sm cursor-pointer mr-8 text-gray-400 hover:text-gray-500">
              Porfolio
            </span>
          </Link>

          <Link href="/">
            <span className="text-sm cursor-pointer text-gray-400 hover:text-gray-500">
              Blog
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}

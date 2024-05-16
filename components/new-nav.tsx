import Image from "next/image";
import logo from "@/public/logo.svg";
import { createPortal } from "react-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useEffect, useState } from "react";

export function NewNav() {
  const [showSideMenu, setShowSideMenu] = useState(false);

  useEffect(() => {
    const checkSize = () => {
      if (window.innerWidth >= 1024) {
        setShowSideMenu(false);
      }
    };
    window.addEventListener("resize", checkSize);

    return () => window.removeEventListener("resize", checkSize);
  }, []);

  return (
    <div className="container flex">
      <div className="w-full p-2 flex flex-row justify-between items-center gap-16 bg-dusky-blue text-white rounded-xl shadow-lg">
        <Image src={logo} alt="logo" height={16} />

        <div className="hidden lg:flex flex-row gap-4">
          <a>Find Work</a>
          <a>Find Talent</a>
          <a>Articles</a>
          <a>About Us</a>
          <a>Contact Us</a>
        </div>

        <div className="hidden sm:flex flex-row gap-2">
          <button>Login</button>
          <button className="py-2 px-4 bg-white text-black rounded-full">
            Join Now
          </button>
        </div>

        <button
          className="lg:hidden p-2"
          onClick={() => setShowSideMenu((prev) => !prev)}
        >
          <GiHamburgerMenu />
        </button>

        {showSideMenu &&
          createPortal(
            <div className="fixed top-0 left-0 w-full h-full">
              <div
                className="absolute left-0 top-0 z-40 w-full h-full bg-dusky-blue/20 backdrop-blur-sm"
                onClick={() => setShowSideMenu(false)}
              />

              <div className="absolute top-0 right-0 z-50 w-1/2 min-w-[200px] h-full pt-4 flex flex-col items-stretch gap-2 bg-dusky-blue">
                <button
                  className="self-end me-4 p-2 text-white"
                  onClick={() => setShowSideMenu(false)}
                >
                  <IoCloseCircleOutline />
                </button>

                <div className="sm:hidden px-2 flex gap-2">
                  <button className="text-white">Login</button>
                  <button className="py-2 px-4 bg-white text-black rounded-full">
                    Join Now
                  </button>
                </div>

                <div className="flex flex-col gap-2 text-white">
                  <a className="p-2">Find Work</a>
                  <a className="p-2">Find Talent</a>
                  <a className="p-2">Articles</a>
                  <a className="p-2">About Us</a>
                  <a className="p-2">Contact Us</a>
                </div>
              </div>
            </div>,
            document.body,
          )}
      </div>
    </div>
  );
}

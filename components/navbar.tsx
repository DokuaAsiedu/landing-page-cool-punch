import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseCircleOutline } from "react-icons/io5";
import companyLogo from "@/assets/company-logo.svg";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";

export function Navbar() {
  const [showSideMenu, setShowSideMenu] = useState(false);

  useEffect(() => {
    const checkSize = () => {
      if (window.innerWidth >= 768) {
        setShowSideMenu(false);
      }
    };
    window.addEventListener("resize", checkSize);

    return () => window.removeEventListener("resize", checkSize);
  }, []);

  return (
    <div className="w-4/5 mx-auto border-x-[1px] border-brandy-punch">
      {/* <div className="w-5/6 mx-auto border-brandy-punch"> */}
      <div className="p-4 hidden md:flex flex-row items-center justify-center gap-4 border-b-[1px] border-brandy-punch uppercase">
        <a>our work</a>
        <a>our progress</a>
        <Image src={companyLogo} alt="company logo" width={24} height={24} />
        <a>about us</a>
        <a>contact us</a>
      </div>

      <div className="p-4 flex flex-row items-center justify-between md:hidden border-b-[1px] border-brandy-punch">
        <Image src={companyLogo} alt="company logo" width={24} height={24} />
        <button
          className="p-2"
          onClick={() => setShowSideMenu((prev) => !prev)}
        >
          <GiHamburgerMenu />
        </button>
      </div>

      {showSideMenu &&
        createPortal(
          <div className="fixed top-0 left-0 w-screen h-screen">
            <div
              className="absolute left-0 top-0 z-10 w-screen h-screen"
              onClick={() => setShowSideMenu(false)}
            />

            <div className="absolute top-0 right-0 z-20 w-1/2 h-full flex flex-col items-stretch bg-red-300 uppercase">
              <button
                className="self-end me-4 p-2"
                onClick={() => setShowSideMenu(false)}
              >
                <IoCloseCircleOutline />
              </button>
              <a className="p-2 border-b-[1px] border-b-transparent hover:border-b-[1px] hover:border-b-white">
                our work
              </a>
              <a className="p-2 border-b-[1px] border-b-transparent hover:border-b-[1px] hover:border-b-white">
                our progress
              </a>
              <a className="p-2 border-b-[1px] border-b-transparent hover:border-b-[1px] hover:border-b-white">
                about us
              </a>
              <a className="p-2 border-b-[1px] border-b-transparent hover:border-b-[1px] hover:border-b-white">
                contact us
              </a>
            </div>
          </div>,
          document.getElementById("gen-layout") as HTMLElement,
        )}
      {/* </div> */}
    </div>
  );
}

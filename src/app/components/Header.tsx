"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Button from "./Button";
import { usePathname } from "next/navigation";
import { Facebook, Instagram, LinkedIn, SmyleIcon, Twitter } from "../SVG";

const headerMenu = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about-us" },
  { name: "Smylo", path: "/smylo" },
  { name: "Blogs", path: "/blogs" },
  { name: "Contact", path: "/contact-us" },
];
const socialLinks = [
  { title: "Facebook", icon: <Facebook />, path: "" },
  { title: "Twitter ", icon: <Twitter />, path: "" },
  { title: "Instagram", icon: <Instagram />, path: "" },
  { title: "LinkedIn", icon: <LinkedIn />, path: "" },
];

const Header = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const isActive = (href: string) => {
    return pathname === href || (href !== "/" && pathname.startsWith(href));
  };
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 5);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleShowMenu = () => {
    setShowMenu(true);
  };
  const handleCloseMenu = () => {
    setShowMenu(false);
  };

  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [showMenu]);

  return (
    <React.Fragment>
      <header
        className={`fixed w-full top-0 left-0 z-50 transition-all duration-300`}
      >
        <div
          className={`bg-white/0 backdrop-blur-[14px] transition-all duration-300 border-b border-black ${
            isScrolled ? "bg-white shadow-custom-hover py-3 lg:py-4" : "py-5"
          }`}
        >
          <div className="mx-auto px-4 md:px-12 relative">
            <div className="flex justify-between items-center">
              <div className="logo">
                <Link href="/" prefetch>
                  <SmyleIcon
                    className={`transition-all duration-300 h-auto ${
                      isScrolled
                        ? "h-auto w-[50px] md:w-[75px]"
                        : "h-auto w-[60px] md:w-[85px]"
                    }`}
                  />
                </Link>
              </div>
              <div className="header-menu hidden lg:flex items-center">
                <nav>
                  <ul className="flex gap-6 xl:gap-10 items-center">
                    {headerMenu.map((item, index) => {
                      const isActive =
                        pathname === item.path ||
                        pathname.startsWith(item.path + "/");

                      return (
                        <li key={index}>
                          <Link
                            href={item.path}
                            className={`${
                              isActive
                                ? "text-[20px] font-semibold"
                                : "text-primary text-semibold font-[400]"
                            } transition-all duration-300`}
                            prefetch
                          >
                            {item.name}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </nav>
              </div>
              <div className="flex items-center gap-4 lg:hidden">
                {/* <div className="flex gap-5 items-center">
                  {socialLinks.map((link, index) => (
                    <a
                      href={link.path}
                      aria-label={`Social link for ${link.title}`}
                      key={index}
                    >
                      {link.icon}
                    </a>
                  ))}
                </div> */}
                <button
                  className="h-[25px] w-[25px] flex-none relative z-[999] lg:hidden"
                  onClick={handleShowMenu}
                >
                  <span className="h-[3px] bg-[#151515] rounded-[3px] block mb-2 w-[18px] ms-auto"></span>
                  <span className="h-[3px] bg-[#151515] rounded-[3px] block mb-2 w-[12px] ms-auto"></span>
                  <span className="h-[3px] bg-[#151515] rounded-[3px] block w-[25px] ms-auto"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div
        className={`mobile-menu fixed top-0 right-0 w-full h-screen transition-all duration-300 ${
          showMenu ? "z-[999] opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Overlay */}
        {showMenu && (
          <div
            className="absolute left-0 right-0 bottom-0 top-0 bg-black/40"
            onClick={handleCloseMenu}
          ></div>
        )}

        {/* Sliding menu */}
        <div
          className={`absolute top-0 bottom-0 w-10/12 flex items-center justify-center rounded-2xl p-4 shadow-lg bg-gradient transition-all duration-300 ease-in-out
      ${showMenu ? "right-0" : "-right-[100%]"}`}
        >
          {/* Close Button */}
          <div
            className="absolute top-3 right-2 h-[52px] w-[52px] bg-black flex justify-center items-center rounded-full cursor-pointer"
            onClick={handleCloseMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="#fff"
                d="m12 12.708l-5.246 5.246q-.14.14-.344.15t-.364-.15t-.16-.354t.16-.354L11.292 12L6.046 6.754q-.14-.14-.15-.344t.15-.364t.354-.16t.354.16L12 11.292l5.246-5.246q.14-.14.345-.15q.203-.01.363.15t.16.354t-.16.354L12.708 12l5.246 5.246q.14.14.15.345q.01.203-.15.363t-.354.16t-.354-.16z"
              />
            </svg>
          </div>

          {/* Menu Items */}
          <div className="inline-flex flex-col space-y-12 items-center justify-center">
            {headerMenu.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                onClick={handleCloseMenu}
                className={`text-2xl text-primary text-semibold transition-all duration-300 ${
                  isActive(item.path) ? "font-bold" : "font-[400]"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;

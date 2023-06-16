"use client";
import { useState } from "react";
import Link from "next/link";
import React from "react";
import { NavbarLinks } from "@/constants/LinkNavigation";
import styles from "./navbar.module.css";
import { FiMenu, FiX } from "react-icons/fi";
import "./navbar.module.css";
import DarkModeBtn from "../ReusableComponents/DarkModeBtn/darkModeBtn";
import LearnParaLogo from '/public/LogoLp.png';
import Image from 'next/image';
const Navbar = () => {
  const isDarkColor = (color: string): boolean => {
    const hexColor = color.replace("#", "");
    const r = parseInt(hexColor.substr(0, 2), 16);
    const g = parseInt(hexColor.substr(2, 2), 16);
    const b = parseInt(hexColor.substr(4, 2), 16);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness < 128;
  };

  const [isOpen, setIsOpen] = useState(false);

  const handleIconClick = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
   <header>
      <div className="hidden lg:block shadow-md">
      
        {/* hide on small and medium screens, show on large screens */}
        <div className={`px-4 container mx-auto py-4  ${styles.container}`}>
          <Link href="/" className={styles.logo}>
            <div className="flex gap-2"><Image src={LearnParaLogo} alt="logo"  height={30} /><h1>LearnPara</h1></div>
            
          </Link>
          
          <div className={`flex items-center ${styles.links}`}>
              <DarkModeBtn />
            {NavbarLinks.map((link) => (
              
              <Link
                href={link.url}
                key={link.id}
                passHref
                className="hover:text-primary"
                onClick={closeNavbar}
              >
                {link.title}
              </Link>
            ))}
            <button className="learn-more">
              <span className="circle" aria-hidden="true">
                <span className="icon arrow"></span>
              </span>
              <span className="button-text">Learn More</span>
            </button>
          </div>
        </div>
      </div>

      {/* mobile */}
      <header className="lg:hidden">
        <div className="flex shadow-md items-center justify-between p-2">
          <Link href="/" className={styles.logo}>
          <div className="flex gap-2"><Image src={LearnParaLogo} alt="logo"  height={30} /><h1>LearnPara</h1></div>
          </Link>

          {/* Button dropdown */}
          <div className="  flex flex-row  gap-4">
            {/* darkModeBtn */}
            <DarkModeBtn />

            <button
              onClick={handleIconClick}
              aria-label={isOpen ? "Close Menu" : "Open Menu"}
              className={styles.menuButton}
            >
              {isOpen ? <FiX className="icon " /> : <FiMenu className="icon" />}
            </button>
          </div>
        </div>
        {isOpen && (
          <div
            className={`${styles.dropdown} p-2 flex flex-col justify-center gap-1 shadow-xl`}
            style={{
              backgroundColor: "rgba(144, 238, 144, 0.7)",
              borderRadius: "0 0 10px 10px",
              background: "linear-gradient(to bottom, #b8e994, #78e08f)",
            }}
          >
            {NavbarLinks.map((link) => {
              const linkStyle = {
                color: "#333",
                lineHeight: "1.5",
                transition: "filter 0.3s",
                filter: "blur(0)", // Initial blur value
              };

              const handleLinkHover = (
                e: React.MouseEvent<HTMLAnchorElement>
              ) => {
                const linkBackground = window.getComputedStyle(
                  e.target as Element
                ).backgroundColor;
                const linkColor = isDarkColor(linkBackground) ? "#fff" : "#000";
                (e.target as HTMLAnchorElement).style.color = linkColor;
              };

              const handleLinkMouseLeave = (
                e: React.MouseEvent<HTMLAnchorElement>
              ) => {
                (e.target as HTMLAnchorElement).style.color = "#333";
                (e.target as HTMLAnchorElement).style.filter = "blur(0)";
              };

              return (
                <Link
                  href={link.url}
                  key={link.id}
                  passHref
                  className="hover:text-primary font-semibold pl-2"
                  onClick={closeNavbar}
                  style={linkStyle}
                  onMouseEnter={handleLinkHover}
                  onMouseLeave={handleLinkMouseLeave}
                >
                  {link.title}
                </Link>
              );
            })}
            {/* mobile navbar main button */}

            <button className="btn gap-2 mr-2 mt-1">Learn</button>
          </div>
        )}
      </header>
      </header>
  );
};

export default Navbar;

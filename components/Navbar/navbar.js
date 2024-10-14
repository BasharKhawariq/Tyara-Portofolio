"use client";

import React, { useState, useEffect } from "react";
import usePositionScreen from "../../hooks/usePositionScreen";

export default function Navbar() {
  const [activeLink, setActiveLink] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { isScrolled } = usePositionScreen({ threshold: 50 });

  // Scroll into view only if the window object is available (client-side)
  const scrollTo = (id) => {
    if (typeof window !== "undefined") {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const NavbarLink = [
    { id: 1, name: "Home", link: "home" },
    { id: 2, name: "About", link: "about" },
    { id: 3, name: "Experience", link: "experience" },
    { id: 4, name: "Projects", link: "projects" },
    { id: 5, name: "Skills", link: "skills" },
    { id: 6, name: "Contact", link: "contact" },
  ];

  return (
    <header className="left-0 z-20 w-full mt-3">
      <div className="container mx-auto flex justify-between items-center p-5">
        {/* Floating Hamburger Icon for Small Screens */}
        <button
          className={`fixed bottom-5 right-5 md:hidden bg-[#687362]/25 text-[#945F7D] p-3 rounded-full shadow-lg z-40 ${
            isSidebarOpen ? "translate-x-96" : ""
          } transition-transform duration-300 ease-in-out md:hidden`}
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Navbar for Medium and Large Screens */}
        <nav className="hidden md:flex md:ml-auto md:mr-auto font-medium text-base text-gray-300 justify-center">
          {NavbarLink.map((e) => (
            <div
              key={e.id}
              className={`mx-3 hover:text-white hover:bg-[#687362] hover:rounded-2xl py-1 px-3 transition-all duration-250 ease-in-out ${
                activeLink === e.id
                  ? "text-white px-3 py-1 rounded-2xl bg-[#687362]"
                  : "px-2 py-2 rounded-md text-[#42434F]"
              }`}
              onClick={() => {
                scrollTo(e.link);
                setActiveLink(e.id);
              }}
            >
              {e.name}
            </div>
          ))}
        </nav>
      </div>

      {/* Sidebar for Small Screens */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-400 rounded-r-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 z-40 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
        onClick={() => setIsSidebarOpen(false)}
      >
        <button className="absolute top-4 right-4 text-white">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <nav className="mt-20">
          {NavbarLink.map((e) => (
            <div
              key={e.id}
              className={`block text-white px-4 py-2 hover:bg-[#50668340]/20 transition-colors duration-300 ${
                activeLink === e.id ? "bg-[#50668340]/20" : "text-gray-300"
              }`}
              onClick={() => {
                scrollTo(e.link);
                setActiveLink(e.id);
                setIsSidebarOpen(false); // Close sidebar after clicking
              }}
            >
              {e.name}
            </div>
          ))}
        </nav>
      </div>

      {/* Backdrop when sidebar is open */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </header>
  );
}
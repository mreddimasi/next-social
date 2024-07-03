"use client";
import React from "react";
import Link from "next/link";

type Props = {};

// Componenet for mobile menu as we cannot have state etc in server side component

function MobileMenu({}: Props) {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="md:hidden">
      <div onClick={() => setIsOpen((isOpen) => !isOpen)}>
        <div className="flex flex-col flex-2 gap-[4.5px] cursor-pointer">
          <div
            className={`w-6 h-1 bg-blue-500 rounded-sm ${
              isOpen ? "rotate-45" : ""
            } origin-left ease-in-out duration-500`}
          ></div>
          <div
            className={`w-6 h-1 bg-blue-500 rounded-sm ${
              isOpen ? "opacity-0" : ""
            }`}
          ></div>
          <div
            className={`w-6 h-1 bg-blue-500 rounded-sm ${
              isOpen ? "-rotate-45" : ""
            } origin-left  ease-in-out duration-500`}
          ></div>
        </div>
      </div>
      {/* top-40 =96px, hence h-[calc(100vh-96px)] */}
      {isOpen && (
        <div className="absolute left-0 top-24 w-full h-[calc(100vh-96px)] bg-white shadow-lg flex flex-col items-center justify-between gap-8 font-medium text-xl z-10">
          <Link href="/" className="text-blue-500">
            Home
          </Link>
          <Link href="/friends" className="text-blue-500">
            Friends
          </Link>
          <Link href="/groups" className="text-blue-500">
            Groups
          </Link>
          <Link href="/stories" className="text-blue-500">
            Stories
          </Link>
          <Link href="/profile" className="text-blue-500">
            Profile
          </Link>
        </div>
      )}
    </div>
  );
}

export default MobileMenu;

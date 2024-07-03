import Link from "next/link";
import Image from "next/image";
import React from "react";
import MobileMenu from "./MobileMenu";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="h-24 flex items-center justify-between">
      {/* LEFT */}
      <div className="md:hidden lg:block w-[20%]">
        <Link href="/" className="font-bold text-xl text-blue-600">
          LAMASOCIAL
        </Link>
      </div>
      {/* CENTER */}
      <div className="hidden md:flex w-[50%] text-sm">
        <div className="flex gap-6 text-gray-600 ">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/home.png" alt="homepage" width={16} height={16} />
          <span>Homepage</span>
        </Link>
        <Link href="/" className="flex items-center gap-2">
          <Image src="/friends.png" alt="homepage" width={16} height={16} />
          <span>Homepage</span>
        </Link>
        <Link href="/" className="flex items-center gap-2">
          <Image src="/stories.png" alt="homepage" width={16} height={16} />
          <span>Homepage</span>
        </Link>
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-[30%] flex items-center gap-4 xl:gap-8 justify-end">
        <MobileMenu />
      </div>
    </div>
  );
};

export default Navbar;

import Link from "next/link";
import Image from "next/image";
import React from "react";
import MobileMenu from "./MobileMenu";
import { ClerkLoaded, ClerkLoading, SignedOut, SignedIn, UserButton } from "@clerk/nextjs";


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
      <div className="hidden md:flex w-[50%] text-sm items-center justify-between">
        <div className="flex gap-6 text-gray-600 ">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/home.png" alt="homepage" width={16} height={16} />
            <span>Homepage</span>
          </Link>
          <Link href="/" className="flex items-center gap-2">
            <Image src="/friends.png" alt="homepage" width={16} height={16} />
            <span>Friends</span>
          </Link>
          <Link href="/" className="flex items-center gap-2">
            <Image src="/stories.png" alt="homepage" width={16} height={16} />
            <span>Stories</span>
          </Link>
        </div>
        <div className="hidden xl:flex p-2 bg-slate-100 items-center rounded-xl ">
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none"
          />
          <Image src="/search.png" alt="search" width={12} height={12} />
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-[30%] flex items-center gap-4 xl:gap-8 justify-end">
        <ClerkLoading>
          <div
            className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
            role="status"
          >
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Loading...
            </span>
          </div>
        </ClerkLoading> 
        <ClerkLoaded>
          <SignedIn>
          <div className="curor-pointer">
            <Image src="/people.png" alt="" width={24} height={24} />
          </div> <div className="curor-pointer">
            <Image src="/messages.png" alt="" width={20} height={20} />
          </div> <div className="curor-pointer">
            <Image src="/notifications.png" alt="" width={20} height={20} />
          </div>
          <UserButton />
          </SignedIn>
          <SignedOut>
            <div className="flex items-center gap-2">
              <Image src="/noAvatar.png" alt="" width={20} height={20} />
              <Link href="/sign-in" className="text-blue-600">Login/Register</Link>
            </div>
          </SignedOut>
        </ClerkLoaded>
        <MobileMenu />
      </div>
    </div>
  );
};

export default Navbar;

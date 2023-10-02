"use client";
import Link from "next/link";
import { LuSearch } from "react-icons/lu";
import { Button } from "../ui/button";
import NavbarMenu from "./navbar-menu";
import NavbarMenuMobile from "./navbar-menu-mobile";

export default function Navbar() {
  return (
    <header className=" w-full p-5 px-5 md:px-8 fixed top-0 flex items-center justify-between z-50">
      <div className="flex items-center gap-8">
        <h1 className=" text-white text-2xl font-semibold">Qadabra</h1>
        <NavbarMenu />
      </div>
      <div className="flex items-center flex-row-reverse gap-4">
        <NavbarMenuMobile />
        <div className=" hidden sm:flex items-center flex-row-reverse gap-4">
          <Button
            className=" bg-yellow-300 shadow-[4px_4px_0_0_#000000] text-gray-800 font-medium hover:bg-yellow-300"
            size="sm"
            rounded="full"
          >
            Become an Expert
          </Button>
          <Link href="/" className=" text-white text-sm font-medium">
            Sign Up
          </Link>
          <div className=" h-4 border-l"></div>
          <Link href="/" className=" text-white text-sm font-medium">
            Sign In
          </Link>
        </div>
        <button>
          <LuSearch size={20} className="text-white" />
        </button>
      </div>
    </header>
  );
}

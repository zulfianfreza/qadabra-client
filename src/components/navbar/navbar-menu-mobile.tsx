"use client";
import Link from "next/link";
import { LuAlignRight } from "react-icons/lu";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

export default function NavbarMenuMobile() {
  return (
    <div className=" block sm:hidden">
      <Sheet>
        <SheetTrigger>
          <LuAlignRight size={20} className="text-white" />
        </SheetTrigger>
        <SheetContent className="" side="top">
          <div className="flex flex-col mt-4 gap-2">
            <Link
              href="/"
              className=" h-10 flex items-center text-gray-800 font-medium"
            >
              Become an Expert
            </Link>
            <Button rounded="full" variant="outline">
              Sign In
            </Button>
            <Button rounded="full">Sign Up</Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

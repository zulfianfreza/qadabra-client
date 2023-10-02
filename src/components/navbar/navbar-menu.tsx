"use client";

import { useScrollPosition } from "@/hooks/use-scroll-position";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface IMenu {
  title: string;
}

export default function NavbarMenu() {
  const LIST_MENU: IMenu[] = [
    {
      title: "Home",
    },
    {
      title: "All Tech",
    },
    {
      title: "Find Expert",
    },
    {
      title: "About",
    },
  ];
  return (
    <nav className="hidden lg:flex items-center gap-8">
      {LIST_MENU.map((menu, index) => (
        <NavbarMenuItem menu={menu} key={index} />
      ))}
    </nav>
  );
}

function NavbarMenuItem({ menu }: { menu: IMenu }) {
  const scrollPosition = useScrollPosition();
  return (
    <Link
      href="/"
      className={cn(
        " h-8 text-white text-sm font-medium flex justify-center items-center hover:underline decoration-2 underline-offset-8",
        { "text-gray-800 hover:text-violet-700": scrollPosition > 0 }
      )}
    >
      {menu.title}
    </Link>
  );
}

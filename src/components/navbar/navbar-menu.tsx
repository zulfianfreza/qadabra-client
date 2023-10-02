"use client";

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
  return (
    <Link
      href="/"
      className=" h-8 text-white text-sm font-medium flex justify-center items-center hover:underline decoration-2 underline-offset-8"
    >
      {menu.title}
    </Link>
  );
}

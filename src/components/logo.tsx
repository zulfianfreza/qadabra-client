"use client";

import { useScrollPosition } from "@/hooks/use-scroll-position";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface LogoProps {
  className?: string;
}
export default function Logo({ className }: LogoProps) {
  const scrollPosition = useScrollPosition();
  return (
    <Link
      href="/"
      className={cn(" text-white text-2xl font-semibold", className, {
        "text-violet-700": scrollPosition > 0,
      })}
    >
      Qadabra
    </Link>
  );
}

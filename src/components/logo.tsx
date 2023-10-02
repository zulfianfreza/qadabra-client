"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";

interface LogoProps {
  className?: string;
}
export default function Logo({ className }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(" text-violet-700 text-2xl font-semibold", className)}
    >
      Qadabra
    </Link>
  );
}

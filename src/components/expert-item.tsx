"use client";

import { LuStar } from "react-icons/lu";
import { Button } from "./ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ExpertItemProps {
  card?: boolean;
}

export default function ExpertItem({ card }: ExpertItemProps) {
  return (
    <div
      className={cn(
        " p-5 border  rounded-xl bg-white flex gap-5 relative items-start",
        {
          " border-2 border-black before:content-[''] before:w-full before:h-full before:bg-yellow-300 before:absolute before:-z-[1] before:top-2.5 before:-right-2.5 before:rounded-xl before:border-2 before:border-black":
            card,
        }
      )}
      style={{
        boxShadow: "0 1px 4px rgba(0,0,0,.08), 0 2px 12px rgba(0,0,0,.08)",
      }}
    >
      <div className=" w-20 aspect-square rounded-full overflow-hidden relative">
        <Image src="/images/26.png" fill alt="26" className=" object-cover" />
      </div>
      <div className=" flex flex-col flex-1">
        <div className=" flex items-center gap-4">
          <h1 className=" font-semibold text-lg text-gray-800">
            Adam C. Berriz
          </h1>
          <div className="flex items-center gap-1">
            <div className=" h-2 aspect-square rounded-full bg-teal-400"></div>
            <p className=" text-xs font-light text-teal-400">Online</p>
          </div>
        </div>
        <p className=" font-semibold text-sm text-gray-800">
          Fullstack Developer
        </p>
        <p className=" text-sm text-gray-500 line-clamp-2">
          I&apos;m a passionate Full-Stack Web Developer with a strong
          foundation in front-end and back-end technologies. My mission is to
          turn your ideas into reality by creating elegant, efficient, and
          user-friendly web applications. Whether you need a new website, want
          to improve an existing one, or just need some expert advice, I&apos;m
          here to help you succeed.
        </p>
        <div className="flex items-center flex-wrap gap-2 mt-2">
          <div className=" rounded-md bg-gray-100 border px-2 py-1">
            <p className=" text-xs text-gray-500">Flutter</p>
          </div>
          <div className=" rounded-md bg-gray-100 border px-2 py-1">
            <p className=" text-xs text-gray-500">Golang</p>
          </div>
          <div className=" rounded-md bg-gray-100 border px-2 py-1">
            <p className=" text-xs text-gray-500">Nest.js</p>
          </div>
        </div>
        <div className=" mt-4 flex items-center gap-4">
          <h1 className=" font-semibold text-gray-800">
            Rp99.000{" "}
            <span className=" font-normal text-sm text-gray-500">/ 30mins</span>
          </h1>
          <h1 className="flex items-center font-semibold text-gray-800">
            <LuStar />
            &nbsp;5.0&nbsp;
            <span className=" text-sm font-normal text-gray-500">
              (162 reviews)
            </span>
          </h1>
        </div>
        <div className=" mt-4 flex justify-end">
          <Button
            className={cn({ " shadow-[4px_4px_0_0_#000]": card })}
            rounded="full"
            size="sm"
          >
            Get Help
          </Button>
        </div>
      </div>
    </div>
  );
}

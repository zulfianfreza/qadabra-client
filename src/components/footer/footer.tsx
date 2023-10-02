"use client";

import Logo from "../logo";

export default function Footer() {
  return (
    <>
      <div className=" w-full p-8 mt-16 border-t bg-gray-50 flex">
        <div className="flex flex-col">
          <Logo />
          <p className=" text-sm mt-2 text-gray-800">
            Sign up to find developer for helping you.
          </p>
        </div>
      </div>
      <div className=" px-8 w-full bg-gray-100 border-t py-2.5">
        <p className=" text-sm text-gray-800">
          Copyright &copy; 2023 Qadabra. All right reserved.
        </p>
      </div>
    </>
  );
}

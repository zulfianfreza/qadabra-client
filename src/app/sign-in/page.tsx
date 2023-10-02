import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

export default function SignInPage() {
  return (
    <div className=" w-full min-h-screen flex">
      <div className=" w-[300px] lg:w-[400px] hidden md:block overflow-hidden h-screen bg-gradient-to-r from-violet-800 to-violet-700 relative">
        <div className=" w-96 h-20 bg-violet-900/30 absolute top-0 left-0 z-0"></div>
        <div className=" w-28 h-48 bg-violet-900/30 absolute top-0 left-0 z-0"></div>
        <div className=" w-48 h-36 bg-violet-900/30 absolute top-0 left-0 z-0"></div>
        <Logo className=" text-white z-10 absolute top-8 left-8" />
      </div>
      <div className="flex-1 flex items-center justify-center relative">
        <Logo className=" block md:hidden absolute top-8 left-8" />
        <div className=" flex flex-col sm:max-w-md w-full px-8">
          <div className="space-y-1">
            <h1 className=" text-gray-800 text-xl font-semibold">Sign In</h1>
            <p className=" text-sm text-gray-500">Welcome back to Qadabra</p>
          </div>

          <div className="mt-8">
            <div className=" space-y-1">
              <Label htmlFor="">Email</Label>
              <Input
                type="email"
                className=" bg-gray-50 placeholder:text-gray-300"
                placeholder="Enter your email"
              />
            </div>
            <div className=" space-y-1 mt-4">
              <div className="flex justify-between items-center">
                <Label htmlFor="">Password</Label>
                <Link
                  href="/"
                  className=" text-xs text-violet-700 font-medium hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
              <Input
                type="password"
                className=" bg-gray-50 placeholder:text-gray-300"
                placeholder="Enter your password"
              />
            </div>

            <div className=" mt-4 space-y-2">
              <Button rounded="full" className=" w-full">
                Sign In
              </Button>
              <Button
                rounded="full"
                className=" w-full gap-2 border-neutral-300 text-gray-800 hover:bg-white hover:text-gray-800"
                variant="outline"
              >
                <FcGoogle size={20} />
                Sign In with Google
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

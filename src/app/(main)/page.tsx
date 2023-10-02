import Container from "@/components/container";
import ExpertItem from "@/components/expert-item";
import Hero from "@/components/hero";
import { Button } from "@/components/ui/button";
import { TECH_LIST } from "@/lib/constants/tech";
import Image from "next/image";
import { FiGrid } from "react-icons/fi";
import { LuStar } from "react-icons/lu";

export default function MainPage() {
  return (
    <>
      <Hero />
      <Container className=" mt-8">
        <div className="">
          <h1 className=" text-xl font-semibold text-gray-800 underline decoration-2 underline-offset-8">
            Technologies
          </h1>
          <div className=" mt-4 flex gap-4 gap-x-8 overflow-x-scroll [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className=" w-full flex flex-col items-center">
              <div className=" w-16 aspect-square rounded-[40%] bg-gray-100 flex justify-center items-center">
                <FiGrid size={24} className="text-violet-700" />
              </div>
              <p className=" font-light text-sm mt-2 text-center">All</p>
            </div>
            {TECH_LIST.map((tech) => {
              return (
                <div
                  key={tech.id}
                  className=" w-full flex flex-col items-center"
                >
                  <div className=" w-16 aspect-square rounded-[40%] bg-gray-100 flex justify-center items-center">
                    <div className=" w-8 aspect-square relative overflow-hidden">
                      <Image
                        src={tech.image}
                        fill
                        alt={tech.name}
                        className=" object-contain"
                      />
                    </div>
                  </div>
                  <p className=" font-light text-sm mt-2 text-center">
                    {tech.name}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className=" mt-8">
          <h1 className=" text-xl font-semibold text-gray-800 underline decoration-2 underline-offset-8">
            Explore
          </h1>
          <div className=" mt-4 grid grid-cols-2 gap-4">
            <ExpertItem />
          </div>
        </div>
      </Container>
    </>
  );
}

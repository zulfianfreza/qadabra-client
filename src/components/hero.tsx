import Container from "./container";

export default function Hero() {
  return (
    <div className=" w-full bg-gradient-to-r from-violet-800 to-violet-700 min-h-[80px] pt-20 relative">
      <div className=" w-96 h-20 bg-violet-900/30 absolute top-0 left-0 z-0"></div>
      <div className=" w-28 h-48 bg-violet-900/30 absolute top-0 left-0 z-0"></div>
      <div className=" w-48 h-36 bg-violet-900/30 absolute top-0 left-0 z-0"></div>
      <div className=" w-96 h-20 bg-violet-800/30 absolute bottom-0 right-0 z-0"></div>
      <div className=" w-28 h-48 bg-violet-800/30 absolute bottom-0 right-0 z-0"></div>
      <div className=" w-48 h-36 bg-violet-800/30 absolute bottom-0 right-0 z-0"></div>
      <Container className="py-16">
        <div className="flex flex-col">
          <h1
            className=" text-white font-semibold text-4xl z-10"
            style={{ textShadow: "3px 3px 0 #000" }}
          >
            Find a Developer for{" "}
            <span className=" text-yellow-300">Live Mentorship</span> and&nbsp;
            <span className=" text-yellow-300">Solve</span> Your Error.
          </h1>
          <p className=" text-white mt-2 h-10">
            More than 1000 people have been helped
          </p>
        </div>
      </Container>
    </div>
  );
}

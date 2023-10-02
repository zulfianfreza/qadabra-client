"use client";

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="container mx-auto py-16 px-5 md:px-10 lg:px-24 xl:px-32">
      {children}
    </div>
  );
}

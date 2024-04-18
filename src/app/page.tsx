import Image from "next/image";
import NavBar from "@/components/NavBar";
import QuickSection from "@/components/QuickSection";

export default function Home() {
  return (
    <div className="flex flex-col bg-gradient-to-t from-[#1b163b] to-[#8d89b9] bg-cover min-h-screen">
      <NavBar></NavBar>
      <div className="flex bg-black/0 md:h-[600px] mt-40 text-white justify-center flex-row pb-10 px-40">
        <div className="bg-black/80 rounded-lg md:w-[1000px] grid divide-x">
          <div className="flex justify-center items-center">
            <QuickSection></QuickSection>
          </div>
        </div>
      </div>
    </div>
  );
}

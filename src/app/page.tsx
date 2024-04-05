import Image from "next/image";
import NavBar from "@/components/NavBar";
import QuickSection from "@/components/QuickSection";

export default function Home() {
  return (
    <div className="flex flex-col bg-gradient-to-t from-black to-[#6C54FF] bg-cover min-h-screen">
      <NavBar></NavBar>
      <div className="flex bg-black/0 h-[600px] mt-40 text-white justify-center flex-row pb-10 px-40">
        <div className="bg-black/80 rounded-lg w-[1000px] grid grid-cols-2 divide-x">
          <div className="flex justify-center items-center"><QuickSection></QuickSection></div>
          <div className="flex justify-center items-center">b</div>
        </div>
      </div>
    </div>
  );
}

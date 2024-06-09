import NavBar from "@/components/NavBar";
import QuickSection from "@/components/QuickSection";
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function Home() {
  return (
    <div className="flex flex-col bg-gradient-to-t from-[#003049] to-white bg-cover min-h-screen">
      <NavBar></NavBar>
      <div className="flex bg-black/0 md:h-[600px] mt-32 text-white justify-center flex-row pb-10 px-40">
        <div className="bg-black/80 rounded-lg md:w-[1000px] grid divide-x">
          <div className="flex justify-center items-center">
            <QuickSection></QuickSection>
          
          </div>
        </div>
      </div>
      <SpeedInsights></SpeedInsights>
    </div>
  );
}

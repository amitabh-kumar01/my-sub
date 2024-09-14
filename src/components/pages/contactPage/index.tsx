import { MapImage } from "@/assets";
import Formsection from "./components/Formsection";
import Topcomp from "./components/Topcomp";
export const ContactPage=()=>{
  return(
    <>
    <Topcomp/>
    <Formsection/>
    <img src={MapImage.src} className="w-full h-full mt-10" alt="" />
    </>
  )
}

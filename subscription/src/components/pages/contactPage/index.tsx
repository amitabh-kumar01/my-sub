//@ts-nocheck
import { MapImage } from "@/assets";
import Formsection from "./components/Formsection";
import Topcomp from "./components/Topcomp";
export const ContactPage=()=>{
  return (
    <>
      {/* <Topcomp/> */}
      <Formsection />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28018.565588681544!2d77.33974498503756!3d28.62014899293574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5456ef36d9f%3A0x3b7191b1286136c8!2sSector%2062%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1727252467125!5m2!1sen!2sin"
        className="w-full h-80 mt-10 border-none outline-none"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      {/* <img src={MapImage.src} className="w-full h-full mt-10" alt="" /> */}
    </>
  );
}

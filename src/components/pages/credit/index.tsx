import Topcomp from "./components/Topcomp"
interface LeftCompProps {
  path: string; // Specify that path is a string
}



export const Credit: React.FC<LeftCompProps> = ({ path }) => {
  return (
    <div className=" bg-customLightBlue md:px-8 px-0  pt-4 pb-20 mt-20">
      <Topcomp path={path}/>
    </div>
  );
}

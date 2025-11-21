import { FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const BusinessHeader = () => {
  return (
    <div className=" w-screen py-5 bg-[#F9F8FB] shadow-sm z-10 fixed">
      <div className="box hidden lg:flex items-center justify-between">
        {/* Left side */}
        <div className="flex items-center gap-8">
          <Link to="/home">
            <img src="/images/logo-coloured.png" alt="" className="h-7" />
          </Link>

          <div className="flex gap-4 items-center">
            <Link to="/home" className="hover:text-[#8d8c8e]">
              Individuals
            </Link>
            <Link to="/business" className="hover:text-[#8d8c8e]">
              Business
            </Link>
          </div>

           
        </div>
       <div className="flex justify-between gap-2 items-center">
         <div className="flex items-center">
          products <FaAngleDown/>
        </div>
        <button className="py-2 px-4 bg-black text-white rounded-2xl capitalize">
            get started
          </button>
       </div>
      </div>
    </div>
  );
};
export default BusinessHeader;

import { useState } from "react";
import { Countries, policyCardArr } from "../components/arrays/arrays";
import { FaAngleDown, FaAngleUp, FaCopy } from "react-icons/fa";
import { Link } from "react-router-dom";

const PolicyPage = () => {
  const [CountryDrop, setCountryDrop] = useState(false);
  const [selectedCountry, setselectedCountry] = useState();
  const [selectedCard,setselectedCard]=useState()

  const handleCountryDropOPen = () => {
    if (CountryDrop === false) {
      setCountryDrop(true);
    } else {
      setCountryDrop(false);
    }
  };
  const handleCountryDropClose = () => {
    setCountryDrop(false);
  };
  return (
    <div className="box py-48">
      <section className="relative flex flex-col">
        <div
          className="bg-[#f7f7fa] hover:bg-[#d4d4d4] w-[200px] mb-2 p-2 flex justify-between items-center rounded-lg"
          onClick={handleCountryDropOPen}
        >
          {selectedCountry ? selectedCountry : "Country of residency"}
          <div>{CountryDrop ? <FaAngleUp /> : <FaAngleDown />}</div>
        </div>
        <div
          className={
            CountryDrop
              ? "h-[200px] w-[200px] bg-[#f7f7fa] p-4 absolute top-12"
              : "hidden"
          }
        >
          <div className="flex flex-col gap-2" onClick={handleCountryDropClose}>
            {Countries.map((child) => (
              <div onClick={() => setselectedCountry(child)}>{child}</div>
            ))}
          </div>
        </div>

        <div className=" flex flex-col lg:flex-row flex-wrap gap-2 ">
            {policyCardArr.map((card)=>(
   <div className="lg:w-[250px]  bg-[#f9f8f5] rounded-lg flex flex-col gap-14 pt-10 p-4 ">
           <div className="flex flex-col gap-7">
             <FaCopy />
            <h4 className="text-xl">{card.title}</h4>
            <div className="text-[#a99386] text-sm">{card.content}</div>
           </div>
            <Link to={selectedCard} className="bg-black text-white w-[150px] p-2  capitalize text-center rounded-full" onClick={()=>setselectedCard(card.url)}>read more</Link>
          </div>
            ))}
        </div>
      </section>
    </div>
  );
};
export default PolicyPage;

import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="box py-20">
     <div className="flex flex-col  lg:flex-row items-center ">
       <div className="flex flex-col w gap-4 text-3xl text-black font-black mt-5">
        <div>
          <img src="/images/download.png" alt="" className="h-7"/>
        </div>
       <h3> Your passport to crypto</h3>
<p>Your universal account to buy, sell, trade and pay with crypto.</p>
<Link to="" className="bg-black text-white px-3 py-2 rounded-full">Buy crypto</Link>
      </div>
      <div>
        <img src="https://payload-marketing.moonpay.com/api/media/file/eng-us-hero-main.jpg" alt=""/>
      </div>
     </div>
    </div>
  );
};

export default HomePage;
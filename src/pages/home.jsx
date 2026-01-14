import { useRef, useState } from "react";
import { BsPause } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { GrPlayFill } from "react-icons/gr";
import { IoCheckmarkCircle } from "react-icons/io5";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [pausevideo, setpausevideo] = useState(false);
  const [fixedCont, setFixedCont] = useState(false);

  const videoRef = useRef(null);

  const handlepausevideo = () => {
    if (pausevideo === false) {
      setpausevideo(true);
      videoRef.current.play();
    } else {
      setpausevideo(false);
      videoRef.current.pause();
    }
  };

  setInterval(() => {
    setFixedCont((prev) => !prev);
  }, 5000);

  return (
    <div className=" pt-28">
      <div className="box flex flex-col  lg:flex-row justify-between  lg:gap-20 items-center ">
        <div className="flex flex-col  gap-4 text-3xl text-black font-black mt-5">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 lg:border-r px-4">
              <img src="/images/download.png" alt="" className="h-7" />
              <span className="flex text-[20px] lg:text-sm capitalize">
                <FaStar />
                <span> 4.4 on apple store</span>
              </span>
            </div>
            <div className="hidden lg:flex items-center gap-2  ">
              <img src="/images/download (1).png" alt="" className="h-7" />
              <span className="flex text-[20px] lg:text-sm  capitalize">
                <FaStar />
                <span> 4.5 on google play</span>
              </span>
            </div>
          </div>
          <h1 className="font-bold text-3xl lg:text-4xl">
            {" "}
            Your passport to crypto
          </h1>
          <p className="text-xl text-[#222] font-semibold">
            Your universal account to buy, sell, trade and pay with crypto.
          </p>
          <div className="flex justify-between items-center gap-5">
            <Link to="/buycrypto" className="primaryBtn">
              Buy crypto
            </Link>

            <div className="hidden lg:flex justify-between gap-3 items-center">
              <div className=" lg:bg-[#e2e8f0] h-10 w-10 p-1 rounded-md">
                <img src="/public/images/trustpilot-star-2.svg" alt="" />
              </div>
              <div className="text-sm">
                <h2>TrustScore 4.0</h2>
                <span className="text-sm uppercase font-light">
                  102k reviews
                </span>
              </div>
            </div>
          </div>
          <div className="capitalize w-full mt-10 relative ">
            <h6 className="text-xl py-10"> trusted by:</h6>
            <div className="Animwrapper">
              <div className="flex gap-6 innerwrapper">
                <img
                  src="/images/Mastercard.png"
                  alt=""
                  className="h-16 w-[350px]"
                />
                <img
                  src="/images/PayPal.png"
                  alt=""
                  className="h-16 w-[350px]"
                />
                <img
                  src="/images/Uniswap.png"
                  alt=""
                  className="h-16 w-[350px]"
                />
                <img
                  src="/images/Venmo.png"
                  alt=""
                  className="h-16 w-[350px]"
                />
                <img
                  src="https://payload-marketing.moonpay.com/api/media/file/Trust.png/"
                  alt=""
                  className="h-16 w-[350px]"
                />
                <img
                  src="https://payload-marketing.moonpay.com/api/media/file/Ledger.png"
                  alt=""
                  className="h-16 w-[350px]"
                />{" "}
                <img
                  src="https://payload-marketing.moonpay.com/api/media/file/MetaMask.png"
                  alt=""
                  className="h-16 w-[350px]"
                />{" "}
              </div>
            </div>
            <div className="bg-white/80 h-20 w-4 absolute bottom-0"></div>
            <div className="bg-white/55 h-20 w-4 absolute right-0 bottom-0"></div>
          </div>
        </div>
        <div>
          <img
            src="https://payload-marketing.moonpay.com/api/media/file/eng-us-hero-main.jpg"
            alt=""
            className=""
          />
        </div>
      </div>

      <div className="box relative text-white ">
        <video autoPlay loop ref={videoRef} className="mt-16 rounded-4xl ">
          <source src="https://payload-marketing.moonpay.com/api/media/file/Moon_Web_LeadVideo-Overlay-1920x1080-v1-RC.webm" />
        </video>
        <div className="absolute  w-[200px] lg:w-[400px] h-[200px] text-center font-bold top-2 lg:top-[30%] left-[20%] lg:left-[30%] text-2xl lg:text-5xl overflow-y-hidden">
          {" "}
          Buy. Sell. Go. Instantly. Only with MoonPay.
        </div>

        <div className="flex justify-between  items-center gap-28 lg:gap-5 absolute bottom-3 lg:bottom-10 left-14">
          <div
            className="p-2 rounded-full bg-gray-300 text-black"
            onClick={handlepausevideo}
          >
            {pausevideo ? <BsPause /> : <GrPlayFill />}
          </div>
          <div className="hidden lg:flex w-[60%] text-center ">
            MoonPay keeps it simple. You hold the keys - we are non-custodial,
            so your crypto always stays in your control.
          </div>
          <Link
            to="/buycrypto"
            className="bg-white w-[50%] lg:w-[20%] text-black capitalize font-bold text-center px-2 py-3 lg:py-6 rounded-4xl hover:bg-[#d8c8ff] hover:duration-1000"
          >
            buy crypto
          </Link>
        </div>
      </div>
      <section className="box text-black mt-[200px] flex flex-col items-center lg:flex-row justify-between gap-20">
        <div className=" capitalize flex flex-col items-start gap-5">
          <h4 className=" text-2xl lg:text-5xl overflow-y-hidden">
            Countless tokens at your fingertips.
          </h4>
          <div>
            From the headlines to hidden opportunities. Explore DeFi with
            MoonPay - simple, direct, decentralized trading that keeps you in
            control.
          </div>
          <div className="primaryBtn capitalize h-10 overflow-y-hidden">
            discover
          </div>
        </div>

        <div className="flex flex-col items-center">
          <img
            src="https://payload-marketing.moonpay.com/api/media/file/eng-100m-main.jpg"
            alt=""
            className=""
          />
          <i className="text-xs">
            DeFi trading services are not available in the EEA or New York.
          </i>
        </div>
      </section>

      <section className="box text-center mt-[200px] flex flex-col items-center gap-8">
        <h5 className=" text-2xl lg:text-4xl ">
          Experience crypto, effortlessly.
        </h5>
        <marquee behavior="" direction="">
          <div className="flex">
            <img
              src="https://payload-marketing.moonpay.com/api/media/file/mc-1.png"
              alt=""
              className="h-10"
            />
            <img
              src="https://payload-marketing.moonpay.com/api/media/file/visa-2.png"
              alt=""
              className="h-10"
            />
            <img
              src="https://payload-marketing.moonpay.com/api/media/file/apple-pay-1.png"
              alt=""
              className="h-10"
            />
            <img
              src="https://payload-marketing.moonpay.com/api/media/file/google-pay-1.png"
              alt=""
              className="h-10"
            />
            <img
              src="https://payload-marketing.moonpay.com/api/media/file/paypal-5.png"
              alt=""
              className="h-10"
            />
            <img
              src="https://payload-marketing.moonpay.com/api/media/file/venmo-4.png"
              alt=""
              className="h-10"
            />
            <img
              src="https://payload-marketing.moonpay.com/api/media/file/faster-payments.png"
              alt=""
              className="h-10"
            />
            <img
              src="https://payload-marketing.moonpay.com/api/media/file/revolut-pay.png"
              alt=""
              className="h-10"
            />
            <img
              src="  https://payload-marketing.moonpay.com/api/media/file/paysafe-2.png"
              alt=""
              className="h-10"
            />
            <img
              src="https://payload-marketing.moonpay.com/api/media/file/yellow-card.png"
              alt=""
              className="h-10"
            />
            <img
              src="https://payload-marketing.moonpay.com/api/media/file/sepa.png"
              alt=""
              className="h-10"
            />
          </div>
        </marquee>
        <div className="text-xs">+ 9 more payment options</div>
      </section>

      <section className="box py-6 flex flex-col lg:flex-row justify-between">
        <div className="bg-[#F9F8FB] h-[450px] w-[320px] rounded-2xl">
          <video loop autoPlay controls>
            <source
              src="https://payload-marketing.moonpay.com/api/media/file/MP_WebAnims_Buy-v3.mp4"
              alt=""
              className="rounded-tr-2xl rounded-tl-2xl"
            />
          </video>
          <div className="flex flex-col items-start gap-4 capitalize p-5">
            <h4>buy</h4>
            <div className="text-sm">
              Buy crypto instantly with Apple Pay, Google Pay or your card.
              PayPal, Venmo and bank transfers are also available in select
              regions.
            </div>
            <div className="bg-black text-white px-3 py-2 rounded-2xl">
              buy crypto
            </div>
          </div>
        </div>
        <div className="bg-[#F9F8FB] h-[450px] w-[320px] rounded-2xl">
          <video loop autoPlay controls>
            <source
              src="https://payload-marketing.moonpay.com/api/media/file/MP_WebAnims_Sell-v5.mp4"
              alt=""
              className="rounded-tr-2xl rounded-tl-2xl"
            />
          </video>
          <div className="flex flex-col items-start gap-4 capitalize p-5">
            <h4>sell</h4>
            <div className="text-sm">
              Sell crypto instantly at the best available rate directly to your
              bank, card or MoonPay Balance.
            </div>
            <div className="bg-black text-white px-3 py-2 rounded-2xl">
              sell crypto
            </div>
          </div>
        </div>
        <div className="bg-[#F9F8FB] h-[450px] w-[320px] rounded-2xl">
          <video loop autoPlay controls>
            <source
              src="https://payload-marketing.moonpay.com/api/media/file/MP_WebAnims_SendReceive-v6.mp4"
              alt=""
              className="rounded-tr-2xl rounded-tl-2xl"
            />
          </video>
          <div className="flex flex-col items-start gap-4 capitalize px-5 py-5">
            <h4>send and recieve</h4>
            <div className="text-sm">
              Move funds your way. Transfer between your bank, card, MoonPay
              Balance or deposit from another wallet. You are always in control
              of your money, just like your crypto.
            </div>
            <div className="bg-black text-white px-3 py-2 rounded-2xl">
              send and recieve
            </div>
          </div>
        </div>
      </section>
      <img
        src="https://storage.googleapis.com/otherlife-public-assets-prod/test/stats-gradient.png"
        alt=""
        className=" w-screen"
      />
      <section className="bg-black py-5">
        <div className=" text-white flex-col text-center">
          <h3 className="text-[#c2c1c0] ">
            {" "}
            Trusted by millions of users across 180 countries.
          </h3>
          <div className="box text-3xl lg:text-[150px] text-white">
            35,000,000+
          </div>
          <div className="text-[#c2c1c0] ">Verified accounts</div>
        </div>
        <video autoPlay controls loop>
          <source src="https://payload-marketing.moonpay.com/api/media/file/Moon_Web_GlobeVideo-14s-1920x1080-v1-vp9-chrome-COMPRESSED.webm" />
        </video>
        <div className="box relative">
          <video className=" mt-14 rounded-2xl " autoPlay controls loop>
            <source src="https://payload-marketing.moonpay.com/api/media/file/Moon_Web_PeopleVid-Overlay-1920x1080-v1-RC.webm" />
          </video>
          <div className="absolute top-3 lg:top-[50%] left-1 lg:left-[30%] text-white lg:w-[400px] flex flex-col items-center gap-2.5">
            <div className=" font-bold text-2xl lg:text-4xl text-center ">
              The future of money starts with you.
            </div>
            <div className="text-center">
              Always connected. Always in control. MoonPay.
            </div>
            <div className="bg-white text-black rounded-2xl px-3 py-3 capitalize font-medium">
              download the app
            </div>
          </div>
        </div>
      </section>
      <img
        src="https://storage.googleapis.com/otherlife-public-assets-prod/test/stats-gradient.png"
        alt=""
        className=" w-screen rotate-180"
      />
      <section className="box py-20">
        <div className="flex flex-col gap-3">
          <h5 className="text-5xl overflow-y-hidden">
            See what our customers say
          </h5>
          <Link
            to="https://www.trustpilot.com/review/moonpay.com"
            className="border border-black w-[250px] gap-1 p-1 rounded-md flex items-center"
          >
            <img
              src="/public/images/trustpilot-star-2.svg"
              alt=""
              className="bg-[#e5e5e5] rounded-full p-1"
            />
            TrustScore 4.0 <span className="text-xs">(102k reviews)</span>
          </Link>
          <div className="w-[400px]">
            With over 100,000 reviews, MoonPay is one of the most reviewed and
            highest scoring platforms for crypto.
          </div>
          <Link
            to="https://www.trustpilot.com/review/moonpay.com"
            className="bg-black text-white capitalize text-center px-4 py-4 rounded-full w-[100px]"
          >
            reviews
          </Link>
        </div>
      </section>

      <section className="flex flex-col items-center">
        <div className=" w-[1200px] flex justify-between gap-4  slideright">
          <div className=" bg-[#f9f8fb] flex flex-col  gap-3 rounded-2xl p-4 ">
            <div className="flex justify-between gap-2 items-center">
              <div className="ratingStar">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="capitalize border border-black p-2 rounded-lg flex items-center gap-1 ">
                <IoCheckmarkCircle />
                <span>verified review</span>
              </div>
            </div>
            <div className="">
              It’s an easy platform to purchase crypto and send directly to my
              different wallets. One path to minimise fees instead of multiple
              wallet transfers requiring fees every time.
            </div>
            <div>Stuart Graham</div>
          </div>

          <div className=" bg-[#f9f8fb] flex flex-col  gap-3 rounded-2xl p-4 ">
            <div className="flex justify-between gap-2 items-center">
              <div className="ratingStar">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="capitalize border border-black p-2 rounded-lg flex items-center gap-1 ">
                <IoCheckmarkCircle />
                <span>verified review</span>
              </div>
            </div>
            <div className="">
              It’s an easy platform to purchase crypto and send directly to my
              different wallets. One path to minimise fees instead of multiple
              wallet transfers requiring fees every time.
            </div>
            <div>Stuart Graham</div>
          </div>

          <div className=" bg-[#f9f8fb] flex flex-col  gap-3 rounded-2xl p-4 ">
            <div className="flex justify-between gap-2 items-center">
              <div className="ratingStar">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="capitalize border border-black p-2 rounded-lg flex items-center gap-1 ">
                <IoCheckmarkCircle />
                <span>verified review</span>
              </div>
            </div>
            <div className="">
              It’s an easy platform to purchase crypto and send directly to my
              different wallets. One path to minimise fees instead of multiple
              wallet transfers requiring fees every time.
            </div>
            <div>Stuart Graham</div>
          </div>

          <div className=" bg-[#f9f8fb] flex flex-col  gap-3 rounded-2xl p-4 ">
            <div className="flex justify-between gap-2 items-center">
              <div className="ratingStar">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="capitalize border border-black p-2 rounded-lg flex items-center gap-1 ">
                <IoCheckmarkCircle />
                <span>verified review</span>
              </div>
            </div>
            <div className="">
              It’s an easy platform to purchase crypto and send directly to my
              different wallets. One path to minimise fees instead of multiple
              wallet transfers requiring fees every time.
            </div>
            <div>Stuart Graham</div>
          </div>
        </div>

        <div className=" mt-4 w-[1200px] flex justify-between gap-4  slideleft">
          <div className="   bg-[#f9f8fb] flex flex-col  gap-3 rounded-2xl p-4 ">
            <div className="flex justify-between gap-2 items-center">
              <div className="ratingStar">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="capitalize border border-black p-2 rounded-lg flex items-center gap-1 ">
                <IoCheckmarkCircle />
                <span>verified review</span>
              </div>
            </div>
            <div className="">
              It’s an easy platform to purchase crypto and send directly to my
              different wallets. One path to minimise fees instead of multiple
              wallet transfers requiring fees every time.
            </div>
            <div>Stuart Graham</div>
          </div>

          <div className=" bg-[#f9f8fb] flex flex-col  gap-3 rounded-2xl p-4 ">
            <div className="flex justify-between gap-2 items-center">
              <div className="ratingStar">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="capitalize border border-black p-2 rounded-lg flex items-center gap-1 ">
                <IoCheckmarkCircle />
                <span>verified review</span>
              </div>
            </div>
            <div className="">
              It’s an easy platform to purchase crypto and send directly to my
              different wallets. One path to minimise fees instead of multiple
              wallet transfers requiring fees every time.
            </div>
            <div>Stuart Graham</div>
          </div>

          <div className=" bg-[#f9f8fb] flex flex-col  gap-3 rounded-2xl p-4 ">
            <div className="flex justify-between gap-2 items-center">
              <div className="ratingStar">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="capitalize border border-black p-2 rounded-lg flex items-center gap-1 ">
                <IoCheckmarkCircle />
                <span>verified review</span>
              </div>
            </div>
            <div className="">
              It’s an easy platform to purchase crypto and send directly to my
              different wallets. One path to minimise fees instead of multiple
              wallet transfers requiring fees every time.
            </div>
            <div>Stuart Graham</div>
          </div>

          <div className=" bg-[#f9f8fb] flex flex-col  gap-3 rounded-2xl p-4 ">
            <div className="flex justify-between gap-2 items-center">
              <div className="ratingStar">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="capitalize border border-black p-2 rounded-lg flex items-center gap-1 ">
                <IoCheckmarkCircle />
                <span>verified review</span>
              </div>
            </div>
            <div className="">
              It’s an easy platform to purchase crypto and send directly to my
              different wallets. One path to minimise fees instead of multiple
              wallet transfers requiring fees every time.
            </div>
            <div>Stuart Graham</div>
          </div>
        </div>
      </section>
      <section className=" mt-20 py-20  homeLastSecBG h-[800px] overflow-auto">
        <div className="bg-white w-[80%] lg:w-[70%] h-full lg:h-full mx-auto p-10 rounded-3xl flex flex-col items-center gap-10">
          <div className="flex gap-2">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 lg:border-r px-4">
                <img src="/images/download.png" alt="" className="h-7" />
                <span className="flex text-[20px] lg:text-sm capitalize">
                  <FaStar />
                  <span> 4.4 on apple store</span>
                </span>
              </div>
              <div className="hidden lg:flex items-center gap-2  ">
                <img src="/images/download (1).png" alt="" className="h-7" />
                <span className="flex items-center text-[20px] lg:text-sm  capitalize">
                  <FaStar />
                  <span> 4.5 on google play</span>
                </span>
              </div>
            </div>
          </div>
          <h4 className="text-2xl lg:text-5xl text-center py-10">
            {" "}
            The future of money starts with you
          </h4>
          <div className="bg-black w-[80%] h-[150px] lg:h-[280px] lg:w-[400px] overflow-hidden  rounded-lg QRanim flex items-center justify-end relative p-2 text-white">
            <div className="absolute text-[7px] lg:text-[15px]  text-white left-4 w-[30%] font-bold">
              Download the MoonPay App
            </div>
            <img
              src="https://payload-marketing.moonpay.com/api/media/file/app-download-qr-code.svg"
              alt=""
              className="rounded-lg absolute w-[100px] lg:w-[250px]"
            />
          </div>
        </div>
      </section>

      <section
        className={
          fixedCont ? "fixed bottom-0 right-0 flex justify-end" : "hidden"
        }
      >
        <div className=" top-0 bg-black h-[150px] w-[300px] overflow-hidden  rounded-lg QRanim  flex items-center justify-end relative p-4 text-white">
          <div className="absolute text-[10px] text-white left-4 w-[30%] font-bold">
            Download the MoonPay App
          </div>
          <img
            src="https://payload-marketing.moonpay.com/api/media/file/app-download-qr-code.svg"
            alt=""
            className="rounded-lg h-[80%] absolute"
          />
        </div>
      </section>
    </div>
  );
};

export default HomePage;

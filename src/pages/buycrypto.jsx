import {
  FaAngleDown,
  FaAngleLeft,
  FaAngleRight,
  FaMinus,
  FaPlus,
  FaStar,
} from "react-icons/fa";
import {
  IoIosInformationCircleOutline,
  IoMdArrowDropdown,
  IoMdArrowDropup,
  IoMdSettings,
} from "react-icons/io";
import { useState } from "react";
import { BiGridHorizontal } from "react-icons/bi";
import { GoDotFill } from "react-icons/go";
import { PiDotsThreeOutline } from "react-icons/pi";
import { RxShadowOuter } from "react-icons/rx";
import { GiCorkedTube, GiTargeting } from "react-icons/gi";
import { WiMoonAltNew } from "react-icons/wi";
import { BsThreeDots } from "react-icons/bs";
import { Link } from "react-router-dom";
import { IoCheckmarkCircle } from "react-icons/io5";
import { MdArrowOutward,  } from "react-icons/md";
import BuyPagefirstSection from "../components/BuyPageSections/buypagefirstsection";
import { availableCoin } from "../components/arrays/arrays";

const BuycryptoPage = () => {
 

  

  const [seemore, setseemore] = useState(false);
  const handleseeMore = () => {
    if (seemore === false) {
      setseemore(true);
    } else {
      setseemore(false);
    }
  };
  const [getApp, setgetApp] = useState(false);
  const handlegetAppOpening = () => {
    if (getApp === false) {
      setgetApp(true);
    }
  };
  const handlegetAppClosing = () => {
    setgetApp(false);
  };
  const [firstCard, setfirstCard] = useState(false);
  const [secondCard, setsecondCard] = useState(false);
  const [thirdCard, setthirdCard] = useState(false);
  const [fourthCard, setfourthCard] = useState(false);
  const [fifthCard, setfifthCard] = useState(false);
  const [sixthCard, setsixthCard] = useState(false);
  const [seventhCard, setseventhCard] = useState(false);
  const [eighthCard, seteighthCard] = useState(false);

  // event handlers
  const handlefirstCard = () => {
    if (firstCard === false) {
      setfirstCard(true);
    } else {
      setfirstCard(false);
    }
  };

  const handlesecondCard = () => {
    if (secondCard === false) {
      setsecondCard(true);
    } else {
      setsecondCard(false);
    }
  };

  const handlethirdCard = () => {
    if (thirdCard === false) {
      setthirdCard(true);
    } else {
      setthirdCard(false);
    }
  };

  const handlefourthCard = () => {
    if (fourthCard === false) {
      setfourthCard(true);
    } else {
      setfourthCard(false);
    }
  };

  const handlefifthCard = () => {
    if (fifthCard === false) {
      setfifthCard(true);
    } else {
      setfifthCard(false);
    }
  };

  const handlesixthCard = () => {
    if (sixthCard === false) {
      setsixthCard(true);
    } else {
      setsixthCard(false);
    }
  };

  const handleseventhCard = () => {
    if (seventhCard === false) {
      setseventhCard(true);
    } else {
      setseventhCard(false);
    }
  };

  const handleeighthCard = () => {
    if (eighthCard === false) {
      seteighthCard(true);
    } else {
      seteighthCard(false);
    }
  };

  return (
    <div>
      {/* first section */}
     <BuyPagefirstSection />
   {/* second section */}
      <section className="border-t border-b py-10 flex flex-col items-center gap-3">
        <div className="font-bold capitalize">payment methods</div>
        <div className="box lg:w-full flex justify-between gap-18">
          <img src="https://payload-marketing.moonpay.com/api/media/file/google-pay.png" alt=""/>

           <img src="https://payload-marketing.moonpay.com/api/media/file/mastercard.png" alt=""/>

            <img src="https://payload-marketing.moonpay.com/api/media/file/paypal-2.png" alt=""/>

             <img src="https://payload-marketing.moonpay.com/api/media/file/visa.png" alt=""/>

              <img src="https://payload-marketing.moonpay.com/api/media/file/apple-pay.png" alt=""/>
        </div>
      </section>
         {/* third section */}
      <section className="box py-10  mt-10">
        <div>
          <h4 className="text-4xl">How to buy crypto on MoonPay</h4>
          <div className="text-[#737576] font-normal">
            Buy crypto in 150+ countries using the local currency of your bank
            account. We offer different payment options that cater to your
            region.
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mt-10">
          <div className="bg-[#f9f8f5] p-5 rounded-lg  w-[300px] flex flex-col items-start gap-3 justify-center">
            <img
              src=" https://payload-marketing.moonpay.com/api/media/file/open-account-2.svg"
              alt=""
            />
            <h4>1. Open your free account</h4>
            <p className="text-sm">
              Buying cryptocurrency on MoonPay is simple. Sign up for a free
              account in seconds from our app. Then add a few personal details
              to verify your identity.
            </p>
          </div>

          <div className="bg-[#f9f8f5] p-5 rounded-lg w-[300px] flex flex-col items-start justify-center gap-3">
            <img
              src=" https://payload-marketing.moonpay.com/api/media/file/choose-crypto-1.svg
           "
              alt=""
            />
            <h4>2. Choose the crypto you want to buy</h4>
            <p className="text-sm">
              Pick from over 100 cryptocurrencies, like Bitcoin (BTC), Ethereum
              (ETH), Solana (SOL), Tether (USDT), USD Coin (USDC) and more.
            </p>
          </div>

          <div className="bg-[#f9f8f5] p-5 rounded-lg  w-[300px] flex flex-col items-start justify-center gap-3">
            <img
              src="https://payload-marketing.moonpay.com/api/media/file/open-wallet-address.svg
           "
              alt=""
            />
            <h4>3. Enter your wallet address</h4>
            <p className="text-sm">
              MoonPay works with most non-custodial crypto wallets. And if you
              don’t have a wallet yet, it’s simple to get a non-custodial wallet
              at checkout. Coming to MoonPay through a partner? We’ll pre-fill
              your wallet address automagically.
            </p>
          </div>

          <div className="bg-[#f9f8f5] p-5 rounded-lg  w-[300px] flex flex-col items-start justify-center gap-3">
            <img
              src="https://payload-marketing.moonpay.com/api/media/file/top-up-balance.svg
            "
              alt=""
            />
            <h4>4. Top up your MoonPay Balance</h4>
            <p className="text-sm">
              The easiest way to buy cryptocurrency is by topping up your
              MoonPay Balance. Just add funds in your MoonPay account using
              convenient methods like debit card and Apple Pay to enjoy faster
              crypto purchases with lower fees, higher approval rates, and
              zero-fee withdrawals when you cash out to certain payment methods.
            </p>
          </div>

          <div className="bg-[#f9f8f5] p-5 rounded-lg  w-[300px] flex flex-col items-start justify-center gap-3">
            <img
              src="https://payload-marketing.moonpay.com/api/media/file/checkout-and-pay-2.svg
            "
              alt=""
            />
            <h4>5. Checkout and pay</h4>
            <p className="text-sm">
              Don't want to pay with your balance? No worries, there are still
              loads of options to choose from. You can pay with a credit/debit
              card, Apple Pay, Google Pay, or PayPal. We also support local
              options such as SEPA , UK Faster Payments, Pix in Brazil, as well
              as Venmo and bank transfers in the US. Once paid, that’s it —
              we’ll handle the rest.
            </p>
          </div>
        </div>
      </section>
   {/* fourth section */}
      <section className="py-20">
        <div className="box flex flex-wrap gap-5">
          {seemore
            ? availableCoin?.map((item, id) => (
                <div key={id} className="flex gap-2 items-center w-[150px]">
                  <img src={item.image} alt="" className="h-10 w-10" />
                  <div className="text-[10px] font-bold">{item.name}</div>
                  <div className="text-[10px] text-[#928e89] uppercase">
                    {item.symbol}
                  </div>
                </div>
              ))
            : availableCoin?.slice(0, 12).map((item, id) => (
                <div key={id} className="flex gap-3 items-center w-[150px]">
                  <img src={item.image} alt="" className="h-10 w-10" />
                  <div className="text-[10px] font-bold">{item.name}</div>
                  <div className="text-[10px] text-[#928e89] uppercase">
                    {item.symbol}
                  </div>
                </div>
              ))}
        </div>

        <div
          className="mx-auto w-[150px] hover:bg-[#e0dede]  text-black mt-5 flex items-center justify-center gap-2 rounded-md"
          onClick={handleseeMore}
        >
          {seemore ? "show less asset" : "show all asset"}
          {seemore ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
        </div>
      </section>
   {/* fifth section */}
      <section className="py-20">
        <img
          src="https://payload-marketing.moonpay.com/api/media/file/Buy.png"
          alt=""
        />
      </section>
   {/* sixth section */}
      <section className="box">
        <h4 className="text-4xl">
          The better way to buy crypto, now at your fingertips
        </h4>
        <div className="flex flex-col lg:flex-row justify-between gap-4 py-10">
          <div className="flex items-center">
            <BiGridHorizontal size={30} />
            <p className="text-[10px] font-bold text-[#737682]">
              Buy 100+ cryptocurrencies. Own fractions of coins
            </p>
          </div>

          <div className="flex  items-center">
            <GoDotFill size={30} />
            <p className="text-[10px] font-bold text-[#737682]">
              Works in 150+ countries. Use your local currency
            </p>
          </div>

          <div className="flex items-center">
            <PiDotsThreeOutline size={30} />
            <p className="text-[10px] font-bold text-[#737682]">
              Fees starting from 1%, when you pay with your bank
            </p>
          </div>

          <div className="flex items-center">
            <RxShadowOuter size={30} />
            <p className="text-[10px] font-bold text-[#737682]">
              Works with credit/debit cards, PayPal and more
            </p>
          </div>
        </div>
      </section>
   {/* seventh section */}
      <section className="box py-10 flex flex-col lg:grid grid-rows-3 grid-cols-2 gap-2">
        <div className="bg-[#f9f8f5] row-span-1 col-span-2 flex flex-col lg:flex-row items-center justify-between gap-5 p-4 lg:p-20 rounded-md">
          <img
            src="https://payload-marketing.moonpay.com/api/media/file/Buy%20SOL.png"
            alt=""
          />
          <div>
            <h4 className="font-bold capitalize">Low and transparent fees</h4>
            <div className="text-[#cdbdaf]">
              We believe in always giving you a fair deal. Transaction fees are
              as low as 1% for bank transfers and 4.5% for Visa cards.
            </div>
          </div>
        </div>
        <div className="bg-[#f9f8f5] row-span-1 col-span-1 flex flex-col items-center gap-5 p-4 rounded-md">
          <img
            src="https://payload-marketing.moonpay.com/api/media/file/start%20little%20%402x.png"
            alt=""
          />

          <div>
            <h4 className="font-bold capitalize">
              Go big, or start small. It’s your call
            </h4>
            <div className="text-[#cdbdaf]">
              Because you can buy a fraction of a coin, you can kickstart your
              crypto journey with a small purchase first. And when you’re ready
              to buy more, MoonPay’s range of payment methods can help with
              that.
            </div>
          </div>
        </div>
        <div className="bg-[#f9f8f5] row-span-1 col-span-1 flex flex-col items-center gap-5 p-4 rounded-md">
          <img
            src="https://payload-marketing.moonpay.com/api/media/file/bring%20together%20all%20your%20wallets%20%402x.png"
            alt=""
          />

          <div>
            <h4 className="font-bold capitalize">
              {" "}
              Bring together all your wallets
            </h4>
            <div className="text-[#cdbdaf]">
              Buy crypto, store it in any non-custodial wallet, and keep track
              of how it’s performing. And if you don’t have a wallet yet, you
              can get one at checkout in the MoonPay app
            </div>
          </div>
        </div>
        <div className="bg-[#f9f8f5] row-span-1 col-span-1 flex flex-col items-center gap-5 p-4">
          <img
            src="https://payload-marketing.moonpay.com/api/media/file/1.%20Discovery.png"
            alt=""
          />
          <h4 className="font-bold capitalize"> Worldwide coverage</h4>
          <div className="text-[#cdbdaf]">
            Buy crypto in 150+ countries using the local currency of your bank
            account. We offer different payment options that work great in your
            region.
          </div>
        </div>
        <div className="bg-[#f9f8f5] row-span-1 col-span-1 flex flex-col items-center gap-5 p-4">
          <img
            src="https://payload-marketing.moonpay.com/api/media/file/start%20little-1.png"
            alt=""
          />
          <div>
            <h4 className="font-bold capitalize">Set it. Forget it</h4>
            <div className="text-[#cdbdaf]">
              Tired of trying to time the market perfectly? Try MoonPay's new
              Recurring Buy feature to dollar-cost average your crypto purchases
              at regular intervals like weekly or monthly. *Available in select
              countries only.*
            </div>
          </div>
        </div>
      </section>
   {/* eighth section */}
      <section className="box py-10 flex flex-col lg:grid grid-rows-4 grid-cols-4 gap-4">
        <div className="col-span-4 row-span-4 flex flex-col">
          <h4 className="text-2xl">Round-the-clock protection</h4>
          <div className="lg:w-[50%] text-[#cdbdaf]">
            Our customers trust us to make buying crypto secure. We follow
            proactive, industry-standard security measures to help keep them
            safe.
          </div>
        </div>

        <div className="col-span-1  flex">
          <div className="flex items-center gap-2">
            <GiTargeting />
            <div>Dedicated fraud and security teams</div>
          </div>
        </div>

        <div className="col-span-1 flex">
          <div className="flex items-center gap-2">
            <WiMoonAltNew />
            <div>Independently audited for ISO 27001 compliance</div>
          </div>
        </div>

        <div className="col-span-1 flex">
          <div className="flex items-center gap-2">
            <GiCorkedTube />
            <div>$8B+ crypto safely delivered</div>
          </div>
        </div>

        <div className="col-span-1 flex">
          <div className="flex items-center gap-2">
            <BsThreeDots />
            <div>35M+ accounts created. Works with 300+ partners</div>
          </div>
        </div>

        <div className="row-span-1 col-span-4 bg-[#f9f8f5] py-10  rounded-lg flex flex-col lg:flex-row items-center gap-5 p-4">
          <img
            src="https://payload-marketing.moonpay.com/api/media/file/Our%20Enhanced%20Security%20v3-1.png"
            alt=""
          />
          <div>
            <h4>Our security credentials are in check</h4>
            <div className="text-[#cdbdaf]">
              {" "}
              We use AES-256 encryption and we’re PCI-DSS compliant. We also
              hold the widely-respected ISO 27001 certification. This
              certification is independently audited and a global standard for
              managing information security.
            </div>
          </div>
        </div>

        <div className="col-span-2 row-span-1 bg-[#f9f8f5] py-10 rounded-lg p-5 flex flex-col items-start justify-center gap-3">
          <img
            src="https://payload-marketing.moonpay.com/api/media/file/TP%204.1%20en.png"
            alt=""
          />

          <div>
            <h4>We’ve got your back</h4>
            <div className="text-[#cdbdaf]">
              Our custom-built tools and processes were built with security at
              their core. And our specialist team is working constantly to make
              sure you’re protected from emerging threats.
            </div>
          </div>
        </div>
        <div className="col-span-2 row-span-1 bg-[#f9f8f5] py-10 rounded-lg  p-5 flex flex-col items-start justify-center gap-3">
          <img
            src="https://payload-marketing.moonpay.com/api/media/file/4.%20P%26L.png"
            alt=""
          />
          <div>
            <h4> It’s your crypto, not ours</h4>
            <div className="text-[#cdbdaf]">
              MoonPay is non-custodial, which means only you have control of
              your crypto. We will never use, lend, or access it without your
              permission.
            </div>
          </div>
        </div>
      </section>
   {/* ninth section */}
      <section className="flex flex-col items-center gap-3 py-20">
        <h4 className="capitalize font-extralight">
          trusted by millions of customers
        </h4>
        <div className="font-black text-6xl lg:text-9xl overflow-hidden bg-clip-text text-transparent text-bg">
          {" "}
          35,000,000+
        </div>
      </section>
   {/* tenth section */}
      <section className="my-20 bg-[url('https://payload-marketing.moonpay.com/api/media/file/Get%20the%20App.png?w=1920&q=90')] bg-no-repeat bg-center bg-cover h-[500px] rounded-3xl flex flex-col items-center justify-center text-center p-20 gap-4">
        <h4 className="text-white font-bold text-3xl lg:text-6xl">
          {" "}
          Get the MoonPay app and buy crypto on the go
        </h4>
        <div className="text-[#cdbdaf]">
          Whether you're a seasoned trader or buying crypto for the first time,
          the MoonPay app gives you the tools to get it done.
        </div>
        <div
          className="bg-white hover:bg-[#cdbdaf] capitalize font-normal px-2 py-1 rounded-md"
          onClick={handlegetAppOpening}
        >
          get moonpay app
        </div>
      </section>
   {/* eleventh section */}
      <section
        className={
          getApp
            ? "px-20 py-10 w-screen bg-white/20 backdrop-blur-sm fixed left-0 top-0 z-30 h-[100vh] flex items-center justify-center"
            : "hidden"
        }
        onClick={handlegetAppClosing}
      >
        <div className="h-[400px] w-[400px] bg-black p-7 rounded-3xl flex flex-col item-center justify-center gap-4">
          <h4 className="text-white text-3xl capitalize font-bold py-4">
            get the moonpay app
          </h4>
          <img src="https://www.moonpay.com/app-download-qr-code.svg" alt="" />
          <div className="text-[#cdbdaf] py-3 overflow-hidden text-center">
            scan the QR code to download the app
          </div>
        </div>
      </section>
         {/* twelveth section */}
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
         {/* thirteenth section */}
      <section>
        <div className=" w-[1200px] flex justify-between gap-4  slideright">
          <div className=" bg-[#eff3f9] flex flex-col  gap-3 rounded-2xl p-4 ">
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

          <div className=" bg-[#eff3f9] flex flex-col  gap-3 rounded-2xl p-4 ">
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

          <div className=" bg-[#eff3f9] flex flex-col  gap-3 rounded-2xl p-4 ">
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

          <div className=" bg-[#eff3f9] flex flex-col  gap-3 rounded-2xl p-4 ">
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
          <div className="   bg-[#eff3f9] flex flex-col  gap-3 rounded-2xl p-4 ">
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

          <div className=" bg-[#eff3f9] flex flex-col  gap-3 rounded-2xl p-4 ">
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

          <div className=" bg-[#eff3f9] flex flex-col  gap-3 rounded-2xl p-4 ">
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

          <div className=" bg-[#eff3f9] flex flex-col  gap-3 rounded-2xl p-4 ">
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
   {/* fourteenth section */}
      <section className="box flex flex-col lg:grid grid-cols-2 gap-2 py-20">
        {/* section header */}
        <h5 className="text-2xl lg:text-4xl w-[60%] col-span-2">
          Frequently asked questions about buying crypto
        </h5>
        {/* first card */}
        <div className="bg-[#f9f8f5] hover:bg-[#e6e5e3] px-3 py-5 rounded-4xl col-span-1 flex flex-col gap-3 h-max">
          <div
            className="font-semibold text-xs flex justify-between items-center"
            onClick={handlefirstCard}
          >
            Why buy cryptocurrency?
            <div className="font-light bg-white p-3 rounded-[50%]">
              {firstCard ? <FaMinus size={10} /> : <FaPlus size={10} />}
            </div>
          </div>
          <div
            className={
              firstCard ? "text-[#737373] text-sm font-medium" : "hidden"
            }
          >
            Only you can determine whether buying cryptocurrency is worth it,
            and you should remember that purchasing any cryptocurrency carries
            certain risks. Some factors that others may consider when deciding
            whether to make a purchase are the token's price, market cap,
            supply, as well as your individual risk appetite.MoonPay cannot
            offer you investment advice and cannot tell you whether any
            cryptocurrency is worth buying. Always remember to do your own
            research before making any purchase!
          </div>
        </div>

        {/* second card */}
        <div className="bg-[#f9f8f5] hover:bg-[#e6e5e3] px-3 py-5 rounded-4xl col-span-1 flex flex-col h-max gap-3">
          <div
            className="font-semibold text-xs flex justify-between items-center"
            onClick={handlesecondCard}
          >
            What credit cards can I use to purchase cryptocurrency?
            <div className="font-light bg-white p-3 rounded-[50%]">
              {secondCard ? <FaMinus size={10} /> : <FaPlus size={10} />}
            </div>
          </div>
          <div
            className={
              secondCard
                ? "text-[#737373] text-sm flex flex-col gap-2 font-medium"
                : "hidden"
            }
          >
            <p>
              {" "}
              You can use any Visa, Mastercard or Maestro debit card or credit
              card to buy crypto on MoonPay.We also support bank transfers, and
              mobile options like Apple Pay and Google Pay. If you're interested
              in buying crypto with local methods, we accept SEPA (EU), Faster
              Payments Service (UK), and PIX (Brazil).
            </p>
            <p>
              You can also top up your wallet with euros, pounds, or dollars and
              use your MoonPay Balance to purchase crypto like Bitcoin,
              Ethereum, and more. With MoonPay Balance, you'll enjoy quicker
              transactions, higher approval rates, and zero-fee withdrawals when
              you cash out via bank transfer.
            </p>
          </div>
        </div>

        {/* third card */}
        <div className="bg-[#f9f8f5] hover:bg-[#e6e5e3] px-3 py-5 rounded-4xl col-span-1 flex flex-col gap-3 h-max ">
          <div
            className="font-semibold text-xs flex justify-between items-center"
            onClick={handlethirdCard}
          >
            How many cryptocurrencies does MoonPay support?
            <div className="font-light bg-white p-3 rounded-[50%]">
              {thirdCard ? <FaMinus size={10} /> : <FaPlus size={10} />}
            </div>
          </div>
          <div
            className={
              thirdCard ? "text-[#737373] text-sm font-medium" : "hidden"
            }
          >
            MoonPay allows you to buy cryptocurrency from our catalog of more
            than 100 supported tokens. Choose from cryptocurrencies like Bitcoin
            (BTC), Ethereum (ETH), Solana (SOL), and XRP (XRP), or stablecoins
            like Tether (USDT), USDC (USDC), and Dai (DAI).
          </div>
        </div>

        {/* fourth card */}
        <div className="bg-[#f9f8f5] hover:bg-[#e6e5e3] px-3 py-5 rounded-4xl col-span-1 flex flex-col gap-3 h-max">
          <div
            className="font-semibold text-xs flex justify-between items-center"
            onClick={handlefourthCard}
          >
            How long does it take to receive crypto purchased on MoonPay?
            <div className="font-light bg-white p-3 rounded-[50%]">
              {fourthCard ? <FaMinus size={10} /> : <FaPlus size={10} />}
            </div>
          </div>
          <div
            className={
              fourthCard
                ? "text-[#737373] text-sm flex flex-col gap-2 font-medium"
                : "hidden"
            }
          >
            <p>
              Delivery times for crypto transactions can vary based on the
              payment method used to purchase. You can receive your crypto in as
              little as 5 minutes when paying by credit/debit card. If you pay
              with bank transfer, receiving your crypto can take between 1-3
              business days.
            </p>

            <p>
              *Note: For first time customers, additional security checks could
              take up to a few hours, even when buying cryptocurrency by card.
            </p>
          </div>
        </div>

        {/* fifth card */}
        <div className="bg-[#f9f8f5] hover:bg-[#e6e5e3] px-3 py-5 rounded-4xl col-span-1 flex flex-col gap-3 h-max">
          <div
            className="font-semibold text-xs flex justify-between items-center"
            onClick={handlefifthCard}
          >
            What is cryptocurrency used for?
            <div className="font-light bg-white p-3 rounded-[50%]">
              {fifthCard ? <FaMinus size={10} /> : <FaPlus size={10} />}
            </div>
          </div>
          <div
            className={
              fifthCard ? "text-[#737373] text-sm font-medium" : "hidden"
            }
          >
            <p>
              {" "}
              You can buy crypto and use it to pay for goods and services, send
              money internationally, buy NFTs, play blockchain-based games, or
              simply store your digital assets in a cryptocurrency wallet.
            </p>
            <p>
              Since cryptocurrencies are digital currencies that run on
              decentralized networks and can be programmed into numerous app,
              the potential use cases are limitless.
            </p>
          </div>
        </div>

        {/* sixth card */}
        <div className="bg-[#f9f8f5] hover:bg-[#e6e5e3] px-3 py-5 rounded-4xl col-span-1 flex flex-col gap-3 h-max">
          <div
            className="font-semibold text-xs flex justify-between items-center"
            onClick={handlesixthCard}
          >
            What are the fees to buy crypto with MoonPay?
            <div className="font-light bg-white p-3 rounded-[50%]">
              {sixthCard ? <FaMinus size={10} /> : <FaPlus size={10} />}
            </div>
          </div>
          <div
            className={
              sixthCard ? "text-[#737373] text-sm font-medium" : "hidden"
            }
          >
            MoonPay fees vary by payment method, ranging from 1% for bank
            transfers to 4.5% for select credit card purchases. If you want to
            buy crypto without these processing fees, just pay with your MoonPay
            Balance. Top up your balance with fiat currencies like USD, EUR and
            GBP to start buying cryptocurrency like Bitcoin without the added
            cost. Plus, enjoy zero-fee withdrawals when you cash out with
            certain payment methods.
          </div>
        </div>

        {/* seventh card */}
        <div className="bg-[#f9f8f5] hover:bg-[#e6e5e3] px-3 py-5 rounded-4xl col-span-1 flex flex-col gap-3 h-max">
          <div
            className="font-semibold text-xs flex justify-between items-center"
            onClick={handleseventhCard}
          >
            Is it safe to buy cryptocurrency using MoonPay?
            <div className="font-light bg-white p-3 rounded-[50%]">
              {seventhCard ? <FaMinus size={10} /> : <FaPlus size={10} />}
            </div>
          </div>
          <div
            className={
              seventhCard ? "text-[#737373] text-sm font-medium" : "hidden"
            }
          >
            MoonPay is used by more than 35 million users worldwide, since our
            founding in 2019. We are constantly improving our fiat-to-crypto
            on-ramp and cryptocurrency exchange features to better serve our
            global customers. MoonPay’s compliance and security measures aim to
            protect and safeguard our customers.
          </div>
        </div>

        {/* eighth card */}
        <div className="bg-[#f9f8f5] hover:bg-[#e6e5e3] px-3 py-5 rounded-4xl col-span-1 flex flex-col gap-3 h-max">
          <div
            className="font-semibold text-xs flex justify-between items-center"
            onClick={handleeighthCard}
          >
            Can you implement dollar-cost averaging with crypto?
            <div className="font-light bg-white p-3 rounded-[50%]">
              {eighthCard ? <FaMinus size={10} /> : <FaPlus size={10} />}
            </div>
          </div>
          <div
            className={
              eighthCard ? "text-[#737373] text-sm font-medium" : "hidden"
            }
          >
            No one can decide the perfect time to buy cryptocurrency. You can
            buy crypto through one-time purchases, or through a recurring buy
            order. MoonPay's recurring crypto purchases allow you to gain
            cryptocurrency price exposure over time at weekly or monthly
            intervals, helping to limit the risk of volatility through
            dollar-cost averaging principles.
          </div>
        </div>
      </section>
   {/* fifteenth section */}
      <section className="bg-black  rounded-t-4xl py-20">
        <div className="box flex flex-col gap-10">
          <h4 className="text-white text-4xl">
            Need some help before buying cryptocurrencies?
          </h4>
          <div className="flex flex-col lg:flex-row items-center gap-4">
            <div className="bg-[#1a1a1a] rounded-lg p-5">
              <img
                src="https://payload-marketing.moonpay.com/api/media/file/learn%20section%20asset-1.png"
                alt=""
              />
              <div className="text-white">
                <h4 className="capitalize text-xl">
                  Starting in Crypto: NFTs and Web3 Trends.
                </h4>
                <div className="flex gap-1">
                  <div className="text-[#737373] text-xs">
                    Learn all about crypto swaps and NFTs, and discover what’s
                    trending in the budding world of Web3.
                  </div>
                  <Link to="" className="bg-[#222] p-2 text-center rounded-lg">
                    {" "}
                    <MdArrowOutward size={30} />
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-[#1a1a1a] rounded-lg p-7">
              <img
                src="https://payload-marketing.moonpay.com/api/media/file/help%20asset.png"
                alt=""
              />

              <div className="text-white">
                <h4 className="capitalize text-xl">Help Center</h4>
                <div className="flex gap-1">
                  <div className="text-[#737373] text-xs">
                    Find all the answers to your MoonPay questions and start
                    swapping cryptocurrency with confidence.
                  </div>
                  <Link to="" className="bg-[#222] p-2 text-center rounded-lg">
                    {" "}
                    <MdArrowOutward size={30} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default BuycryptoPage;

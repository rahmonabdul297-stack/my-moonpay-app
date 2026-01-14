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
import { MdArrowOutward } from "react-icons/md";
import { availableCoin } from "../components/arrays/arrays";
import SwapPagefirstSection from "../components/swappagesections/swapPagefirstsection";

const SwapcryptoPage = () => {
  const [seemore, setseemore] = useState(false);
  const [getApp, setgetApp] = useState(false);
  const [firstCard, setfirstCard] = useState(false);
  const [secondCard, setsecondCard] = useState(false);
  const [thirdCard, setthirdCard] = useState(false);
  const [fourthCard, setfourthCard] = useState(false);
  const [fifthCard, setfifthCard] = useState(false);
  const [sixthCard, setsixthCard] = useState(false);
  const [seventhCard, setseventhCard] = useState(false);
  const [eighthCard, seteighthCard] = useState(false);
  const [ninthCard, setninthCard] = useState(false);

  return (
    <div>
      {/* first section */}
      <SwapPagefirstSection />
      {/* second section */}
      <section className="border-t border-b py-10 flex flex-col items-center gap-3">
        <div className="font-bold capitalize">payment methods</div>
        <div className="box lg:w-full flex justify-between gap-18">
          <img
            src="https://payload-marketing.moonpay.com/api/media/file/google-pay.png"
            alt=""
          />

          <img
            src="https://payload-marketing.moonpay.com/api/media/file/mastercard.png"
            alt=""
          />

          <img
            src="https://payload-marketing.moonpay.com/api/media/file/paypal-2.png"
            alt=""
          />

          <img
            src="https://payload-marketing.moonpay.com/api/media/file/visa.png"
            alt=""
          />

          <img
            src="https://payload-marketing.moonpay.com/api/media/file/apple-pay.png"
            alt=""
          />
        </div>
      </section>
      {/* third section */}
      <section className="box py-10  mt-10">
        <div>
          <h4 className="text-4xl">How to swap cryptocurrencies on MoonPay</h4>
          <div className="text-[#737576] font-normal">
            Here's how to swap cryptocurrency cross-chain with low fees.
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mt-10">
          <div className="bg-[#f9f8f5] p-5 rounded-lg  w-[300px] flex flex-col items-start gap-3 justify-center">
            <img
              src=" https://payload-marketing.moonpay.com/api/media/file/connect-wallet-1.svg"
              alt=""
            />
            <h4>1.Connect your wallet</h4>
            <p className="text-sm">
              Before you swap crypto, connect your wallet. MoonPay is compatible
              with WalletConnect and popular crypto wallets including Ledger,
              Trust Wallet, MetaMask, Rainbow, Uniswap, and Exodus.
            </p>
          </div>

          <div className="bg-[#f9f8f5] p-5 rounded-lg w-[300px] flex flex-col items-start justify-center gap-3">
            <img
              src=" https://payload-marketing.moonpay.com/api/media/file/choose-crypto-1.svg
           "
              alt=""
            />
            <h4>2. Choose a currency pair</h4>
            <p className="text-sm">
              Choose the cryptocurrency you’d like to swap, from a wide variety
              of combinations. Then, enter the destination wallet address.
            </p>
          </div>

          <div className="bg-[#f9f8f5] p-5 rounded-lg  w-[300px] flex flex-col items-start justify-center gap-3">
            <img
              src="https://payload-marketing.moonpay.com/api/media/file/review-and-confirm.svg
           "
              alt=""
            />
            <h4>3. Review and confirm</h4>
            <p className="text-sm">
              Review the amount, destination, exchange rate, and any fees. Then
              go ahead and press swap.
            </p>
          </div>

          <div className="bg-[#f9f8f5] p-5 rounded-lg  w-[300px] flex flex-col items-start justify-center gap-3">
            <img
              src="https://payload-marketing.moonpay.com/api/media/file/sign-and-send-2.svg
            "
              alt=""
            />
            <h4>4.Sign and send</h4>
            <p className="text-sm">
              In your wallet app, sign the transaction to send crypto to the
              MoonPay wallet address.
            </p>
          </div>

          <div className="bg-[#f9f8f5] p-5 rounded-lg  w-[300px] flex flex-col items-start justify-center gap-3">
            <img
              src="https://payload-marketing.moonpay.com/api/media/file/wait-for-crypto-swap.svg
            "
              alt=""
            />
            <h4>5. Wait for your crypto swap to complete</h4>
            <p className="text-sm">
              Crypto exchanges usually take between a few minutes and a few
              hours. We’ll email you as soon as it’s done and the coins are in
              your wallet.
            </p>
          </div>
        </div>
      </section>
      {/* fourth section */}
      <section className="py-20">
        <h4 className="box mb-10 text-2xl capitalize">
          {" "}
          Choose from dozens of swap pairs across major chains
        </h4>
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
          onClick={() => setseemore((prev) => !prev)}
        >
          {seemore ? "show less asset" : "show all asset"}
          {seemore ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
        </div>
      </section>
      {/* fifth section */}
      <section className="py-20">
        <img
          src="https://payload-marketing.moonpay.com/api/media/file/Swap.png"
          alt=""
          className="rounded-4xl"
        />
      </section>
      {/* sixth section */}
      <section className="box">
        <h4 className="text-4xl">
          Fast, low-cost crypto exchange at your fingertips
        </h4>
      </section>
      {/* seventh section */}
      <section className="box py-10 flex flex-col lg:grid grid-rows-2 grid-cols-2 gap-2">
        <div className="bg-[#f9f8f5] row-span-1 col-span-2 flex flex-col lg:flex-row items-center justify-between gap-5 p-4 lg:p-20 rounded-md">
          <img
            src="https://payload-marketing.moonpay.com/api/media/file/help%2024-7.png"
            alt=""
          />
          <div>
            <h4 className="font-bold capitalize">
              Help that’s there when you need it
            </h4>
            <div className="text-[#cdbdaf]">
              We’re here to help 24 hours a day, 7 days a week. We also have a
              vast library of educational articles that demystify crypto
              exchanges, Bitcoin, blockchain, and more.
            </div>
          </div>
        </div>
        <div className="bg-[#f9f8f5] row-span-1 col-span-1 flex flex-col items-center gap-5 p-4 rounded-md">
          <img
            src="https://payload-marketing.moonpay.com/api/media/file/dec1755587f1f9b87b826a99d51908d0.png"
            alt=""
          />

          <div>
            <h4 className="font-bold capitalize">Multi-wallet support</h4>
            <div className="text-[#cdbdaf]">
              Exchange crypto from an Ethereum wallet like MetaMask to a Bitcoin
              wallet like Bitcoin.com. Or swap the same asset cross-chain like
              USDC (ERC-20) to USDC (Polygon). It’s all there, in one platform.
            </div>
          </div>
        </div>
        <div className="bg-[#f9f8f5] row-span-1 col-span-1 flex flex-col items-center gap-5 p-4 rounded-md">
          <img
            src="https://payload-marketing.moonpay.com/api/media/file/3.%20Config.png"
            alt=""
          />

          <div>
            <h4 className="font-bold capitalize"> No processing fees</h4>
            <div className="text-[#cdbdaf]">
              We work closely with liquidity partners and trading platforms to
              swap crypto at competitive market rates with no processing fees
              (network fees apply).
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
            src="https://payload-marketing.moonpay.com/api/media/file/1.%20Discovery.png"
            alt=""
          />

          <div>
            <h4>Custom-built protection, dedicated team</h4>
            <div className="text-[#cdbdaf]">
              Our tools and processes were developed with security at their
              core. And our specialist security team is working constantly to
              make sure you’re protected from emerging threats, whenever you
              exchange crypto.
            </div>
          </div>
        </div>
        <div className="col-span-2 row-span-1 bg-[#f9f8f5] py-10 rounded-lg  p-5 flex flex-col items-start justify-center gap-3">
          <img
            src="https://payload-marketing.moonpay.com/api/media/file/4.%20P%26L.png"
            alt=""
          />
          <div>
            <h4>It’s your crypto, not ours</h4>
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
          onClick={() => setgetApp((prev) => !prev)}
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
        onClick={() => setgetApp((prev) => !prev)}
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
          Frequently asked questions about swapping crypto
        </h5>
        {/* first card */}
        <div className="bg-[#f9f8f5] hover:bg-[#e6e5e3] px-3 py-5 rounded-4xl col-span-1 flex flex-col gap-3 h-max">
          <div
            className="font-semibold text-xs flex justify-between items-center"
            onClick={() => setfirstCard((prev) => !prev)}
          >
            Can I swap Bitcoin on MoonPay?
            <div className="font-light bg-white p-3 rounded-[50%]">
              {firstCard ? <FaMinus size={10} /> : <FaPlus size={10} />}
            </div>
          </div>
          <div
            className={
              firstCard ? "text-[#737373] text-sm font-medium" : "hidden"
            }
          >
            You can swap Bitcoin for other cryptocurrencies on the MoonPay app,
            as long as you have BTC stored in your MoonPay Bitcoin wallet to
            exchange BTC for new tokens. We’re working actively to make Bitcoin
            swaps available within the MoonPay widget for mobile and desktop
            users as well.
          </div>
        </div>

        {/* second card */}
        <div className="bg-[#f9f8f5] hover:bg-[#e6e5e3] px-3 py-5 rounded-4xl col-span-1 flex flex-col h-max gap-3">
          <div
            className="font-semibold text-xs flex justify-between items-center"
            onClick={() => setsecondCard((prev) => !prev)}
          >
            What are the limits for crypto exchanges?
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
            {" "}
            The minimum amount of crypto to swap is $65 USD. The maximum amount
            allowed for a single crypto exchange transaction is $100,000 USD.
          </div>
        </div>

        {/* third card */}
        <div className="bg-[#f9f8f5] hover:bg-[#e6e5e3] px-3 py-5 rounded-4xl col-span-1 flex flex-col gap-3 h-max ">
          <div
            className="font-semibold text-xs flex justify-between items-center"
            onClick={() => setthirdCard((prev) => !prev)}
          >
            Why am I not seeing the cryptocurrency I want to swap?
            <div className="font-light bg-white p-3 rounded-[50%]">
              {thirdCard ? <FaMinus size={10} /> : <FaPlus size={10} />}
            </div>
          </div>
          <div
            className={
              thirdCard ? "text-[#737373] text-sm font-medium" : "hidden"
            }
          >
            To see all available crypto trading pairs, you’ll need to connect
            your cryptocurrency wallet first. It’s best to use a MoonPay wallet
            inside the MoonPay app to unlock all crypto token options, as well
            as for a smoother swapping experience.
          </div>
        </div>

        {/* fourth card */}
        <div className="bg-[#f9f8f5] hover:bg-[#e6e5e3] px-3 py-5 rounded-4xl col-span-1 flex flex-col gap-3 h-max">
          <div
            className="font-semibold text-xs flex justify-between items-center"
            onClick={() => setfourthCard((prev) => !prev)}
          >
            What are the fees for cryptocurrency exchanges?
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
            MoonPay does not charge a processing fee to convert crypto. Users
            are only responsible for paying network fees.
          </div>
        </div>

        {/* fifth card */}
        <div className="bg-[#f9f8f5] hover:bg-[#e6e5e3] px-3 py-5 rounded-4xl col-span-1 flex flex-col gap-3 h-max">
          <div
            className="font-semibold text-xs flex justify-between items-center"
            onClick={() => setfifthCard((prev) => !prev)}
          >
            Why do I need to send my crypto to an external wallet address?
            <div className="font-light bg-white p-3 rounded-[50%]">
              {fifthCard ? <FaMinus size={10} /> : <FaPlus size={10} />}
            </div>
          </div>
          <div
            className={
              fifthCard ? "text-[#737373] text-sm font-medium" : "hidden"
            }
          >
            MoonPay handles the entire crypto conversion process for you. With
            non-custodial swaps, users must first send cryptocurrency before
            receiving the new token. For safety reasons, MoonPay generates a new
            crypto address for each transaction. You can track the status of
            your swap order at any time in the MoonPay widget.
          </div>
        </div>

        {/* sixth card */}
        <div className="bg-[#f9f8f5] hover:bg-[#e6e5e3] px-3 py-5 rounded-4xl col-span-1 flex flex-col gap-3 h-max">
          <div
            className="font-semibold text-xs flex justify-between items-center"
            onClick={() => setsixthCard((prev) => !prev)}
          >
            Can I exchange crypto without KYC on MoonPay?
            <div className="font-light bg-white p-3 rounded-[50%]">
              {sixthCard ? <FaMinus size={10} /> : <FaPlus size={10} />}
            </div>
          </div>
          <div
            className={
              sixthCard ? "text-[#737373] text-sm font-medium" : "hidden"
            }
          >
            All users of the MoonPay platform are subject to KYC requirements.
          </div>
        </div>

        {/* seventh card */}
        <div className="bg-[#f9f8f5] hover:bg-[#e6e5e3] px-3 py-5 rounded-4xl col-span-1 flex flex-col gap-3 h-max">
          <div
            className="font-semibold text-xs flex justify-between items-center"
            onClick={() => setseventhCard((prev) => !prev)}
          >
            How long does it take to receive my cryptocurrency after initiating
            a swap?
            <div className="font-light bg-white p-3 rounded-[50%]">
              {seventhCard ? <FaMinus size={10} /> : <FaPlus size={10} />}
            </div>
          </div>
          <div
            className={
              seventhCard ? "text-[#737373] text-sm font-medium" : "hidden"
            }
          >
            Crypto exchanges usually take between a few minutes and a few hours,
            depending on factors including network congestion and token
            liquidity. If it is your first time using MoonPay, then verification
            will take additional time to complete.
          </div>
        </div>

        {/* eighth card */}
        <div className="bg-[#f9f8f5] hover:bg-[#e6e5e3] px-3 py-5 rounded-4xl col-span-1 flex flex-col gap-3 h-max">
          <div
            className="font-semibold text-xs flex justify-between items-center"
            onClick={() => seteighthCard((prev) => !prev)}
          >
            How can I contact MoonPay?
            <div className="font-light bg-white p-3 rounded-[50%]">
              {eighthCard ? <FaMinus size={10} /> : <FaPlus size={10} />}
            </div>
          </div>
          <div
            className={
              eighthCard ? "text-[#737373] text-sm font-medium" : "hidden"
            }
          >
            You can contact our support team 24/7, or visit our Swaps Help
            Center for more information about crypto exchanges. You can also
            start a chat with MoonPay customer support. Be sure to select
            “Transactions” as your issue, if you are looking for assistance with
            a crypto exchange.
          </div>
        </div>

        {/* ninth card */}
        <div className="bg-[#f9f8f5] hover:bg-[#e6e5e3] px-3 py-5 rounded-4xl col-span-1 flex flex-col gap-3 h-max">
          <div
            className="font-semibold text-xs flex justify-between items-center"
            onClick={() => setninthCard((prev) => !prev)}
          >
            Is MoonPay a safe platform to exchange crypto?
            <div className="font-light bg-white p-3 rounded-[50%]">
              {ninthCard ? <FaMinus size={10} /> : <FaPlus size={10} />}
            </div>
          </div>
          <div
            className={
              ninthCard ? "text-[#737373] text-sm font-medium" : "hidden"
            }
          >
            MoonPay is used by more than 15 million users worldwide, since our
            founding in 2019. We are constantly improving our fiat-to-crypto
            on-ramp and cryptocurrency exchange features to better serve our
            global customers. MoonPay’s compliance and security measures aim to
            protect and safeguard our customers.
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
export default SwapcryptoPage;

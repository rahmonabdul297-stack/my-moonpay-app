import { useState } from "react";
import { CgMenuGridR } from "react-icons/cg";
import {
  FaAngleDown,
  FaAngleLeft,
  FaAngleRight,
  FaAngleUp,
} from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { PiArrowCircleRightThin } from "react-icons/pi";
import { TbWorld } from "react-icons/tb";
import { Link } from "react-router-dom";

const BusinessHeader = () => {
  const [menuDrop, setmenuDrop] = useState(false);
  const [buyDrop, setbuyDrop] = useState(false);
  const [sellDrop, setsellDrop] = useState(false);
  const [swapDrop, setswapDrop] = useState(false);
  const [cryptopriceDrop, setcryptopriceDrop] = useState(false);
  const [learnDrop, setlearnDrop] = useState(false);
  const [productDrop, setproductDrop] = useState(false);

  const availableCoin = [
    {
      id: 1,
      coin: "bitcoin",
      abbr: "btc",
      color: "#f08e19",
      src: "https://payload-marketing.moonpay.com/api/media/file/txo8m9tx3q-1oOf3e7gtVRpu1pLJs50ai",
    },
    {
      id: 2,
      coin: "ethereum",
      abbr: "eth",
      color: "#6782eb",
      src: "https://payload-marketing.moonpay.com/api/media/file/kvphy7ylu2-tgQZ5oqFSl2IgB0bSu8WB",
    },
    {
      id: 3,
      coin: "polygon",
      abbr: "pol",
      color: "#9538d3",
      src: "https://payload-marketing.moonpay.com/api/media/file/beh6iv1rkr-5X9wcQXIo83PKmJGLo84CX",
    },
    {
      id: 4,
      coin: "solana",
      abbr: "sol",
      color: "black",
      src: "https://payload-marketing.moonpay.com/api/media/file/solanaLogoMark.svg",
    },
    {
      id: 5,
      coin: "dogecoin",
      abbr: "doge",
      color: "#BDA238",
      src: "https://payload-marketing.moonpay.com/api/media/file/9uqs57tih3-1K8okzpyzli8cZImE8L70y",
    },
    {
      id: 6,
      coin: "cardano",
      abbr: "ada",
      color: "#193cb8",
      src: "https://payload-marketing.moonpay.com/api/media/file/ul1weao7rn-7p0PTY893ZacomhXZ08FGD",
    },
  ];

  const handlemenuDrop = () => {
    if (menuDrop === false) {
      setmenuDrop(true);
    } else {
      setmenuDrop(false);
    }
  };
  const handlebuyDrop = () => {
    if (buyDrop === false) {
      setbuyDrop(true);
    } else {
      setbuyDrop(false);
    }
  };
  const handlesellDrop = () => {
    if (sellDrop === false) {
      setsellDrop(true);
    } else {
      setsellDrop(false);
    }
  };

  const handleswapDrop = () => {
    if (swapDrop === false) {
      setswapDrop(true);
    } else {
      setswapDrop(false);
    }
  };
  const handlecryptopriceDrop = () => {
    if (cryptopriceDrop === false) {
      setcryptopriceDrop(true);
    } else {
      setcryptopriceDrop(false);
    }
  };
  const handlelearnDrop = () => {
    if (learnDrop === false) {
      setlearnDrop(true);
    } else {
      setlearnDrop(false);
    }
  };
  const handleproductDrop = () => {
    if (productDrop === false) {
      setproductDrop(true);
    } else {
      setproductDrop(false);
    }
  };
  return (
    <div className=" w-screen pb-5 bg-[#F9F8FB] shadow-sm z-10 fixed">
      <div className="bg-[#d8c8ff] w-full  py-3 text-sm text-center">
        MoonPay has secured its New York Trust Charter →{" "}
        <Link
          to="https://www.prnewswire.com/news-releases/moonpay-secures-new-york-trust-charter-to-expand-regulated-financial-infrastructure-302625161.html"
          className="underline font-semibold"
        >
          Learn More
        </Link>
      </div>
      <div className="box hidden lg:flex items-center justify-between pt-2">
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
            products 
            {productDrop ? (
              <FaAngleUp onMouseOver={handleproductDrop} />
            ) : (
              <FaAngleDown onMouseOver={handleproductDrop} />
            )}
          </div>
          <div
            className={
              productDrop
                ? "px-20 py-10 w-screen bg-[#fcfcfc] fixed left-0 top-32 h-[80vh] flex"
                : "hidden"
            }
          >
            <div className="w-[30%] font-bold capitalize text-2xl">
              Products
            </div>
            <div className="w-[60%] flex flex-wrap gap-5">
              <div className="w-[300px] border-t py-5">
                <div className="flex justify-between capitalize hover:text-[#7d00ff] font-bold">
                  oncramps
                  <PiArrowCircleRightThin size={30} />
                </div>
                <div className="text-[#a6a6a6]">
                  Let your consumers buy crypto within your app or website using
                  local fiat payment methods.
                </div>
              </div>

              <div className="w-[300px] border-t py-5">
                <div className="flex justify-between capitalize hover:text-[#7d00ff]  font-bold">
                  offcramps
                  <PiArrowCircleRightThin size={30} />
                </div>
                <div className="text-[#a6a6a6]">
                  A lighting fast way to sell crypto, increase revenue, and
                  reduce customer attrition — all with just a few lines of code.
                </div>
              </div>

              <div className="w-[300px] border-t py-5">
                <div className="flex justify-between capitalize hover:text-[#7d00ff]  font-bold">
                  swaps
                  <PiArrowCircleRightThin size={30} />
                </div>
                <div className="text-[#a6a6a6]">
                  Allow your users to swap crypto cross-chain and with low fees.
                </div>
              </div>

              <div className="w-[300px] border-t py-5">
                <div className="flex justify-between capitalize hover:text-[#7d00ff]  font-bold">
                  virtual account
                  <PiArrowCircleRightThin size={30} />
                </div>
                <div className="text-[#a6a6a6]">
                  Issue virtual USD accounts. Settle to stablecoins. All via
                  API.
                </div>
              </div>

              <div className="w-[300px] border-t py-5">
                <div className="flex justify-between capitalize hover:text-[#7d00ff]  font-bold">
                  commerce
                  <PiArrowCircleRightThin size={30} />
                </div>
                <div className="text-[#a6a6a6]">
                  Accept crypto payments instantly with a simple, secure
                  checkout. Power deposits, subscriptions, and e-commerce with
                  stablecoin settlements — all through MoonPay.
                </div>
              </div>

              <div className="w-[300px] border-t py-5">
                <div className="flex justify-between capitalize hover:text-[#7d00ff]  font-bold">
                  otherlife
                  <PiArrowCircleRightThin size={30} />
                </div>
                <div className="text-[#a6a6a6]">
                  Award-Winning Web3 Agency supporting our partners with
                  Ideation, Strategy, Communications, Marketing and Front-End
                  Development.
                </div>
              </div>

              <div className="w-[300px] border-t py-5">
                <div className="flex justify-between capitalize hover:text-[#7d00ff]  font-bold">
                  iron
                  <PiArrowCircleRightThin size={30} />
                </div>
                <div className="text-[#a6a6a6]">
                  Stablecoin payment infrastructure offering APIs for global
                  on/off-ramping, wallets, and virtual accounts – built for
                  developers.
                </div>
              </div>
            </div>
          </div>
         <Link to="/buycrypto"  className="py-2 px-4 bg-black text-white rounded-2xl capitalize">
            get started
          </Link>
        </div>
      </div>
      {/* business mobile header */}
      <div className="box lg:hidden flex justify-between">
        <img src="/images/logo-coloured.png" alt="" className="h-7" />
        <div onClick={handlemenuDrop}>
          {menuDrop ? (
            <IoClose size={30} className="rotate" />
          ) : (
            <CgMenuGridR size={30} className="rotate" />
          )}
        </div>
      </div>

      <div
        className={
          menuDrop
            ? "lg:hidden z-50 h-screen w-full bg-[#F9F8FB] overflow-scroll"
            : "hidden"
        }
      >
        <div className=" box flex flex-col items-start  gap-8 capitalize">
          <div className="  px-3 flex justify-start gap-6 mt-4">
            <Link
              to="/"
              className="bg-[#e9e7ee] px-2 py-1 rounded text-black/75 border "
              onClick={handlemenuDrop}
            >
              Individuals
            </Link>
            <Link
              to="/business"
              className="bg-[#e9e7ee] px-2 py-1 rounded text-black/75 border "
              onClick={handlemenuDrop}
            >
              Business
            </Link>
          </div>
          <div className="mt-6 w-full flex flex-col gap-4">
            <div className=" flex justify-between" onClick={handlebuyDrop}>
              {buyDrop ? <FaAngleLeft /> : ""}
              <div>{buyDrop ? "back to main menu" : "buy"}</div>
              {buyDrop ? "" : <FaAngleRight />}
            </div>
            <div className={buyDrop ? "py-8" : "hidden"}>
              <div className="bg-[#f2f2f2] p-2 rounded-md">
                <h6>buy crypto</h6>
                <p className="text-xs">
                  use a card, Apple Pay or Google pay to buy crypto fast. We
                  also accept bank transfers and wires
                </p>
              </div>
              <div className="mt-5 flex flex-col items-start gap-4">
                {availableCoin.map((item, id) => {
                  return (
                    <div className="flex items-center gap-3" key={id}>
                      <img
                        src={item.src}
                        alt=""
                        style={{ backgroundColor: item.color }}
                        className="h-10 w-10 rounded-full p-1"
                      />
                      <div className="flex flex-col">
                        <h5>buy {item.coin}</h5>
                        <div className="text-[#b1b1b1] uppercase">
                          {item.abbr}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex justify-between" onClick={handlesellDrop}>
              {sellDrop ? <FaAngleLeft /> : ""}
              <div>{sellDrop ? "back to main menu" : "sell"}</div>
              {sellDrop ? "" : <FaAngleRight />}
            </div>
            <div className={sellDrop ? "py-8" : "hidden"}>
              <div className="bg-[#f2f2f2] p-2 rounded-md">
                <h6>sell crypto</h6>
                <p className="text-xs">
                  turn your crypto into cash. in a flash. get paid straight to
                  your bank account or visa card.
                </p>
              </div>
              <div className="mt-5 flex flex-col items-start gap-4">
                {availableCoin.map((item, id) => {
                  return (
                    <div className="flex items-center gap-3" key={id}>
                      <img
                        src={item.src}
                        alt=""
                        style={{ backgroundColor: item.color }}
                        className="h-10 w-10 rounded-full p-1"
                      />
                      <div className="flex flex-col">
                        <h5>sell {item.coin}</h5>
                        <div className="text-[#b1b1b1] uppercase">
                          {item.abbr}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex justify-between" onClick={handleswapDrop}>
              {swapDrop ? <FaAngleLeft /> : ""}
              <div>{swapDrop ? "back to main menu" : "swap"}</div>
              {swapDrop ? "" : <FaAngleRight />}
            </div>
            <div className={swapDrop ? "py-8" : "hidden"}>
              <div className="bg-[#f2f2f2] p-2 rounded-md">
                <h6>swap crypto</h6>
                <p className="text-xs">
                  swap between tokens, even if they're on different chains (we
                  make bridging seamless too)
                </p>
              </div>
              <div className="mt-5 flex flex-col items-start gap-4">
                {availableCoin.map((item, id) => {
                  return (
                    <div className="flex items-center gap-3" key={id}>
                      <img
                        src={item.src}
                        alt=""
                        style={{ backgroundColor: item.color }}
                        className="h-10 w-10 rounded-full p-1"
                      />
                      <div className="flex flex-col">
                        <h5>swap {item.coin}</h5>
                        <div className="text-[#b1b1b1] uppercase">
                          {item.abbr}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex justify-between">
              company <FaAngleRight />
            </div>
            <div
              className="flex justify-between"
              onClick={handlecryptopriceDrop}
            >
              {cryptopriceDrop ? <FaAngleLeft /> : ""}
              <div>
                {cryptopriceDrop ? "back to main menu" : "crypto prices"}
              </div>
              {cryptopriceDrop ? "" : <FaAngleRight />}
            </div>
            <div className={cryptopriceDrop ? "py-8" : "hidden"}>
              <div className="mt-5 flex flex-col items-start gap-4">
                {availableCoin.map((item, id) => {
                  return (
                    <div className="flex items-center gap-3" key={id}>
                      <img
                        src={item.src}
                        alt=""
                        style={{ backgroundColor: item.color }}
                        className="h-10 w-10 rounded-full p-1"
                      />
                      <div className="flex flex-col">
                        <h5>{item.coin} price</h5>
                        <div className="text-[#b1b1b1] uppercase">
                          {item.abbr}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex justify-between" onClick={handlelearnDrop}>
              {learnDrop ? <FaAngleLeft /> : ""}
              <div>{learnDrop ? "back to main menu" : "learn"}</div>
              {learnDrop ? "" : <FaAngleRight />}
            </div>
            <div className={learnDrop ? "py-8" : "hidden"}>
              <div className="mt-5 flex flex-col items-start gap-4">
                <Link to="">what is blockchain ?</Link>
                <Link to="">what are NFTs ?</Link>
                <Link to="">what is bitcoin mining ?</Link>
                <Link to="">what is DeFi ?</Link>
                <Link to="">what is crypto staking ?</Link>
              </div>
            </div>
            <div className="flex justify-between">
              support <FaAngleRight />
            </div>
            <div className="flex justify-between items-center gap-4 border-t border-gray-400 py-2">
              <div className="flex justify-between gap-3">
                <TbWorld size={30} />
                <div>language</div>
                <div className="font-semibold">english</div>
              </div>
              <div>
                <FaAngleDown />
              </div>
            </div>
            <div>
              <Link
                to="/buycrypto"
                className="text-center py-2 px-4 bg-black text-white rounded-2xl capitalize"
              >
                get started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BusinessHeader;

import { Link } from "react-router-dom";
import { CgMenuGridR } from "react-icons/cg";
import { TbWorld } from "react-icons/tb";
import { FaAngleDown, FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

const GeneralHeader = () => {
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
  const [menuDrop, setmenuDrop] = useState(false);
  const [buyDrop, setbuyDrop] = useState(false);
  const [sellDrop, setsellDrop] = useState(false);
  const [swapDrop, setswapDrop] = useState(false);
  
  const [cryptopriceDrop, setcryptopriceDrop] = useState(false);const [learnDrop, setlearnDrop] = useState(false);
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

  return (
    <div className="  w-screen py-5 bg-[#F9F8FB] shadow-sm z-10 fixed">
      {/* Desktop navbar */}
      <div className="box hidden lg:flex items-center justify-between">
        {/* Left side */}
        <div className="flex items-center gap-8">
          <img src="/images/logo-coloured.png" alt="" className="h-7" />

          <div className="flex gap-4 items-center">
            <Link to="/" className="">
              Individuals
            </Link>
            <Link to="/" className="">
              Business
            </Link>
          </div>

          <div className="ml-5 flex gap-4 items-center font-semibold">
            <Link to="">Buy</Link>
            <Link to="">Sell</Link>
            <Link to="">Swap</Link>
            <CgMenuGridR size={30} />
          </div>
        </div>

        <div className="flex items-center justify-between gap-3">
          <TbWorld size={30} />
          <button className="py-2 px-4 bg-black text-white rounded-2xl capitalize">
            get started
          </button>
        </div>
      </div>

      {/* mobile header */}
      <div className="box lg:hidden flex justify-between">
        <img src="/images/logo-coloured.png" alt="" className="h-7" />
        <div onClick={handlemenuDrop}>
          {menuDrop ? <IoClose size={30} /> : <CgMenuGridR size={30} />}
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
            <div className="bg-[#e9e7ee] px-2 py-1 rounded text-black/75 border ">
              Individuals
            </div>
            <div className="bg-[#e9e7ee] px-2 py-1 rounded text-black/75 border ">
              Business
            </div>
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
                  swap between tokens, even if they're on different chains (we make bridging seamless too)
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
            <div className="flex justify-between"onClick={handlecryptopriceDrop} >
            {cryptopriceDrop ? <FaAngleLeft /> : ""}
              <div>{cryptopriceDrop ? "back to main menu" : "crypto prices"}</div>
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
              <div className="text-center py-2 px-4 bg-black text-white rounded-2xl capitalize">
                get started
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralHeader;

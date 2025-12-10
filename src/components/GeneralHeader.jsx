import { Link } from "react-router-dom";
import { CgMenuGridR } from "react-icons/cg";
import { TbWorld } from "react-icons/tb";
import { FaAngleDown, FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

const GeneralHeader = () => {
  // desktop header menu
  const [buyOver, setbuyOver] = useState(false);
  const [sellOver, setsellOver] = useState(false);
  const [swapOver, setswapOver] = useState(false);
  const [Langsetttings, setLangsetttings] = useState(false);
  const handlebuyOver = () => {
    if (buyOver === false) {
      setbuyOver(true);
    } else {
      setbuyOver(false);
    }
  };
  const handlesellOver = () => {
    if (sellOver === false) {
      setsellOver(true);
    } else {
      setsellOver(false);
    }
  };
  const handleswapOver = () => {
    if (swapOver === false) {
      setswapOver(true);
    } else {
      setswapOver(false);
    }
  };
  //mobile header menu
  const [menuDrop, setmenuDrop] = useState(false);
  const [buyDrop, setbuyDrop] = useState(false);
  const [sellDrop, setsellDrop] = useState(false);
  const [swapDrop, setswapDrop] = useState(false);
  const [cryptopriceDrop, setcryptopriceDrop] = useState(false);
  const [learnDrop, setlearnDrop] = useState(false);

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

  return (
    <div className="  w-screen pb-5 bg-[#F9F8FB] shadow-sm z-10 fixed">
      {/* Desktop navbar */}
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

          <div className="ml-5 flex gap-4 items-center font-semibold ">
            <div className="hover:text-[#8d8c8e]" onClick={handlebuyOver}>
              Buy
            </div>
            <div className={buyOver ? "" : "hidden"}>
              <div className="fixed left-[300px] top-[85px] w-[200px] h-[250px] bg-[#f9f8fb] rounded-md capitalize p-4 flex flex-col gap-3">
                <h6>buy crypto</h6>
                <p className="text-xs text-[#8d8c8e]">
                  use a card, Apple Pay or Google pay to buy crypto fast. We
                  also accept bank transfers and wires
                </p>
              </div>
              <div className="fixed left-[510px] top-[85px] w-[400px] h-[250px] bg-[#f9f8fb] rounded-md flex flex-wrap">
                {availableCoin.map((item, id) => {
                  return (
                    <div
                      className="flex gap-3 items-center rounded-md capitalize p-4"
                      key={id}
                    >
                      <img
                        src={item.src}
                        alt=""
                        className="h-10 w-10 rounded-full p-1"
                        style={{ backgroundColor: item.color }}
                      />
                      <div>
                        <h3>{item.coin}</h3>
                        <span className="uppercase font-medium text-[#8d8c8e]">
                          {item.abbr}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="hover:text-[#8d8c8e]" onClick={handlesellOver}>
              Sell
            </div>
            <div className={sellOver ? "z-10" : "hidden"}>
              <div className="fixed left-[300px] top-[85px] w-[200px] h-[250px] bg-[#f9f8fb] rounded-md capitalize p-4 flex flex-col gap-3">
                <h6>sell crypto</h6>
                <p className="text-xs text-[#8d8c8e]">
                  turn your crypto into cash. in a flash. get paid straight to
                  your bank account or visa card.
                </p>
              </div>
              <div className="fixed left-[510px] top-[85px] w-[400px] h-[250px] bg-[#f9f8fb] rounded-md flex flex-wrap">
                {availableCoin.map((item, id) => {
                  return (
                    <div
                      className="flex gap-3 items-center rounded-md capitalize p-4"
                      key={id}
                    >
                      <img
                        src={item.src}
                        alt=""
                        className="h-10 w-10 rounded-full p-1"
                        style={{ backgroundColor: item.color }}
                      />
                      <div>
                        <h3>{item.coin}</h3>
                        <span className="uppercase font-medium text-[#8d8c8e]">
                          {item.abbr}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <Link to="/swap" className="hover:text-[#8d8c8e]" onClick={handleswapOver}>
              Swap
            </Link>

            <div className={swapOver ? "z-10" : "hidden"}>
              <div className="fixed left-[300px] top-[85px] w-[200px] h-[250px] bg-[#f9f8fb] rounded-md capitalize p-4 flex flex-col gap-3">
                <h6>Swap crypto</h6>
                <p className="text-xs text-[#8d8c8e]">
                  swap between tokens, even if they're on different chains (we
                  make bridging seamless too)
                </p>
              </div>
              <div className="fixed left-[510px] top-[85px] w-[400px] h-[250px] bg-[#f9f8fb] rounded-md flex flex-wrap">
                {availableCoin.map((item, id) => {
                  return (
                    <div
                      className="flex gap-3 items-center rounded-md capitalize p-4"
                      key={id}
                    >
                      <img
                        src={item.src}
                        alt=""
                        className="h-10 w-10 rounded-full p-1"
                        style={{ backgroundColor: item.color }}
                      />
                      <div>
                        <h3>{item.coin}</h3>
                        <span className="uppercase font-medium text-[#8d8c8e]">
                          {item.abbr}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <CgMenuGridR size={20} />
          </div>
        </div>

        <div className="flex items-center justify-between gap-3">
          <TbWorld
            size={20}
            onMouseOver={() => {
              if (Langsetttings === false) {
                setLangsetttings(true);
              } else {
                setLangsetttings(false);
              }
            }}
          />
          <div
            className={
              Langsetttings
                ? "fixed top-[90px] right-30 font-bold w-[200px] flex flex-col gap-6 p-5 rounded-md bg-white capitalize"
                : "hidden"
            }
          >
            <div>language</div>
            <div className="bg-[#d8d7d9] px-1 py-3 rounded-md flex items-center justify-between">
              english <FaAngleRight />
            </div>
          </div>
          <Link
            to="/buycrypto"
            className="py-2 px-4 bg-black text-white rounded-2xl capitalize"
          >
            get started
          </Link>
        </div>
      </div>

      {/* mobile header */}
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
              className="bg-[#F9F8FB] px-2 py-1 rounded text-black/75 border "
              onClick={handlemenuDrop}
            >
              Individuals
            </Link>
            <Link
              to="/business"
              className="bg-[#F9F8FB] px-2 py-1 rounded text-black/75 border "
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
                className="w-full overflow-hidden text-center py-2 px-4 bg-black text-white rounded-2xl capitalize"
                 onClick={handlemenuDrop}
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

export default GeneralHeader;

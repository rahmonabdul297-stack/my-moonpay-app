import { useState } from "react";
import { CiCircleInfo } from "react-icons/ci";
import {
  FaAngleDown,
  FaAngleLeft,
  FaAngleRight,
  FaCookieBite,
  FaMoon,
} from "react-icons/fa";
import { FaSliders } from "react-icons/fa6";
import {
    IoIosCheckmark,
  IoIosClose,
  IoIosInformationCircle,
  IoIosInformationCircleOutline,
  IoMdOpen,
  IoMdSettings,
} from "react-icons/io";
import { MdEmail, MdLightMode, MdOutlineSecurity } from "react-icons/md";
import { TfiSearch } from "react-icons/tfi";
import { TiVendorApple } from "react-icons/ti";
import { Link } from "react-router-dom";
import { Addresses, availableCoin, Cookies } from "../arrays/arrays";
import { RiCurrencyLine } from "react-icons/ri";
import { IoPhonePortraitSharp } from "react-icons/io5";
import { GoDotFill, GoPlus } from "react-icons/go";
import {
  errorNotification,
  infoNotification,
  successNotification,
} from "../../utils/helper";
import Apploader from "../AppLoader";
import { FiMinus } from "react-icons/fi";
import { HiBeaker, HiOutlineSwitchVertical } from "react-icons/hi";
import { BsCopy } from "react-icons/bs";
import { FcCancel } from "react-icons/fc";

const BuyPagefirstSection = () => {
  const [currencies, setcurrencies] = useState(false);
  const [asset, setasset] = useState(false);
  const [settings, setsettings] = useState(false);
  const [signin, setsignin] = useState(false);
  const [preferences, setpreferences] = useState(false);
  const [reopencurrencyDrop, setreopencurrencyDrop] = useState(false);
  const [themeDrop, setthemeDrop] = useState(false);
  const [theme, settheme] = useState(false);
  const [selected, setSelected] = useState("");
  const [searchCurrency, setsearchCurrency] = useState("");
  const [searchToken, setsearchToken] = useState("");
  const [submitEmail, setsubmitEmail] = useState(false);
  const [subscribe, setsubscribe] = useState();
  const [warning, setwarning] = useState("");
  const [signininputError, setsignininputError] = useState(false);
  const [cookiesDrop, setcookiesDrop] = useState(false);
  const [showFull, setshowFull] = useState();
  const [allowAllcookies, setallowAllcookies] = useState(false);
  const [helpDrop, sethelpDrop] = useState(false);
  const [DiagnosticsDrop, setDiagnosticsDrop] = useState(false);
  const [Amount,setAmount]=useState("0");
  const [cursor,setcursor]=useState(false)  

  const url = "https://jsonplaceholder.typicode.com/posts";

  const handlesubmitEmail = async () => {
    setsubmitEmail(true);
    if (subscribe && subscribe.toString().includes("@")) {
      setwarning("");
      setsignininputError(false);
      const payload = { subscribe };
      const response = await fetch(url, {
        method: "post",
        body: JSON.stringify(payload),
      });
      const responseData = await response.json();
      console.log(response.status);
      successNotification("success!");
      console.log("subscribe:", subscribe);
      console.log("responseData:", responseData);

      if (response.status.toString().includes("20")) {
        successNotification("success!");
      } else {
        errorNotification("something when wrong!");
      }
    } else {
      errorNotification("Invalid email address");
      setwarning("Invalid email address. Did you misspell it?");
      setsignininputError(true);
    }
    setsubmitEmail(false);
  };
  const handlesignininputError = () => {
    if (signininputError === false) {
      setsignininputError(true);
    } else {
      setsignininputError(false);
    }
  };
  const handlecurrenciesDropOpen = () => {
    if (currencies === false) {
      setcurrencies(true);
    }
  };
  const handlecurrenciesDropclose = () => {
    if (currencies === true) {
      setcurrencies(false);
    }
  };

  const handleassetDropOpen = () => {
    if (asset === false) {
      setasset(true);
    }
  };
  const handleassetDropclose = () => {
    if (asset === true) {
      setasset(false);
    }
  };

  const handlesettingsDropOpen = () => {
    if (settings === false) {
      setsettings(true);
    }
  };
  const handlesettingsDropclose = () => {
    if (settings === true) {
      setsettings(false);
    }
  };

  const handlesigninDropOpen = () => {
    setsettings(false);
    if (signin === false) {
      setsignin(true);
    }
  };
  const handlesigninDropclose = () => {
    setsettings(true);
    if (signin === true) {
      setsignin(false);
    }
  };

  const handlepreferencesDropOpen = () => {
    setsettings(false);
    if (preferences === false) {
      setpreferences(true);
    }
  };
  const handlepreferencesDropclose = () => {
    setsettings(true);
    if (preferences === true) {
      setpreferences(false);
    }
  };

  const handlereopencurrencyDropopen = () => {
    if (reopencurrencyDrop === false) {
      setreopencurrencyDrop(true);
    }
  };
  const handlereopencurrencyDropclose = () => {
    setpreferences(true);
    if (reopencurrencyDrop === true) {
      setreopencurrencyDrop(false);
    }
  };

  const handlerethemeDropopen = () => {
    setpreferences(false);
    if (themeDrop === false) {
      setthemeDrop(true);
    }
  };
  const handlethemeDropclose = () => {
    setpreferences(true);
    if (themeDrop === true) {
      setthemeDrop(false);
    }
  };
  const handlethemelightmode = () => {
    settheme(true);
  };
  const handlethemedarkmode = () => {
    settheme(false);
  };
  const handlecookiesDropOpen = () => {
    setpreferences(false);
    if (cookiesDrop === false) {
      setcookiesDrop(true);
    }
  };
  const handlecookiesDropClose = () => {
    setpreferences(true);
    if (cookiesDrop === true) {
      setcookiesDrop(false);
    }
  };
  const handleallowAllcookies = () => {
    if (allowAllcookies === false) {
      setallowAllcookies(true);
    } else {
      setallowAllcookies(false);
    }
  };

  const handlehelpDropopen = () => {
    setsettings(false);
    if (helpDrop === false) {
      sethelpDrop(true);
    }
  };
  const handlehelpDropclose = () => {
    setsettings(true);
    if (helpDrop === true) {
      sethelpDrop(false);
    }
  };

  const handleDiagnosticsDropopen = () => {
    sethelpDrop(false);
    if (DiagnosticsDrop === false) {
      setDiagnosticsDrop(true);
    }
  };
  const handleDiagnosticsDropclose = () => {
    sethelpDrop(true);
    if (DiagnosticsDrop === true) {
      setDiagnosticsDrop(false);
    }
  };
  const handlecursor=()=>{
    setcursor(true)
  }
 

  const searched = availableCoin.filter((itm) =>
    itm.name.toLowerCase().includes(searchToken.toLowerCase())
  );

  const CurrenciesArr = [
    {
      id: 1,
      name: "euro",
      abr: "eur",
     symbol: "€",
      flag: "https://www.nationsonline.org/flags/europe_flag.gif",
    },
    {
      id: 2,
      name: "pound sterling",
      abr: "gbp",
      symbol:"£",
      flag: "https://www.nationsonline.org/flags/united_kingdom_flag.gif",
    },
    {
      id: 3,
      name: "us dollar",
      abr: "usd",
      symbol:"$",
      flag: "https://www.nationsonline.org/flags/united_kingdom_flag.gif",
    },

    {
      id: 4,
      name: "ausralian dollar",
      abr: "aud",
      symbol:"A$",
      flag: "data:image/png;base64,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",
    },

    {
      id: 5,
      name: "bulgarian lev",
      abr: "bgn",
       symbol:"лв",
      flag: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAAA3CAMAAAC2At3zAAAAGFBMVEX////WJhIAlm56t58Ak2kAmHBse1ncHAX6eeRUAAAAOklEQVRYhe3MwQ2AIAAEsBMU9t+YtwNcTEw7QBMA+NQsyl2UUSSXy+XyV/4UZRVlF+Uqksvlcvk/8gO+kRnhw0ybhAAAAABJRU5ErkJggg==",
    },

    {
      id: 6,
      name: "brazilan real",
      abr: "brl",
      symbol:"R$",
      flag: "data:image/png;base64,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",
    },

    {
      id: 7,
      name: "canadian dollar",
      abr: "cad",
       symbol:"C$",
      flag: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAAAuCAMAAACS246gAAAAZlBMVEXVKx7////VKRvVKx///f3SAADTFQDUJRbUIRDUHwzUHAb88vHww8HZSULxyMfYQzvrqqjbVk/ljovuubj44uHifnvts7LjhYLdYl3poZ7mlZL22tnXOzPdZ2HWMijppaPz0M/fcGtTHk49AAABn0lEQVRYhe2XYW+DIBCGkfYAQVerQhVti///Tw7bUjdHTSqYbMn4YPTueHJ5OQ5EyDfwbp+8MfY77MX4xz/8LXiWbQjP8+3gHwAfm8EPlB42gAthHxkgBJn7ipg5FGPiCI2pFxBZliPkko8uLnM4RoaXKWV3H6NpGRlekclLqsjwGiYv1JHhydfM574QuDT2caTOScf1NDIULtRNABh1OKXOmZ5GlW7lWCuxPnMErGklw6RO1FMXopKaYCbbhgEKkEVzTLktQcrEtKJQC2Y1YpxirgPgnSPS/jxpfu7dO3QhC3pxszCdvPRpvARVi06Xwh6qrIWfFuFj3ayGK8KX47itnNWZD7AcB0OILFdYmIbhGrb9DaGvgigxob1F9C905/3zsAtoXGfiC3nIHdwVtWdZQYd2RTeyH7mTb1evsMOinO2l2SkaBreTbXskwBgQ2wytPx7cAMCl0VU3DF2lm4v9NNHgqjD3slO33Z4IU6h4srjRtl5zHLjWXnMceDm/a8WES+k1x4EPw4bwptkQfvD+WESCK+U1/4H/0N8E/wRSDxbzY7M8owAAAABJRU5ErkJggg==",
    },

    {
      id: 8,
      name: "swiss franc",
      abr: "chf",
       symbol:"Fr.",
      flag: "https://www.nationsonline.org/flags/switzerland_flag.gif",
    },

    {
      id: 9,
      name: "colombian peso",
      abr: "cop",
       symbol:"$",
      flag: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEUAAAAuCAMAAABJYCSCAAAAHlBMVEX/zQDIEC4AMIf+zgMALIgAL4cAMYqFImDMDinHES+a8velAAAANUlEQVRIie3MSQ0AIAAEseUG/4bRQDI/pgKaSJK+1QjphAxCKsHlm2USsgjZhBSCi8vTcggXffQSEN4SINgAAAAASUVORK5CYII=",
    },

    {
      id: 10,
      name: "czech koruna",
      abr: "czk",
       symbol:" Kč",
      flag: "https://www.worldatlas.com/r/w746/img/flag/cz-flag.jpg",
    },

    {
      id: 11,
      name: "nigerian naira",
      abr: "ngn",
      symbol:"₦",
      flag: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT4AAACfCAMAAABX0UX9AAAACVBMVEUAh1H///8AfDudGzJvAAABX0lEQVR4nO3QQQ0AIAzAwIF/0Yi4ZA/Sc9DObLlnzV2L2tM+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+0j7SPtI+8uW+B3AYRFPn9q1JAAAAAElFTkSuQmCC",
    },

    {
      id: 12,
      name: "dominican peso",
      abr: "dop",
       symbol:"RD$",
      flag: "data:image/png;base64,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",
    },

    {
      id: 13,
      name: "egyptian pound",
      abr: "egp",
       symbol:"E£",
      flag: "https://www.worldatlas.com/r/w746/img/flag/eg-flag.jpg",
    },
  ];
  const searchingCurrency = CurrenciesArr.filter((currency) =>
    currency.name.toLowerCase().includes(searchCurrency.toLowerCase())
  );

  const [currenciesAbr, setcurrenciesAbr] = useState();
  const [availableCoinAbr, setavailableCoinAbr] = useState();
  return (
    <div>
      <section className="box py-40 flex flex-col  lg:grid grid-cols-3 gap-5">
        <div className="col-span-2">
          <h4 className="text-4xl ">
            {" "}
            Want to buy crypto? With MoonPay, it’s never been simpler.
          </h4>
          <div className="text-[#928e89] text-xs">
            100+ cryptocurrencies. Plenty of ways to pay. Absolutely zero
            hassle. MoonPay makes it easy to buy, sell, and swap crypto. Open
            your free account today.
          </div>
          <div className="flex items-center gap-10 py-10">
            <div className="flex gap-2 border-r px-2">
              <img src="/images/download.png" alt="" className="h-4" />
              <div className="font-bold">4.4 ★ on App Store</div>
            </div>
            <div className="flex gap-2">
              <img src="/images/download (1).png" alt="" className="h-5" />
              <div className="font-bold">4.5 ★ on google Store</div>
            </div>
          </div>

          <div className=" flex  gap-3 items-center">
            <div className=" bg-[#e2e8f0] h-10 w-10 p-1 rounded-md">
              <img src="/public/images/trustpilot-star-2.svg" alt="" />
            </div>
            <div className="text-sm">
              <h2>TrustScore 4.0</h2>
              <span className="text-xs uppercase font-light text-[#928e89]">
                102k reviews
              </span>
            </div>
          </div>
        </div>

        <div className="col-span-1 py-20 h-[400px] flex flex-col">
          <div className="flex flex-col gap-10 relative">
            <div className="flex   gap-10">
            <div
              className="w-max bg-[#edebe8] hover:bg-[#d4d3d1] text-xs flex items-center px-2 py-1 rounded-full uppercase"
              onClick={handlecurrenciesDropOpen}
            >
              {currenciesAbr
                ? CurrenciesArr.filter((item) => item.id === currenciesAbr).map(
                    (item) => <div key={item.id}>{item.abr}</div>
                  )
                : CurrenciesArr.filter((item) => item.id === 11).map((item) => (
                    <div key={item.id}>{item.abr}</div>
                  ))}

              <FaAngleDown className="text-[#535252]" />
            </div>
            <div
              className="w-max bg-[#edebe8] hover:bg-[#d4d3d1] flex items-center px-2 py-1 rounded-full text-xs "
              onClick={handleassetDropOpen}
            >
              <div className="uppercase">
                {availableCoinAbr
                  ? availableCoin
                      .filter((coin) => coin.id === availableCoinAbr)
                      .map((coin) => (
                        <div key={coin.id} className="flex items-center gap-2">
                          <img
                            src={coin.image}
                            alt=""
                            className="h-5 w-5 rounded-[50%]"
                          />
                          {coin.symbol}
                        </div>
                      ))
                  : availableCoin
                      .filter((coin) => coin.id === 1)
                      .map((coin) => (
                        <div key={coin.id} className="flex items-center gap-2">
                          <img
                            src={coin.image}
                            alt=""
                            className="h-5 w-5 rounded-[50%]"
                          />
                          {coin.symbol}
                        </div>
                      ))}
              </div>
              <FaAngleDown className="text-[#535252]" />
            </div>

            <div
              className="bg-[#edebe8] hover:bg-[#d4d3d1] rounded-[50%] p-2 "
              onClick={handlesettingsDropOpen}
            >
              <IoMdSettings />
            </div>
            </div>

              <div className={settings?"hidden":"  flex flex-col gap-2 items-center  mx-auto "}> 
                
          <div className="flex justify-end ">
          <div>
              {currenciesAbr
                ? CurrenciesArr.filter((item) => item.id === currenciesAbr).map(
                    (item) => <div key={item.id} className="font-bold text-[#9794a2] text-3xl">{item.symbol}</div>
                  )
                : CurrenciesArr.filter((item) => item.id === 11).map((item) => (
                    <div key={item.id} className="font-bold text-[#9794a2] text-3xl">{item.symbol}</div>
                  ))}
          </div>
              <input type="number"placeholder="0"className="border-none focus:border-none focus:outline-none  text-6xl flex justify-center items-center AmountInput  overflow-x-hidden w-[50%]" onChange={()=>setAmount()}/>
          </div>
           <div className="uppercase font-bold text-[#9794a2] flex gap-1">
            <HiOutlineSwitchVertical />
            {Amount?Amount:0}
             {availableCoinAbr
                  ? availableCoin
                      .filter((coin) => coin.id === availableCoinAbr)
                      .map((coin) => (
                        <div key={coin.id} className="flex items-center gap-2">
                          {coin.symbol}
                        </div>
                      ))
                  : availableCoin
                      .filter((coin) => coin.id === 1)
                      .map((coin) => (
                        <div key={coin.id} className="flex items-center gap-2">
                          {coin.symbol}
                        </div>
                      ))}</div>
                      
          <div>       
            {availableCoinAbr
                  ? availableCoin
                      .filter((coin) => coin.id === availableCoinAbr)
                      .map((coin) => (
                         <div key={coin.id} className="flex justify-center gap-2 bg-[#7d00ff] text-[#ae60ff] py-1 px-3 rounded-4xl w-[300px]">
                            {"continue with"+" "+coin.name}
                        </div>
                      ))
                  : availableCoin
                      .filter((coin) => coin.id === 1)
                      .map((coin) => (
                        <div key={coin.id} className="flex justify-center gap-2 bg-[#7d00ff] text-[#ae60ff] py-1 px-3 rounded-4xl w-[300px]" onMouseOver={handlecursor}>
                            {"continue with"+" "+coin.name}
                        </div>
                      ))}
                       </div>
          </div>

          </div>

        
          {/* currencies */}
          <div className={currencies ? "absolute" : "hidden"}>
            <div className="w-[300px] bg-white ">
              <div className="flex justify-start items-center gap-14">
                <div
                  className="bg-[#f1f1f1] hover:bg-[#d7d6d6]  w-10 p-3 rounded-[50%]"
                  onClick={handlecurrenciesDropclose}
                >
                  <FaAngleDown />
                </div>
                <div>currency</div>
              </div>
              <div className=" bg-white flex items-center gap-2 px-3 border-[#E5E5E5] border-2 rounded-2xl">
                <TfiSearch />
                <input
                  type="text"
                  placeholder="search"
                  className="p-3 border-none focus:border-none focus:outline-none"
                  value={searchCurrency}
                  onChange={(e) => setsearchCurrency(e.target.value)}
                />
              </div>
            </div>
            <div className=" bg-white  w-[300px] h-[300px] ">
              <div className="py-3 p-2 overflow-y-scroll">
                <h3 className="capitalize">popular currencies</h3>
                <div className="flex flex-col gap-4">
                  {searchingCurrency?.slice(0, 3).map((child, id) => (
                    <div
                        
                      className="flex items-start gap-3"
                      key={id}
                      onClick={handlecurrenciesDropclose}
                    >
                      <img
                        src={child.flag}
                        alt=""
                        className="h-5 w-5 rounded-[50%]"
                      />
                      <div
                        className="flex flex-col"
                    onClick={() => setcurrenciesAbr(child.id)}
                      >
                        <div className="capitalize font-normal text-sm">
                          {child.name}
                        </div>
                        <div className="text-[#b3afaf] uppercase text-sm">
                          {child.abr}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <h3 className="capitalize">all currencies</h3>
                <div className="flex flex-col gap-4">
                  {searchingCurrency?.slice(3, 13).map((child, id) => (
                    <div
                      className="flex items-start gap-3"
                      key={id}
                      onClick={handlecurrenciesDropclose}
                    >
                      <img
                        src={child.flag}
                        alt=""
                        className="h-5 w-5 rounded-[50%]"
                      />
                      <div
                        className="flex flex-col"
                        onClick={() => setcurrenciesAbr(child.id)}
                      >
                        <div className="capitalize font-normal text-sm">
                          {child.name}
                        </div>
                        <div className="text-[#b3afaf] uppercase text-sm">
                          {child.abr}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* select asset */}
          <div className={asset ? "absolute " : "hidden"}>
            <div className="w-[300px] bg-white ">
              <div className="flex justify-start items-center gap-14">
                <div
                  className="bg-[#f1f1f1] hover:bg-[#d7d6d6]  w-10 p-3 rounded-[50%]"
                  onClick={handleassetDropclose}
                >
                  <FaAngleLeft />
                </div>
                <div>Select asset</div>
              </div>
              <div className=" bg-white flex items-center gap-2 px-3 border-[#E5E5E5] border-2 rounded-2xl">
                <TfiSearch />
                <input
                  type="text"
                  placeholder="search token ..."
                  className="p-3 border-none focus:border-none focus:outline-none"
                  value={searchToken}
                  onChange={(e) => setsearchToken(e.target.value)}
                />
              </div>
            </div>
            <div className=" bg-white  w-[300px] h-[300px] ">
              <div className="py-3 p-2 overflow-y-scroll">
                <h3 className="capitalize flex gap-2 items-center">
                  crypto classic <CiCircleInfo />
                </h3>
                <div className="flex flex-col gap-4">
                  {searched?.slice(0, 5).map((coin, id) => (
                    <div
                      className="flex items-start gap-3"
                      key={id}
                      onClick={handleassetDropclose}
                    >
                      <img
                        src={coin.image}
                        alt=""
                        className="h-5 w-5 rounded-[50%]"
                      />
                      <div
                        className="flex flex-col"
                        onClick={() => setavailableCoinAbr(coin.id)}
                      >
                        <div className="capitalize font-normal text-sm">
                          {coin.name}
                        </div>
                        <div className="text-[#b3afaf] uppercase text-[12px] flex items-center">
                          {coin.symbol}
                          <GoDotFill />
                          <div className="capitalize"> {coin.name}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <h3 className="capitalize">all tokens</h3>
                <div className="flex flex-col gap-4">
                  {searched
                    ? searched?.slice(5, 20).map((coin, id) => (
                        <div
                          className="flex items-start gap-3"
                          key={id}
                          onClick={handleassetDropclose}
                        >
                          <img
                            src={coin.image}
                            alt=""
                            className="h-5 w-5 rounded-[50%]"
                          />
                          <div
                            className="flex flex-col"
                            onClick={() => setavailableCoinAbr(coin.id)}
                          >
                            <div className="capitalize font-normal text-sm">
                              {coin.name}
                            </div>
                            <div className="text-[#b3afaf] uppercase text-[12px] flex items-center">
                              {coin.symbol}
                              <GoDotFill />
                              <div className="capitalize"> {coin.name}</div>
                            </div>
                          </div>
                        </div>
                      ))
                    : "No result!"}
                </div>
              </div>
            </div>
          </div>

          {/* setting and logins */}
          <div className={settings ? "absolute" : "hidden"}>
            <div className="w-[300px] bg-white ">
              <div className="flex justify-start items-center gap-14">
                <div
                  className="bg-[#f1f1f1] hover:bg-[#d7d6d6]  w-10 p-3 rounded-[50%]"
                  onClick={handlesettingsDropclose}
                >
                  <FaAngleLeft />
                </div>
                <div>Settings</div>
              </div>
            </div>

            <div className=" flex flex-col items-center text-center gap-4 mt-8 selection:bg-[#d4d3d1] selection:text-black">
              <img
                src="/public/images/moonpay-no-bg.png"
                alt=""
                className="h-10 w-10"
              />
              <div className="flex flex-col gap-4 w-[250px]">
                <div>
                  <div className="font-bold text-xl">Welcome to MoonPay</div>
                  <div className="text-[10px] text-[#979695]">
                    Sign in to unlock the full experience
                  </div>
                </div>
                <div
                  className="bg-[#7d00ff] text-white rounded-2xl w-full py-1 text-sm font-bold"
                  onClick={handlesigninDropOpen}
                >
                  sign in
                </div>

                <Link
                  to=""
                  className="flex items-center justify-between"
                  onClick={handlepreferencesDropOpen}
                >
                  <div className="flex items-center gap-3">
                    <FaSliders />
                    <div className="text-sm capitalize">Preferences</div>
                  </div>
                  <FaAngleRight />
                </Link>

                <Link to="" className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <IoIosInformationCircleOutline />
                    <div
                      className="text-sm capitalize"
                      onClick={handlehelpDropopen}
                    >
                      help
                    </div>
                  </div>
                  <FaAngleRight />
                </Link>

                <Link to="" className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <MdOutlineSecurity />
                    <div className="text-sm capitalize">
                      terms and disclosures
                    </div>
                  </div>
                  <FaAngleRight />
                </Link>
              </div>
            </div>
          </div>

          {/* sign in  */}
          <div className={signin ? "absolute w-[300px]" : "hidden"}>
            <div className="w-[300px] bg-white ">
              <div className="flex justify-start items-center gap-14">
                <div
                  className="bg-[#f1f1f1] hover:bg-[#d7d6d6]  w-10 p-3 rounded-[50%]"
                  onClick={handlesigninDropclose}
                >
                  <FaAngleLeft />
                </div>
                <div className="capitalize font-bold text-sm">
                  sign in with MoonPay
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <div
                className={
                  signininputError
                    ? " bg-white flex items-center gap-2 px-3 py-1 border-red-500 border rounded-2xl mt-4"
                    : " bg-white flex justify-between items-center  px-3 pt-1 border-[#E5E5E5] border rounded-2xl mt-4 "
                }
              >
                <MdEmail />
                <input
                  type="email"
                  placeholder="Email Address"
                  className={
                    signininputError
                      ? "signin_inputStyle2"
                      : "signin_inputStyle1"
                  }
                  onChange={(e) => setsubscribe(e.target.value)}
                />
                <div onClick={handlesignininputError}>
                  {signininputError ? (
                    <IoIosInformationCircle className="text-red-500" />
                  ) : (
                    <IoIosClose />
                  )}
                </div>
              </div>
              <div className="text-red-500 text-[10px]">{warning}</div>
              <div
                className="bg-[#7d00ff] text-white rounded-2xl w-full py-2 text-sm font-bold text-center"
                onClick={handlesubmitEmail}
              >
                {submitEmail ? <Apploader /> : "continue"}
              </div>

              <div className="flex items-center justify-center gap-2">
                <div className="border border-[#73737C] w-[25%]"></div>
                <div className="capitalize text-[#73737C] text-xs">
                  or sign in with
                </div>
                <div className="border border-[#73737C] w-[25%]"></div>
              </div>

              <div className="bg-[#f5f5f5] flex justify-center items-center gap-2 w-full py-2 text-sm font-bold text-center rounded-2xl">
                <TiVendorApple className="text-[#b3b3b3]" />
                Apple
              </div>

              <div className="text-[10px] text-[#73737C] text-center">
                This site is protected by{" "}
                <Link to="https://www.hcaptcha.com/" className="text-black">
                  hCaptcha
                </Link>{" "}
                and its{" "}
                <Link
                  to="https://www.hcaptcha.com/privacy"
                  className="text-black"
                >
                  Privacy Policy
                </Link>{" "}
                and
                <Link
                  to="https://www.hcaptcha.com/terms"
                  className="text-black"
                >
                  Terms of Service
                </Link>{" "}
                apply. By continuing, you agree to our{" "}
                <Link to="" className="text-black">
                  cookie policy
                </Link>{" "}
                . Powered by
              </div>
            </div>
          </div>
          {/* preferences */}
          <div className={preferences ? "absolute w-[300px]" : "hidden"}>
            <div className="w-[300px] bg-white ">
              <div className="flex justify-start items-center gap-14">
                <div
                  className="bg-[#f1f1f1] hover:bg-[#d7d6d6]  w-10 p-3 rounded-[50%]"
                  onClick={handlepreferencesDropclose}
                >
                  <FaAngleLeft />
                </div>
                <div className="capitalize font-bold text-sm">Preferences</div>
              </div>
            </div>

            <div className="flex flex-col  gap-4 mt-5">
              <Link
                to=""
                className="flex items-center justify-between"
                onClick={handlereopencurrencyDropopen}
              >
                <div className="flex items-center gap-3">
                  <RiCurrencyLine />
                  <div className="text-sm capitalize">currency</div>
                </div>
                <div className="text-[#b3b3b3] flex gap-2 uppercase font-light">
                  {currenciesAbr
                    ? CurrenciesArr.filter(
                        (item) => item.id === currenciesAbr
                      ).map((item) => <div key={item.id}>{item.abr}</div>)
                    : CurrenciesArr.filter((item) => item.id === 11).map(
                        (item) => <div key={item.id}>{item.abr}</div>
                      )}
                  <FaAngleRight />
                </div>
              </Link>

              <Link to="" className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <FaMoon />
                  <div
                    className="text-sm capitalize"
                    onClick={handlerethemeDropopen}
                  >
                    theme
                  </div>
                </div>
                <FaAngleRight className="text-[#b3b3b3]" />
              </Link>

              <Link to="" className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <FaCookieBite />
                  <div
                    className="text-sm capitalize"
                    onClick={handlecookiesDropOpen}
                  >
                    cookies
                  </div>
                </div>
                <IoMdOpen className="text-[#b3b3b3]" />
              </Link>
            </div>
          </div>
          {/* preferences currency */}
          <div className={reopencurrencyDrop ? "absolute" : "hidden"}>
            <div className="w-[300px] bg-white ">
              <div className="flex justify-start items-center gap-14">
                <div
                  className="bg-[#f1f1f1] hover:bg-[#d7d6d6]  w-10 p-3 rounded-[50%]"
                  onClick={handlereopencurrencyDropclose}
                >
                  <FaAngleLeft />
                </div>
                <div>currency</div>
              </div>
              <div className=" bg-white flex items-center gap-2 px-3 border-[#E5E5E5] border-2 rounded-2xl">
                <TfiSearch />
                <input
                  type="text"
                  placeholder="search"
                  className="p-3 border-none focus:border-none focus:outline-none"
                />
              </div>
            </div>
            <div className=" bg-white  w-[300px] h-[300px] ">
              <div className="py-3 p-2 overflow-y-scroll">
                <h3 className="capitalize">popular currencies</h3>
                <div className="flex flex-col gap-4">
                  {CurrenciesArr.slice(0, 3).map((child, id) => (
                    <div
                      className="flex items-start gap-3"
                      key={id}
                      onClick={handlereopencurrencyDropclose}
                    >
                      <img
                        src={child.flag}
                        alt=""
                        className="h-5 w-5 rounded-[50%]"
                      />
                      <div
                        className="flex flex-col"
                        onClick={() => setcurrenciesAbr(child.id)}
                      >
                        <div className="capitalize font-normal text-sm">
                          {child.name}
                        </div>
                        <div className="text-[#b3afaf] uppercase text-sm">
                          {child.abr}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <h3 className="capitalize">all currencies</h3>
                <div className="flex flex-col gap-4">
                  {CurrenciesArr.slice(3, 13).map((child, id) => (
                    <div
                      className="flex items-start gap-3"
                      key={id}
                      onClick={handlereopencurrencyDropclose}
                    >
                      <img
                        src={child.flag}
                        alt=""
                        className="h-5 w-5 rounded-[50%]"
                      />
                      <div
                        className="flex flex-col"
                        onClick={() => setcurrenciesAbr(child.id)}
                      >
                        <div className="capitalize font-normal text-sm">
                          {child.name}
                        </div>
                        <div className="text-[#b3afaf] uppercase text-sm">
                          {child.abr}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* preferences theme */}
          <div className={themeDrop ? "absolute w-[300px]" : "hidden"}>
            <div className="w-[300px] bg-white ">
              <div className="flex justify-start items-center gap-14">
                <div
                  className="bg-[#f1f1f1] hover:bg-[#d7d6d6]  w-10 p-3 rounded-[50%]"
                  onClick={handlethemeDropclose}
                >
                  <FaAngleLeft />
                </div>
                <div className="capitalize font-bold text-sm">theme</div>
              </div>
            </div>

            <div className="flex flex-col  gap-4 mt-5">
              <div className="flex justify-between">
                <div>
                  <IoPhonePortraitSharp />
                  <h4 className="text-light">Auto</h4>
                  <div className="text-[10px]">
                    use device's system preferences
                  </div>
                </div>

                <input
                  type="radio"
                  value="auto"
                  checked={selected === "auto"}
                  onChange={(e) => setSelected(e.target.value)}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <MdLightMode />
                  <div>
                    <div className="text-sm capitalize">light</div>
                    <div className="text-[10px]">always use light mode</div>
                  </div>
                </div>
                <input
                  type="radio"
                  value="light"
                  checked={selected === "light"}
                  onChange={(e) => setSelected(e.target.value)}
                  onClick={handlethemelightmode}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <FaMoon />
                  <div>
                    <div className="text-sm capitalize">dark</div>
                    <div className="text-[10px]">always use dark mode</div>
                  </div>
                </div>
                <input
                  type="radio"
                  value="dark"
                  checked={selected === "dark"}
                  onChange={(e) => setSelected(e.target.value)}
                  onClick={handlethemedarkmode}
                />
              </div>
            </div>
          </div>

          {/* preferences cookies */}
          <div className={cookiesDrop ? "absolute w-[300px]" : "hidden"}>
            <div className="w-[300px] bg-white py-2">
              <div className="flex justify-between items-center ">
                <img
                  src="/public/images/logo-coloured.png"
                  alt=""
                  className="w-[100px]"
                />
                <IoIosClose onClick={handlecookiesDropClose} />
              </div>
            </div>

            <div className=" flex flex-col  gap-4 mt-5 ">
              <div className="h-[200px]">
                <h4> Privacy Preference Center</h4>
                <div className="text-xs px-2">
                  <p>
                    {" "}
                    When you visit any website, it may store or retrieve
                    information on your browser, mostly in the form of cookies.
                    This information might be about you, your preferences or
                    your device and is mostly used to make the site work as you
                    expect it to and give you a more personalized web
                    experience. Because we respect your right to privacy, you
                    can choose not to allow some types of cookies. Click on the
                    different category headings to find out more and change our
                    default settings. However, blocking some types of cookies
                    may impact your experience of the site and the services we
                    are able to offer.
                  </p>
                  <Link to="" className="text-[#8510FF] text-[10px] underline">
                    See Privacy Notice for more information
                  </Link>
                  <div
                    className={
                      allowAllcookies
                        ? "hidden"
                        : "bg-[#8510FF] hover:bg-[#9638fc] text-white text-xs capitalize text-center  py-2 font-bold"
                    }
                    onClick={handleallowAllcookies}
                  >
                    allow all
                  </div>
                  <h3 className="capitalize py-3">
                    Manage Consent Preferences
                  </h3>
                  <div className="flex flex-col gap-2">
                    {Cookies.filter((itms) => itms.Id === 1).map((itms) => (
                      <div
                        className="border flex flex-col h-max gap-2"
                        key={itms.Id}
                        onClick={() => setshowFull(itms.Id)}
                      >
                        <div className="flex justify-between items-center  p-2">
                          {showFull === itms.Id ? <FiMinus /> : <GoPlus />}
                          <h4 className="capitalize font-bold ">
                            {itms.title}
                          </h4>

                          <div className="text-[#3860BE] font-bold text-[10px] capitalize">
                            Always active
                          </div>
                        </div>
                        <div
                          className={
                            showFull === itms.Id
                              ? "bg-[#e7e7e7] text-xs p-2"
                              : "hidden"
                          }
                        >
                          {itms.content}
                        </div>
                      </div>
                    ))}
                    {Cookies.slice(1, 4).map((itms) => (
                      <div
                        className="border flex flex-col h-max gap-2"
                        key={itms.Id}
                        onClick={() => setshowFull(itms.Id)}
                      >
                        <div className="flex justify-between items-center gap-4 p-2">
                          {showFull === itms.Id ? <FiMinus /> : <GoPlus />}
                          <h4 className="capitalize font-bold ">
                            {itms.title}
                          </h4>

                          <div className="text-[#3860BE] font-bold text-[10px]">
                            <input
                              type="checkbox"
                              onClick={
                                allowAllcookies
                                  ? (e) => setallowAllcookies(e.target.value)
                                  : null
                              }
                            />
                          </div>
                        </div>
                        <div
                          className={
                            showFull === itms.Id
                              ? "bg-[#e7e7e7] text-xs p-2"
                              : "hidden"
                          }
                        >
                          {itms.content}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="bg-[#8510FF] hover:bg-[#9638fc] text-white text-xs capitalize text-center  py-2 font-bold">
                  reject optional cookies
                </div>
                <div className="bg-[#8510FF] hover:bg-[#9638fc]  text-white text-xs capitalize text-center py-2 font-bold">
                  accept my cookies
                </div>
                <div className="bg-[#dad7dc] w-full py-2 flex justify-end">
                  {" "}
                  <img
                    src="https://cdn-ukwest.onetrust.com/logos/static/powered_by_logo.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          {/* preferences help */}
          <div className={helpDrop ? "absolute w-[300px]" : "hidden"}>
            <div className="w-[300px] bg-white ">
              <div className="flex justify-start items-center gap-14">
                <div
                  className="bg-[#f1f1f1] hover:bg-[#d7d6d6]  w-10 p-3 rounded-[50%]"
                  onClick={handlehelpDropclose}
                >
                  <FaAngleLeft />
                </div>
                <div className="capitalize font-bold text-sm">help</div>
              </div>
            </div>

            <div className="flex flex-col  gap-4 mt-5">
              <Link
                to="https://support.moonpay.com/en/"
                target="Blank"
                className="flex justify-between items-center "
              >
                <div className="flex items-center gap-2 ">
                  {" "}
                  <IoIosInformationCircleOutline />
                  <div className="font-normal capitalize">support center</div>
                </div>
                <IoMdOpen className="text-[#b3b3b3]" />
              </Link>

              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2 ">
                  {" "}
                  <HiBeaker />
                  <div
                    className="capitalize"
                    onClick={handleDiagnosticsDropopen}
                  >
                    Diagnostics
                  </div>
                </div>
                <FaAngleRight className="text-[#b3b3b3]" />
              </div>
            </div>
          </div>
          {/* help Diagnostics */}
          <div className={DiagnosticsDrop ? "absolute w-[300px]" : "hidden"}>
            <div className="w-[300px] bg-white ">
              <div className="flex justify-start items-center gap-14">
                <div
                  className="bg-[#f1f1f1] hover:bg-[#d7d6d6]  w-10 p-3 rounded-[50%]"
                  onClick={handleDiagnosticsDropclose}
                >
                  <FaAngleLeft />
                </div>
                <div className="capitalize font-bold text-sm">Diagnostics</div>
              </div>
            </div>

            <div className=" flex flex-col  gap-4 mt-5">
              {Addresses?.slice(0,3).map((DiagnosticsItem) => (
                <div className="flex justify-between" key={DiagnosticsItem.id}>
                  <div>
                    <div>{DiagnosticsItem.name}</div>
                      <div className="text-[#bcb9b9] text-xs ">{DiagnosticsItem.Address}</div>
                  </div>
                  <div onClick={()=>navigator.clipboard.writeText(DiagnosticsItem.Address)}>
                    <BsCopy />
                  </div>
                
                </div>
              ))}

              {Addresses?.slice(3).map((DiagnosticsItem) => (
                <div className="flex justify-between" key={DiagnosticsItem.id}>
                  <div>
                    <div className="flex items-center justify-between">{DiagnosticsItem.name}
                        <div  onClick={()=>navigator.clipboard.writeText(DiagnosticsItem.Address)}>
                          <BsCopy /> 
                        </div>
                       
                    </div>
                    <div className="text-[#bcb9b9] text-xs ">{DiagnosticsItem.Address}</div>
                  </div>
                  
                </div>
              ))}
            
            </div>
                  </div>
        </div>
      </section>
    </div>
  );
};
export default BuyPagefirstSection;

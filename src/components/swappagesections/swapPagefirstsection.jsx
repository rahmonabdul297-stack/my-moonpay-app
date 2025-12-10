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
import { Addresses, availableCoin, Cookies, CurrenciesArr } from "../arrays/arrays";
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

const SwapPagefirstSection = () => {
  const [convertInterface,setconvertInterface]=useState(false)
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
    setconvertInterface(true)
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
    setconvertInterface(true)
    if (signininputError === false) {
      setsignininputError(true);
    } else {
      setsignininputError(false);
    }
  };
  const handlecurrenciesDropOpen = () => {
    setconvertInterface(true)
    if (currencies === false) {
      setcurrencies(true);
    }
  };
  const handlecurrenciesDropclose = () => {
    setconvertInterface(false)
    if (currencies === true) {
      setcurrencies(false);
    }
  };

  const handleassetDropOpen = () => {
    setconvertInterface(true)
    if (asset === false) {
      setasset(true);
    }
  };
  const handleassetDropclose = () => {
    setconvertInterface(false)
    if (asset === true) {
      setasset(false);
    }
  };

  const handlesettingsDropOpen = () => {
    setconvertInterface(true)
    if (settings === false) {
      setsettings(true);
    }
  };
  const handlesettingsDropclose = () => {
    setconvertInterface(false)
    if (settings === true) {
      setsettings(false);
    }
  };

  const handlesigninDropOpen = () => {
    setconvertInterface(true)
    setsettings(false);
    if (signin === false) {
      setsignin(true);
    }
  };
  const handlesigninDropclose = () => {

    setconvertInterface(true)
    setsettings(true);
    if (signin === true) {
      setsignin(false);
    }
  };

  const handlepreferencesDropOpen = () => {
    setconvertInterface(true)
    setsettings(false);
    if (preferences === false) {
      setpreferences(true);
    }
  };
  const handlepreferencesDropclose = () => {
    setconvertInterface(true)
    setsettings(true);
    if (preferences === true) {
      setpreferences(false);
    }
  };

  const handlereopencurrencyDropopen = () => {
    setconvertInterface(true)
    if (reopencurrencyDrop === false) {
      setreopencurrencyDrop(true);
    }
  };
  const handlereopencurrencyDropclose = () => {
    setconvertInterface(true)
    setpreferences(true);
    if (reopencurrencyDrop === true) {
      setreopencurrencyDrop(false);
    }
  };

  const handlerethemeDropopen = () => {
    setconvertInterface(true)
    setpreferences(false);
    if (themeDrop === false) {
      setthemeDrop(true);
    }
  };
  const handlethemeDropclose = () => {
    setconvertInterface(true)
    setpreferences(true);
    if (themeDrop === true) {
      setthemeDrop(false);
    }
  };
  const handlethemelightmode = () => {
    setconvertInterface(true)
    settheme(true);
  };
  const handlethemedarkmode = () => {
    setconvertInterface(true)
    settheme(false);
  };
  const handlecookiesDropOpen = () => {
    setconvertInterface(true)
    setpreferences(false);
    if (cookiesDrop === false) {
      setcookiesDrop(true);
    }
  };
  const handlecookiesDropClose = () => {
    setconvertInterface(true)
    setpreferences(true);
    if (cookiesDrop === true) {
      setcookiesDrop(false);
    }
  };
  const handleallowAllcookies = () => {
    setconvertInterface(true)
    if (allowAllcookies === false) {
      setallowAllcookies(true);
    } else {
      setallowAllcookies(false);
    }
  };

  const handlehelpDropopen = () => {
    setconvertInterface(true)
    setsettings(false);
    if (helpDrop === false) {
      sethelpDrop(true);
    }
  };
  const handlehelpDropclose = () => {
    setconvertInterface(true)
    setsettings(true);
    if (helpDrop === true) {
      sethelpDrop(false);
    }
  };

  const handleDiagnosticsDropopen = () => {
    setconvertInterface(true)
    sethelpDrop(false);
    if (DiagnosticsDrop === false) {
      setDiagnosticsDrop(true);
    }
  };
  const handleDiagnosticsDropclose = () => {
    setconvertInterface(true)
    sethelpDrop(true);
    if (DiagnosticsDrop === true) {
      setDiagnosticsDrop(false);
    }
  };
  const handlecursor=()=>{
    setconvertInterface(true)
    setcursor(true)
  }
 

  const searched = availableCoin.filter((itm) =>
    itm.name.toLowerCase().includes(searchToken.toLowerCase())
  );

  
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
            Swap crypto seamlessly.
          </h4>
          <div className="text-[#928e89] text-xs">
           Swap cryptocurrencies quickly and securely, across multiple chains and wallets. It’s all there in your MoonPay account.


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
       <div className="flex items-center gap-5">
           <Link to="/buycrypto" className="text-white bg-black py-2 px-3 rounded-lg capitalize">get started</Link>
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
        </div>
      </section>
    </div>
  );
};
export default SwapPagefirstSection;
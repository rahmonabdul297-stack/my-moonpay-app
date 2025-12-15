import { useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";
import { Link } from "react-router-dom";
import {
  errorNotification,
  infoNotification,
  successNotification,
} from "../utils/helper";
import { CiWarning } from "react-icons/ci";
const GeneralFooter = () => {
  const [submitEmail, setsubmitEmail] = useState(false);
  const [subscribe, setsubscribe] = useState();
  const [check, setcheck] = useState(false);
  const [Emailwarning, setEmailwarning] = useState("");
  const [consentWarning, setconsentWarning] = useState("");
  const handleChecking = () => {
    if (check === false) {
      setcheck(true);
    } else {
      setcheck(false);
    }
  };
  const url = "https://jsonplaceholder.typicode.com/posts";

  const handlesubmitEmail = async () => {
    setsubmitEmail(true);
    if (subscribe && subscribe.toString().includes("@") && check === true) {
      setEmailwarning("");
      setconsentWarning("");
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
    } else if (subscribe && check === false) {
      setconsentWarning("Consent required");
    } else {
      infoNotification("check your email and try again!");
      setEmailwarning("Email required");
      setconsentWarning("Consent required");
    }
    setsubmitEmail(false);
  };

  return (
    <div className="bg-black py-16">
      <div className="box text-white flex flex-col flex-wrap  lg:flex-row justify-between  gap-8">
        <div className="">
          <img
            src="https://www.moonpay.com/assets/logo-full-white.svg"
            alt=""
            className="w-[30%] lg:w-[10%]"
          />
          <p className="lg:hidden text-[#625e56] text-xs py-4">
            All rights reserved. MoonPay USA LLC is a registered money service
            business (NMLS ID: 2071245). For Law Enforcement requests please
            direct your official document to our compliance team here
          </p>
        </div>

        <div className=" lg:hidden flex items-center gap-3 text-white capitalize">
          <TbWorld size={30} />
          <h4>english</h4>
        </div>

        <div className="lg:hidden flex items-center gap-2">
          <input
            type="text"
            placeholder="Email Address"
            className="bg-[#222] px-4 py-2 rounded-xl"
            onChange={(e) => setsubscribe(e.target.value)}
          />
          <div
            className="bg-[#222] px-4 py-2 rounded-xl w-max"
            onClick={submitEmail ? null : handlesubmitEmail}
          >
            {submitEmail ? "submitting..." : "subscribe"}
          </div>
        </div>
         <div className="text-red-500 px-10">{Emailwarning}</div>
        <div className="flex lg:hidden items-start gap-2">
          <input
            type="checkbox"
            className="bg-[#222] w-[100px]"
            onClick={handleChecking}
          />
          <p className="text-[#625e56]">
            Check this box to receive communications from MoonPay. You can
            unsubscribe at any time. We look after your data - see our privacy
            policy.
          </p>
        </div>
       <div className="text-red-600 px-10">{consentWarning}</div>
        <div className=" capitalize flex flex-col ">
          <h2>personal</h2>
          <div className="mt-4 flex flex-col  gap-3 text-[#625e56] text-sm">
            <Link to="/" className="hover:text-white">
              buy Crypto
            </Link>
            <Link to="/" className="hover:text-white">
              sell Crypto
            </Link>
            <Link to="/swap" className="hover:text-white">
              swap Crypto
            </Link>
            <Link to="/" className="hover:text-white">
              learn about Crypto
            </Link>
            <Link to="/" className="hover:text-white">
              Crypto price
            </Link>
          </div>
        </div>

        <div className=" capitalize flex flex-col">
          <h2>Business</h2>
          <div className="mt-4 flex flex-col gap-3 text-[#625e56] text-sm">
            <Link to="" className="hover:text-white">
              on ramps
            </Link>
            <Link to="" className="hover:text-white">
              off ramps
            </Link>
            <Link to="" className="hover:text-white flex  gap-3">
              virtual account{" "}
              <div className="bg-[#7d00ff] p-1 text-center rounded-lg w-[60px] text-white">
                new!
              </div>
            </Link>
            <Link to="" className="hover:text-white">
              learn about Crypto
            </Link>
            <Link to="" className="hover:text-white">
              Crypto price
            </Link>
          </div>
        </div>

        <div className=" capitalize flex flex-col">
          <h2>company</h2>
          <div className="mt-4 flex flex-col gap-3 text-[#625e56] text-sm">
            <Link to="" className="hover:text-white">
              about us
            </Link>
            <Link to="" className="hover:text-white flex gap-3">
              careers
              <div className="bg-[#7d00ff] p-1 text-center rounded-lg w-[150px] text-white">
                we're hiring
              </div>
            </Link>
            <Link to="" className="hover:text-white">
              newsrooms
            </Link>
            <Link to="" className="hover:text-white">
              learn about Crypto
            </Link>
            <Link to="" className="hover:text-white">
              Crypto price
            </Link>
          </div>
        </div>

        <div className=" capitalize flex flex-col">
          <h2>support</h2>
          <div className="mt-4 flex flex-col gap-3 text-[#625e56] text-sm">
            <Link to="" className="hover:text-white">
              API docs
            </Link>
            <Link to="" className="hover:text-white">
              Help Center
            </Link>
            <Link to="" className="hover:text-white">
              contact us
            </Link>
            <Link to="" className="hover:text-white">
              status
            </Link>
            <Link to="" className="hover:text-white">
              security
            </Link>
          </div>
        </div>

        <div className=" capitalize flex flex-col">
          <h2>buy</h2>
          <div className="mt-4 flex flex-col gap-3 text-[#625e56] text-sm">
            <Link to="" className="hover:text-white">
              buy Bitcoin
            </Link>
            <Link to="" className="hover:text-white">
              buy ethereum
            </Link>
            <Link to="" className="hover:text-white">
              buy solana
            </Link>
            <Link to="" className="hover:text-white">
              buy cardano
            </Link>
          </div>
        </div>

        <div className=" capitalize flex flex-col">
          <h2>sell</h2>
          <div className="mt-4 flex flex-col gap-3 text-[#625e56] text-sm">
            <Link to="" className="hover:text-white">
              sell Bitcoin
            </Link>
            <Link to="" className="hover:text-white">
              sell ethereum
            </Link>
            <Link to="" className="hover:text-white">
              sell XRP
            </Link>
            <Link to="" className="hover:text-white">
              sell solana
            </Link>
            <Link to="" className="hover:text-white">
              sell price
            </Link>
          </div>
        </div>

        <div className=" capitalize flex flex-col">
          <h2>swap</h2>
          <div className="mt-4 flex flex-col gap-3 text-[#625e56] text-sm">
            <Link to="" className="hover:text-white">
              swap ethereum
            </Link>
            <Link to="" className="hover:text-white">
              swap SOL
            </Link>
            <Link to="" className="hover:text-white">
              swap XRP
            </Link>
            <Link to="" className="hover:text-white">
              swap aave
            </Link>
            <Link to="" className="hover:text-white">
              swap chainlink
            </Link>
          </div>
        </div>

        <div className=" capitalize flex flex-col">
          <h2>crpto prices</h2>
          <div className="mt-4 flex flex-col gap-3 text-[#625e56] text-sm">
            <Link to="" className="hover:text-white">
              Bitcoin price
            </Link>
            <Link to="" className="hover:text-white">
              ethereum price
            </Link>
            <Link to="" className="hover:text-white">
              dogecoin price
            </Link>
            <Link to="" className="hover:text-white">
              XRP price
            </Link>
            <Link to="" className="hover:text-white">
              cardano price
            </Link>
          </div>
        </div>

        <div className=" capitalize flex flex-col">
          <h2>learn</h2>
          <div className="mt-4 flex flex-col gap-3 text-[#625e56] text-sm">
            <Link to="" className="hover:text-white">
              what is blockchain ?
            </Link>
            <Link to="" className="hover:text-white">
              what are NFTs ?
            </Link>
            <Link to="" className="hover:text-white">
              what is bitcoin mining ?
            </Link>
            <Link to="" className="hover:text-white">
              what is DeFi ?
            </Link>
            <Link to="" className="hover:text-white">
              what is crypto staking ?
            </Link>
          </div>
        </div>

        <div className=" capitalize flex flex-col">
          <h2>legal</h2>
          <div className="mt-4 flex flex-col gap-3 text-[#625e56] text-sm">
            <Link to="/policies" className="hover:text-white">
              licenses
            </Link>
            <Link to="/policies" className="hover:text-white">
              privacy policy
            </Link>
            <Link to="/policies" className="hover:text-white">
              cookie policy
            </Link>
            <Link to="/policies" className="hover:text-white">
              terms of use
            </Link>
          </div>
        </div>

        <div className="w-[80%]  text-2xl flex justify-between lg:justify-start lg:gap-8  text-[#625e56] ">
          <Link
            to="https://web.facebook.com/officialmoonpay/?_rdc=1&_rdr#"
            className="hover:text-white"
          >
            <FaFacebook />
          </Link>
          <Link to="" className="hover:text-white">
            <FaXTwitter />
          </Link>
          <Link to="" className="hover:text-white">
            <FaLinkedin />
          </Link>
          <Link to="" className="hover:text-white">
            <FaInstagram />
          </Link>
          <Link to="" className="hover:text-white">
            <FaYoutube />
          </Link>
        </div>
        <div className="hidden lg:w-[100%] lg:flex lg:justify-between items-center gap-2">
          <div className="flex flex-col justify-between gap-3 w-[50%]">
            <div className="flex justify-between gap-2">
              <input
                type="text"
                placeholder="Email Address"
                className="bg-[#222] px-4 py-2 rounded-xl w-full"
                onChange={(e) => setsubscribe(e.target.value)}
              />
              <div
                className="bg-[#222] flex items-center justify-center rounded-xl w-[200px]"
                onClick={handlesubmitEmail}
              >
                {submitEmail ? "submitting..." : "subscribe"}
              </div>
            </div>
            <div>
              <div className="text-red-600 px-10 flex ">{Emailwarning}</div>
              <div className="hidden lg:flex items-start gap-2">
                <input
                  type="checkbox"
                  className="bg-[#222]  w-[100px]"
                  onClick={handleChecking}
                />

                <p className="text-[#625e56]">
                  Check this box to receive communications from MoonPay. You can
                  unsubscribe at any time. We look after your data - see our
                  privacy policy.
                </p>
              </div>
              <div className="text-red-600 px-10">{consentWarning}</div>
            </div>
          </div>

          <div>
            <div className=" hidden lg:flex items-center gap-3 text-white capitalize">
              <TbWorld size={30} />
              <h4>english</h4>
            </div>
          </div>
        </div>

        <div className="flex justify-between gap-5">
          <Link to="">
            <img
              src="https://payload-marketing.moonpay.com/api/media/file/app-store-en.png"
              alt=""
            />
          </Link>
          <Link to="">
            <img
              src="  https://payload-marketing.moonpay.com/api/media/file/google-play-en.png"
              alt=""
            />
          </Link>
        </div>
      </div>
      <p className="hidden box lg:flex text-[#625e56] text-xs py-4">
        All rights reserved. MoonPay USA LLC is a registered money service
        business (NMLS ID: 2071245). For Law Enforcement requests please direct
        your official document to our compliance team here
      </p>
    </div>
  );
};

export default GeneralFooter;

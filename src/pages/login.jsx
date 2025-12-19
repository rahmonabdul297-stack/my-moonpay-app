import { Link } from "react-router-dom";
import { errorNotification, successNotification } from "../utils/helper";
import { useState } from "react";
import { FaMoon } from "react-icons/fa";
import { MdOutlineLightMode } from "react-icons/md";

const Login = () => {
  const [changeBG, setchangeBG] = useState(false);
  const [submitEmail, setsubmitEmail] = useState(false);
  const [Email, setEmail] = useState();
  const [password, setpassword] = useState();
  const url = "https://jsonplaceholder.typicode.com/posts";

  const handlesubmitEmail = async () => {
    setsubmitEmail(true);
    if (Email) {
      const payload = { Email, password };
      const response = await fetch(url, {
        method: "post",
        body: JSON.stringify(payload),
      });
      const responseData = await response.json();
      console.log(response.status);
      successNotification("success!");
      console.log("sign in data:", "Email:", Email, "password:", password);
      console.log("responseData:", responseData);

      if (response.status.toString().includes("20")) {
        successNotification("success!");
      } else {
        errorNotification("something when wrong!");
      }
    } else {
      errorNotification("error! Argument Validation Error");
    }
    setsubmitEmail(false);
  };
  const handlechangeBG = () => {
    if (changeBG === false) {
      setchangeBG(true);
    } else {
      setchangeBG(false);
    }
  };
  return (
    <div  className={
        changeBG
          ? "bg-white p-10 h-full overflow-auto"
          : "bg-black p-10 h-full overflow-auto"
      }>
      <section className="flex flex-col lg:flex-row items-center gap-14">
        <div className="signupWelcomCard hidden lg:flex flex-col">
          <div className="font-black text-5xl text-center overflow-y-hidden h-max py-4">
            Build the future with MoonPay
          </div>
          <div className="text-center">
            {" "}
            Create seamless no or low code experiences all from within our
            powerful platform.
          </div>
          <div className="text-center">
            Trusted by over <span className="font-bold">20,000,000</span> people
            worldwide.
          </div>

          <div className="mt-20">
            <div className="slideright">
              <div className="flex gap-6 ">
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

            <div className="slideleft">
              <div className="flex gap-6 ">
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
          </div>
        </div>

        <div className="flex flex-col items-end gap-10">
            <div
          className={
            changeBG
              ? "flex items-center hover:bg-[#eee] rounded-[50%] p-3 w-10 h-10 overflow-hidden"
              : "flex items-center hover:bg-[#444] rounded-[50%] p-3 w-10 h-10 overflow-hidden"
          }
          onClick={handlechangeBG}
        >
          {changeBG ? (
            <FaMoon color="#000" size={20} />
          ) : (
            <MdOutlineLightMode color="#fff" size={20} />
          )}
        </div>
        {/* signin cont */}
        <div className="text-white h-max w-[500px] p-5 flex flex-col gap-4 border border-[#aaa] rounded-2xl signUpCont">
          <div className="flex flex-col gap-2">
            <label className={changeBG ? "text-black" : "text-white"}>
              What is your email?
            </label>
            <input
              type="text"
              placeholder="janesmith@gmail.com"
              className={changeBG ? "text-black" : ""}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className={changeBG ? "text-black" : "text-white"}>
              What is your password?
            </label>
            <input
              type="password"
              placeholder="********"
              className={changeBG ? "text-black" : ""}
              onChange={(e) => setpassword(e.target.value)}
            />
          </div>

          <Link to="/buycrypto"
            className={
              submitEmail
                ? "bg-[#992af7]/50 text-center py-2 w-[90%] m-auto rounded-lg capitalize text-[#ddd]"
                : "bg-[#992af7] text-center py-2 w-[90%] m-auto rounded-lg capitalize hover:bg-[#a749f9]"
            }
            onClick={submitEmail ? null : handlesubmitEmail}
          >
            {submitEmail ? "verifying..." : "sign in"}
          </Link>
          <div
            className={
              changeBG
                ? "text-xs text-black text-center"
                : "text-xs text-white text-center"
            }
          >
            Need an account?
            <Link to="/signup" className="text-[#992af7]">
              {" "}
              Sign up{" "}
            </Link>
            or
            <Link to="" className="text-[#992af7]">
              {" "}
              forgot password
            </Link>
          </div>
        </div>
        </div>
      </section>
    </div>
  );
};
export default Login;

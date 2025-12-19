import { useState } from "react";
import { FaMoon } from "react-icons/fa";
import { MdOutlineLightMode } from "react-icons/md";
import { Link } from "react-router-dom";
import { errorNotification, successNotification } from "../utils/helper";
import { Jobs } from "../components/arrays/arrays";

const SignUpPage = () => {
  const [changeBG, setchangeBG] = useState(false);
  const [submitEmail, setsubmitEmail] = useState(false);
  const [check, setcheck] = useState(false);
  const [firstName, setfirstName] = useState();
  const [lastName, setlastName] = useState();
  const [Email, setEmail] = useState();
  const [password, setpassword] = useState();
  const [Job, setJob] = useState();
  const handleCheck = () => {
    setcheck(true);
  };

  const handlechangeBG = () => {
    if (changeBG === false) {
      setchangeBG(true);
    } else {
      setchangeBG(false);
    }
  };

  const url = "https://jsonplaceholder.typicode.com/posts";

  const handlesubmitEmail = async () => {
    setsubmitEmail(true);
    if (check === true) {
      const payload = { firstName, lastName, Email, password, Job };
      const response = await fetch(url, {
        method: "post",
        body: JSON.stringify(payload),
      });
      const responseData = await response.json();
      console.log(response.status);
      successNotification("success!");
      console.log("sign up data:", "firstName:",firstName, "lastName:",lastName, "Email:",Email, "password:",password, "occupation:",Job);
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
  return (
    <div
      className={
        changeBG
          ? "bg-white p-10 h-full overflow-auto"
          : "bg-black p-10 h-full overflow-auto"
      }
    >
      <section className="flex flex-col items-end lg:flex-row lg:justify-between gap-5">
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
        <div className="flex flex-col items-end gap-5">
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

          <div className="text-white h-max p-5 flex flex-col gap-4 border-2 border-[#aaa] rounded-2xl signUpCont">
            <div className="flex flex-col gap-2">
              <label className={changeBG ? "text-black" : "text-white"}>
                What is your first name?
              </label>
              <input
                type="text"
                placeholder="jane"
                className={changeBG ? "text-black" : ""}
                onChange={(e) => setfirstName(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className={changeBG ? "text-black" : "text-white"}>
                What is your last name?
              </label>
              <input
                type="text"
                placeholder="smith"
                className={changeBG ? "text-black" : ""}
                onChange={(e) => setlastName(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className={changeBG ? "text-black" : "text-white"}>
                What is your job title?
              </label>
              <select
                className={changeBG ? "text-black bg-transparent" : "bg-black"}
                onChange={(e)=>setJob(e.target.value)}
              >
                <option>choose</option>
                {Jobs.map((item, id) => (
                  <option key={id} value={item.occupation}>
                    {item.occupation}
                  </option>
                ))}
              </select>
            </div>

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
                create a password
              </label>
              <input
                type="password"
                placeholder="********"
                className={changeBG ? "text-black" : ""}
                onChange={(e) => setpassword(e.target.value)}
              />
            </div>
            <div className="text-xs text-[#aaa]">
              Must include at least 8 characters, one special character, one
              number, and one uppercase character.
            </div>

            <div className="flex items-center gap-3">
              <input type="checkbox" onClick={handleCheck} />
              <div
                className={
                  changeBG ? "text-xs text-black" : "text-xs text-white"
                }
              >
                I agree to and accept MoonPay's{" "}
                <Link className="text-[#992af7]">terms and conditions.</Link>
              </div>
            </div>
            <div
              className={
                submitEmail
                  ? "bg-[#992af7]/50 text-center py-2 w-[90%] m-auto rounded-lg capitalize text-[#ddd]"
                  : "bg-[#992af7] text-center py-2 w-[90%] m-auto rounded-lg capitalize hover:bg-[#a749f9]"
              }
              onClick={submitEmail ? null : handlesubmitEmail}
            >
              {submitEmail ? "verifying..." : "create account"}
            </div>
            <div
              className={
                changeBG
                  ? "text-xs text-black text-center"
                  : "text-xs text-white text-center"
              }
            >
              Already have an account?
              <Link to="/login" className="text-[#992af7]">
                {" "}
                Sign in{" "}
              </Link>
              or
              <Link to="/buycrypto" className="text-[#992af7]">
                {" "}
                just looking to buy crypto
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default SignUpPage;

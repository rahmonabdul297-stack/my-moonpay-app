import { useEffect, useState } from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import { FaAngleDown, FaRegClock, FaRegCopy, FaStar } from "react-icons/fa";
import { IoBagHandleOutline, IoCheckmarkCircle } from "react-icons/io5";
import {
  currencyFormatter,
  errorNotification,
  successNotification,
} from "../utils/helper";
import { TbClockHour12 } from "react-icons/tb";
import { RiBtcFill } from "react-icons/ri";
import { IoIosFlash, IoMdStar } from "react-icons/io";
import { MdOutlineStarHalf } from "react-icons/md";
import { GoDotFill, GoPlus } from "react-icons/go";
import { CgMathMinus } from "react-icons/cg";
import { Link } from "react-router-dom";

const BusinessPage = () => {
  const [Img, setImg] = useState(0);
  const imgsSource = [
    {
      id: 1,
      src: "https://payload-marketing.moonpay.com/api/media/file/Group%201000003765%20(1).png?w=3840&q=90",
    },
    {
      id: 2,
      src: "https://payload-marketing.moonpay.com/api/media/file/Group%201000003832.png?w=1920&q=90",
    },
    {
      id: 3,
      src: "https://payload-marketing.moonpay.com/api/media/file/7h0b1s84unj-ZWABJmAZQnvWVbpHlc6pJ?w=3840&q=90",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setImg((prev) => (prev + 1) % imgsSource.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);
  const [copyInstallurl, setcopyInstallurl] = useState(false);
  const handleTextcopying = () => {
    setcopyInstallurl(true);
    setTimeout(() => {
      setcopyInstallurl(false);
    }, 1000);
    navigator.clipboard.writeText(
      "npm install --save @moonpay/react-native-moonpay-sdk"
    );
  };
  const [Modes, setModes] = useState(true);
  const testNliveModeBtncolored = {
    background: "#282c34",
    padding: "5px",
    borderRadius: "50px",
    color: "white",
  };
  const testNliveModeBtncolorless = {
    background: "#000",
    padding: "5px",
    borderRadius: "50px",
    color: "white",
  };
  const testMode = `import {View, Button, Text} from 'react-native';
import {useMoonPaySdk} from '@moonpay/react-native-moonpay-sdk';

const YourComponent = () => {
  const {openWithInAppBrowser, generateUrlForSigning, updateSignature} =
    useMoonPaySdk({
      flow: 'buy',
      environment: 'sandbox',
      params: {
        apiKey: 'pk_test_key',
      },
    });
};
`;
  const liveMode = `import {View, Button, Text} from 'react-native';
import {useMoonPaySdk} from '@moonpay/react-native-moonpay-sdk';

const YourComponent = () => {
  const {openWithInAppBrowser, generateUrlForSigning, updateSignature} =
    useMoonPaySdk({
      flow: 'buy',
      environment: 'production',
      params: {
        apiKey: 'pk_live_key',
      },
    });
};

`;
  const handletestMode = () => {
    setModes(true);
  };

  const handleliveMode = () => {
    setModes(false);
  };
  const [copyModes, setcopyModes] = useState(false);
  const HandlecopyModes = () => {
    setcopyModes(true);
    if (Modes === true) {
      navigator.clipboard.writeText(testMode);
      successNotification("copied!");
    }
    if (Modes === false) {
      navigator.clipboard.writeText(liveMode);
    }
    setTimeout(() => {
      setcopyModes(false);
    }, 1000);
  };

  const testimonialArr = [
    {
      id: 1,
      img: "https://payload-marketing.moonpay.com/api/media/file/Bitcoin.com.png",
      reviewsTitle:
        "Increased revenue by over 500% after integrating MoonPay’s global payments solution.",
      reviews:
        "“MoonPay’s payments solution has been instrumental in growing revenues at Bitcoin.com. Their product is not only built with the user experience in mind — for merchants, it is safe, fast, and highly scalable.”",
      userImg:
        "https://payload-marketing.moonpay.com/api/media/file/picmqdsl5mi-69GG7GRWUENYiwIW4Wwwvw",
      userName: "Dennis Jarvis, CEP",
      website: "Bitcoin.com",
    },

    {
      id: 2,
      img: "https://payload-marketing.moonpay.com/api/media/file/joaz1nfjo4-5yT6GKmlHCQkcFSxnTIGLO",
      reviewsTitle: "Choosing MoonPay has been a great decision for us.",
      reviews:
        "The product’s excellence has led to an amazing shift in how we onboard new users and help them fund their wallets. Seamlessly integrating it into our workflow was a breeze, and the support team’s prompt and effective solutions have been a constant reassurance.",
      userImg:
        "https://payload-marketing.moonpay.com/api/media/file/hmh66nhoha-1BMELQu6PAYmSTkjcjqCEW",
      userName: "The Phantom Team",
      website: "",
    },

    {
      id: 3,
      img: "https://payload-marketing.moonpay.com/api/media/file/1rubt7kping-5nPg7ac269ViAf5qBaJxaw.png",
      reviewsTitle:
        "Right from day one, MoonPay's exceptional product surpassed our expectations, thanks to its seamless integration process that allowed us to hit the ground running effortlessly.",
      reviews:
        "“What truly sets MoonPay apart is the consistent and reliable support that accompanies this journey – quick, effective, and always there when we needed it. Their comprehensive developer website is invaluable; it provides solutions to integration challenges, making it a go-to resource. Moreover, MoonPay's responsive support team truly listens to our needs, enhancing the overall experience and making them a great partner to work with.”",
      userImg:
        "https://payload-marketing.moonpay.com/api/media/file/t1uqryuxcjl-6Zhiap2l7GpZJiGY3RlG3a",
      userName: "The Ledger Team",
      website: "",
    },
  ];

  const [BtcReview, setBtcReview] = useState(false);
  const [oncrampinCrypto, setoncrampinCrypto] = useState(false);
  const [cryptoFait, setcryptoFait] = useState(false);
  const [Oncrampsexample, setOncrampsexample] = useState(false);
  const [howToselectOncramp, sethowToselectOncramp] = useState(false);
  const handleoncrampinCrypto = () => {
    if (oncrampinCrypto === false) {
      setoncrampinCrypto(true);
    } else {
      setoncrampinCrypto(false);
    }
  };

  const handlecryptoFait = () => {
    if (cryptoFait === false) {
      setcryptoFait(true);
    } else {
      setcryptoFait(false);
    }
  };

  const handleOncrampsexample = () => {
    if (Oncrampsexample === false) {
      setOncrampsexample(true);
    } else {
      setOncrampsexample(false);
    }
  };

  const handlehowToselectOncramp = () => {
    if (howToselectOncramp === false) {
      sethowToselectOncramp(true);
    } else {
      sethowToselectOncramp(false);
    }
  };
  const HandleBtcReview = () => {
    if (BtcReview === false) {
      setBtcReview(true);
    } else if (BtcReview === true) {
      setBtcReview(false);
    } else {
      setBtcReview();
    }
  };
  return (
    <div className="w-full py-32">
      <section className="pl-12 flex flex-col lg:flex-row justify-between gap-4">
        <div className="w-[80%] lg:w-[40%] flex flex-col items-start gap-6 text-white">
          <h4 className="uppercase text-[#7d00ff]">Crypto On-Ramp</h4>
          <div className="text-5xl font-bold text-black overflow-y-hidden">
            Boost your revenue with the world's #1 crypto on-ramp
          </div>
          <div className="text-[#5b6067] font-normal ">
            Our on-ramp gives you global coverage, seamless revenue sharing, and
            zero risk of fraud or chargebacks. All in a few lines of code.
          </div>

          <div className="flex justify-between gap-2.5">
            <div className="bg-[#7d00ff]  px-3 p-1 rounded capitalize shadow-2xl shadow-[#7d00ff] ">
              build with us
            </div>
            <div className="bg-[#f0f0f0] hover:bg-[#d8d6d6]   text-black px-1  lg:px-3 lg:py-1 rounded capitalize flex items-center gap-1">
              <IoBagHandleOutline />
              read our docs
            </div>
          </div>
        </div>

        <div className="lg:w-[50%]">
          <img src={imgsSource[Img].src} alt="" />
        </div>
      </section>

      <section className="box lg:mt-20">
        <marquee behavior="" direction="">
          <div className="flex  lg:gap-4 py-6">
            <img
              src="https://payload-marketing.moonpay.com/api/media/file/mc-1.png"
              alt=""
              className="h-20 w-[300px] "
            />
            <img
              src="https://payload-marketing.moonpay.com/api/media/file/visa-2.png"
              alt=""
              className="h-20 w-[300px] "
            />
            <img
              src="https://payload-marketing.moonpay.com/api/media/file/apple-pay-1.png"
              alt=""
              className=" h-20 w-[300px]"
            />
            <img
              src="https://payload-marketing.moonpay.com/api/media/file/google-pay-1.png"
              alt=""
              className=" h-20 w-[300px]"
            />
            <img
              src="https://payload-marketing.moonpay.com/api/media/file/paypal-5.png"
              alt=""
              className="h-20 w-[300px] "
            />
            <img
              src="https://payload-marketing.moonpay.com/api/media/file/venmo-4.png"
              alt=""
              className=" h-20 w-[300px]"
            />
            <img
              src="  https://payload-marketing.moonpay.com/api/media/file/r76j0d1luj-70TJGBU74A6t62MhXAa7HK"
              alt=""
              className=" h-20 w-[300px]"
            />

            <img
              src="https://payload-marketing.moonpay.com/api/media/file/faster-payments.png"
              alt=""
              className=" h-20 w-[300px]"
            />
            <img
              src="https://payload-marketing.moonpay.com/api/media/file/revolut-pay.png"
              alt=""
              className="h-20 w-[300px] "
            />
            <img
              src="  https://payload-marketing.moonpay.com/api/media/file/paysafe-2.png"
              alt=""
              className="h-20 w-[300px] "
            />
            <img
              src="https://payload-marketing.moonpay.com/api/media/file/yellow-card.png"
              alt=""
              className=" h-20 w-[300px]"
            />
            <img
              src="https://payload-marketing.moonpay.com/api/media/file/sepa.png"
              alt=""
              className="h-20 w-[300px] "
            />
          </div>
        </marquee>

        <div className="w-[80%] lg:w-[60%] mt-6 m-auto flex flex-col items-center gap-2.5 text-center">
          <h4 className="text-xl lg:text-3xl overflow-y-hidden text-center">
            One small snippet of code to help you
            <div className="text-[#7d00ff]">scale your business quickly.</div>
          </h4>
          <div className="text-center text-2xl text-black">
            Our on-ramp can be integrated into your app or website in 10 minutes
            — see for yourself.
          </div>
          <div className="w-full lg:w-[600px] flex justify-between items-center gap-1 mt-9 bg-[#f0f0f0] text-[#7d00ff] py-3 px-3 rounded-full text-[10px] lg:text-[15px]">
            npm install --save @moonpay/react-native-moonpay-sdk
            <div
              className="flex items-center gap-2 bg-white py-2 px-3 rounded-full"
              onClick={handleTextcopying}
            >
              {copyInstallurl ? "copied!" : "copy"}{" "}
              {copyInstallurl ? <IoCheckmarkCircle /> : <FaRegCopy />}{" "}
            </div>
          </div>
        </div>
      </section>
      <section className="px-6 py-20 mt-16 flex flex-col lg:flex-row justify-between gap-8 lg:gap-5">
        <div className="bg-[#1a1c20] lg:h-[500px] lg:w-[70%] rounded-4xl p-3 flex flex-col gap-7">
          <div className="flex justify-between  text-[#95978d] capitalize px-5 py-3">
            <div>javaScript</div>
            <div className="flex justify-between gap-4">
              <div
                style={
                  Modes ? testNliveModeBtncolored : testNliveModeBtncolorless
                }
                className="overflow-y-hidden"
                onClick={handletestMode}
              >
                test mode
              </div>
              <div
                style={
                  Modes ? testNliveModeBtncolorless : testNliveModeBtncolored
                }
                className="overflow-y-hidden"
                onClick={handleliveMode}
              >
                live mode
              </div>
            </div>
          </div>
          <div className="bg-[#282c34] h-[60%] w-full rounded-lg text-white flex items-center px-3">
            {Modes ? testMode : liveMode}
          </div>
          <div
            className={
              Modes
                ? "flex justify-between overflow-y-hidden text-[#95978d]"
                : "flex justify-end"
            }
          >
            <div
              className={
                Modes
                  ? "flex items-center gap-2 text-xs lg:text-normal"
                  : "hidden"
              }
            >
              <BsInfoCircleFill />
              We are using your test API key as you are in sandbox mode.
            </div>
            <div
              className="flex items-center gap-2 bg-[#7d00ff] text-white lg:py-3 px-3 rounded-full"
              onClick={HandlecopyModes}
            >
              {copyModes ? "copied!" : " copy"}
              {copyModes ? <IoCheckmarkCircle /> : <FaRegCopy />}
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-2xl drop-shadow-2xl">
          <img
            src="https://payload-marketing.moonpay.com/api/media/file/st8e72d7nvj-5rFBKt3kQYYBlfmSfPSJeJ"
            alt=""
          />
        </div>
      </section>

      <section className="px-4 flex flex-col lg:flex-row justify-between gap-5">
        <div className="bg-[#eff3f9] lg:w-[60%] rounded-2xl p-10 flex flex-col items-center justify-center gap-7">
          <div className="overflow-y-hidden">
            <div className="flex flex-col gap-4 overflow-y-hidden">
              <div className="cardanim1 w-[300px] flex justify-between items-center gap-2 bg-white px-5 py-3 rounded-md">
                <img src="/images/ethreum-no-bg.png" alt="" className="h-10" />

                <div>
                  <div>Ethereum (ETH)</div>
                  <div className="text-[#9794a2]  flex items-center gap-2">
                    <IoCheckmarkCircle color="green" />
                    Purchased
                  </div>
                </div>
                <div>
                  <FaRegClock />
                </div>
              </div>{" "}
              <div className="cardanim1 flex items-center gap-2 bg-white px-5 py-3 rounded-md">
                <img src="/images/moonpay-no-bg.png" alt="" className="h-10" />
                <div>
                  <div>MoonPay Account</div>
                  <div className="text-[#9794a2] flex items-center gap-2">
                    0
                  </div>
                </div>
              </div>
            </div>
            <div className="cardanim2 flex items-center gap-2 bg-white px-5 py-3 rounded-md">
              <img src="/images/moonpay-no-bg.png" alt="" className="h-10" />
              <div>
                <div>Deposited</div>
                <div className="text-[#9794a2]  flex items-center gap-2">
                  200
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <h4 className="text-3xl">
              {" "}
              No wallet? <span className="text-[#7d00ff]">No problem</span>
            </h4>
            <div className="text-center w-[65%]">
              We’ll help them open a BTC or ETH wallet that supports hundreds of
              assets.
            </div>
            <div className="bg-black text-white px-2 py-2 rounded-lg">
              Learn more
            </div>
          </div>
        </div>
        <div className="businessCardBG lg:w-[40%] rounded-2xl p-10 flex items-center justify-center">
          <div className="flex flex-col items-center justify-center gap-4">
            <h4 className="text-3xl text-white "> Revenue sharing </h4>
            <h4 className="text-3xl ">from the start</h4>
            <div className="text-center w-[65%]">
              You can enter your revenue sharing percentage when setting up your
              developer account.
            </div>
            <div className="bg-black text-white px-2 py-2 rounded-lg">
              Build with Us
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 mt-10 flex flex-col lg:flex-row justify-between gap-3">
        <div className="bg-[#111316] lg:w-[40%] rounded-2xl p-10 flex flex-col items-center justify-center shadow-inner">
          <div className="w-full h-[200px] relative ">
            <img
              src="https://storage.googleapis.com/static.moonpay.com/media/B2B/product-features/plug-and-play/android.svg"
              alt=""
              className="h-20 absolute left-[0%] "
            />

            <img
              src="https://storage.googleapis.com/static.moonpay.com/media/B2B/product-features/plug-and-play/node.svg?cb=1"
              alt=""
              className="h-20  absolute right-[0%]"
            />

            <img
              src="https://storage.googleapis.com/static.moonpay.com/media/B2B/product-features/plug-and-play/react.svg?cb=1"
              alt=""
              className="h-20  absolute left-[50%] top-[50%]"
            />
          </div>
          <div className="text-white flex flex-col gap-3 items-center">
            <h4 className="text-2xl lg:text-3xl text-center">
              We're <span className="text-[#af6ff7]">plug and play</span> with
              your codebase
            </h4>

            <div className="bg-white hover:bg-[#d3d3d3] text-[#451e82] px-2 py-1 rounded-lg">
              Get set up with us
            </div>
          </div>
        </div>
        <div className="businessCard2Bg lg:w-[60%] rounded-2xl p-10 flex flex-col items-center justify-center">
          <img
            src="https://images.ctfassets.net/ohcexbfyr6py/6936ArnQvk1XVfsyofrLyN/5076a7f8c9deabe88b46244d34d12b0c/Dashboard.png?w=3840&q=90"
            alt=""
          />

          <div className="text-white flex flex-col gap-3 items-center mt-3.5">
            <h4 className="text-2xl lg:text-4xl text-center">
              {" "}
              You're <span className="text-[#b8ff9a]">always</span> in control
              with our dashboard
            </h4>
            <div className="bg-white hover:bg-[#d3d3d3] text-[#451e82] px-2 py-2 rounded-lg">
              see our dashboard{" "}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 my-12">
        <div className="bg-[#eff3f9] flex flex-col lg:flex-row justify-between gap-10  items-center p-6 lg:p-20 rounded-2xl">
          <div className=" ">
            <h4 className="text-2xl lg:text-3xl">
              No Chargebacks.
              <span className="text-[#7715f5]"> Guaranteed.</span>
            </h4>

            <div>
              We handle all the card processing, so you’ll never need to worry
              about fraud or disputes.
            </div>
          </div>

          <img
            src="https://images.ctfassets.net/ohcexbfyr6py/6f4upgnz7TvF4TjY2KZEXK/0a2fcd49af11cf703b825fe81eb46ce6/Image.png?w=1200&q=90"
            alt=""
            className="lg:w-[60%]"
          />
        </div>
      </section>

      <section className="p-4 flex flex-col lg:flex-row justify-between gap-4">
        <div className="businessCard3Bg lg:w-[40%] rounded-2xl p-10 shadow-xl">
          <div className="flex flex-col gap-4 items-center text-center">
            <h4 className="text-2xl lg:text-4xl">
              {" "}
              Get setup in <span className="text-[#7715f5]">10 minutes</span>
            </h4>
            <div>
              {" "}
              Our test environment and docs make integrating with MoonPay easy.
            </div>
            <div className="bg-black  w-[50%] text-white px-2 py-2 rounded-lg">
              Build with Us
            </div>
          </div>
        </div>

        <div className="lg:w-[60%] bg-[#eff3f9] pb-6 rounded-2xl">
          <img
            src="https://images.ctfassets.net/ohcexbfyr6py/1UacRTYJYJbWjcKicmfX0e/1a7fcd2182dc3e8584a8038b73128796/Better_Approval_Rates__1_.png?w=1920&q=90"
            alt=""
          />

          <div className="flex flex-col items-center gap-4 py-14">
            <h4 className="text-2xl lg:text-3xl">
              {" "}
              Built for{" "}
              <span className="text-[#7715f5]">better approval rates</span>
            </h4>
            <div className="text-center">
              {" "}
              We help more buyers successfully pay by card and complete a
              purchase.
            </div>

            <div className="bg-black text-white px-2 py-2 rounded-lg">
              Learn more
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#eff3f9] rounded-2xl  mx-4 hidden lg:flex flex-col items-center justify-center overflow-y-hidden">
        <div className="lg:w-[50%]  bg-[#eff3f9] pt-40 z-[3]">
          <div className="flex justify-center  gap-3 items-center py-2">
            <h4 className="text-2xl">Check out in under</h4>
            <div className="bg-[#7715f5] text-white text-3xl flex justify-between items-center gap-1 rounded-4xl p-2">
              <TbClockHour12 />
              30s
            </div>
          </div>
          <div className=" rounded-2xl">
            <div className=" p-1 mx-auto bg-[#dddde1]  shadow-black shadow-2xl"></div>
          </div>
        </div>
        <div className="lg:w-[50%]  bg-[#eff3f9] z-[1]">
          <div className="bg-white mx-auto h-1 rounded-2xl shadow-inner shadow-black"></div>
          <div className="p-1 mx-auto bg-[#dddde1]  "></div>
        </div>

        <div className=" w-[550px]  border-r-[100px] border-r-[#c6afef]/40 border-l-[100px] border-l-[#c6afef]/40  border-b-[300px] border-b-[#c6afef]/60 view-cardShadow"></div>

        <div className="card1 bg-white h-[240px] w-[350px] absolute rounded-b-3xl border-2 border-gray-400 z-[2] flex flex-col items-center justify-end p-2 shadow-2xl shadow-black">
          <h4 className="text-6xl text-[#7715f5] font-extrabold">$1,000</h4>
          <div className="flex justify-between items-center gap-2  py-3 w-[200px]">
            <div className="bg-[#f7f7f8] flex items-center px-3 py-1 rounded-full">
              <RiBtcFill className="text-[#f7931a]" />
              Bitcoin
              <FaAngleDown />
            </div>

            <div className="bg-[#7715f5] text-white flex items-center gap-2 px-3 py-1 rounded-full">
              <IoIosFlash />
              Buy
            </div>
          </div>
        </div>
        <div className="card2 bg-white h-[240px] w-[350px] absolute rounded-b-3xl border-2 border-gray-400 z-[1] flex flex-col gap-5 items-center justify-end p-2 shadow-2xl shadow-black">
          <div className="  flex gap-3 items-center">
            <RiBtcFill className="text-[#f7931a] text-6xl" />
            <div>
              <div className="text-black">Bitcoin(BTC)</div>
              <div className="text-gray-400">{currencyFormatter(2000)}</div>
            </div>
          </div>

          <div className="border-t border-gray-400 w-full flex justify-between">
            <div className="text-gray-400">You'll get</div>
            <div>{currencyFormatter(30)}</div>
          </div>
        </div>
      </section>

      <section className="box py-10 flex flex-col gap-7">
        <div className="lg:w-[50%] mx-auto  flex flex-col items-center justify-center text-center gap-6">
          <h4 className="text-2xl lg:text-4xl ">
            Crypto was designed to go beyond borders
          </h4>
          <div>
            And our on-ramp is no exception. We can help your wallet operate in
            more places around the world.
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-center gap-5 py-16">
          <div className="bg-[#eff3f9] h-[200px] lg:w-[200px] rounded-2xl flex flex-col items-center justify-center p-6 hover:bg-white duration-500 ease-in-out hover:scale-105 hover:shadow-lg ">
            <div className="text-[#7715f5] font-black  text-8xl lg:text-6xl overflow-y-hidden">
              30+
            </div>
            <div className="text-center">Supported Fiat Currencies</div>
          </div>{" "}
          <div className="bg-[#eff3f9] h-[200px] lg:w-[200px] rounded-2xl flex flex-col items-center justify-center p-6 hover:bg-white duration-500 ease-in-out hover:scale-105 hover:shadow-lg ">
            <div className="text-[#7715f5] font-black  text-8xl lg:text-6xl overflow-y-hidden">
              {" "}
              110+
            </div>
            <div className="text-center">Supported Cryptocurrencies</div>
          </div>{" "}
          <div className="bg-[#eff3f9] h-[200px] lg:w-[200px] rounded-2xl flex flex-col items-center justify-center p-6 hover:bg-white duration-500 ease-in-out hover:scale-105 hover:shadow-lg ">
            <div className="text-[#7715f5] font-black  text-8xl lg:text-6xl overflow-y-hidden">
              {" "}
              160+
            </div>
            <div className="text-center">Supported Countries</div>
          </div>
        </div>
      </section>

      <section className="mx-4 bg-[url('https://www.moonpay.com/assets/landingPages/cta-panel-bg-light.png')] h-[300px] lg:h-[500px] bg-cover rounded-lg flex flex-col items-center justify-center p-3 gap-4">
        <div className="text-2xl lg:text-4xl font-bold overflow-y-hidden">
          Learn more about our products
        </div>
        <div className="text-xl font-normal text-center">
          {" "}
          Tell us more about your project, and we'll help you with your crypto
          onramp and offramp needs
        </div>
        <div className="bg-black text-white capitalize px-3 py-2 rounded-lg">
          talk to us
        </div>
      </section>

      <section className="box mt-10">
        <div className="flex flex-col items-center">
          <div className="font-medium text-xl lg:text-2xl"> Testimonials</div>
          <div className="font-bold text-2xl lg:text-4xl">
            Hear from our partners
          </div>
        </div>

        {/* testimonials section */}
        <div className="flex flex-col gap-10 py-20">
          {BtcReview
            ? testimonialArr
                .filter((item) => item.id === 1)
                .map((item) => {
                  return (
                    <div
                      className="flex flex-col lg:flex-row justify-between gap-6"
                      key={item.id}
                    >
                      <img src={item.img} alt="" />
                      <div className="flex flex-col gap-10">
                        <h4 className="font-bold text-2xl">
                          {item.reviewsTitle}
                        </h4>
                        <div>{item.reviews}</div>

                        <div className="flex items-center gap-3">
                          <img
                            src={item.userImg}
                            alt=""
                            className="h-10 rounded-[50%]"
                          />
                          <div>
                            <div>{item.userName}</div>
                            <div>{item.website}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
            : testimonialArr
                .filter((item) => item.id === 2)
                .map((item) => {
                  return (
                    <div
                      className="flex flex-col lg:flex-row  justify-between gap-6"
                      key={item.id}
                    >
                      <img src={item.img} alt="" />
                      <div className="flex flex-col gap-10">
                        <h4 className="font-bold text-2xl">
                          {item.reviewsTitle}
                        </h4>
                        <div>{item.reviews}</div>

                        <div className="flex items-center gap-3">
                          <img
                            src={item.userImg}
                            alt=""
                            className="h-10 rounded-[50%]"
                          />
                          <div>
                            <div>{item.userName}</div>
                            <div>{item.website}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
            ? testimonialArr
                .filter((item) => item.id === 3)
                .map((item) => {
                  return (
                    <div
                      className="flex flex-col lg:flex-row  justify-between gap-6"
                      key={item.id}
                    >
                      <img src={item.img} alt="" />
                      <div className="flex flex-col gap-10">
                        <h4 className="font-bold text-2xl">
                          {item.reviewsTitle}
                        </h4>
                        <div>{item.reviews}</div>

                        <div className="flex items-center gap-3">
                          <img
                            src={item.userImg}
                            alt=""
                            className="h-10 rounded-[50%]"
                          />
                          <div>
                            <div>{item.userName}</div>
                            <div>{item.website}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
            : null}
        </div>

        <div className=" flex justify-center gap-10">
          <div
            className="bg-[#eff3f9] flex items-center justify-center w-[30%] px-2 lg:px-5 py-2 lg:py-5  rounded-lg"
            onClick={HandleBtcReview}
          >
            <img
              src="https://payload-marketing.moonpay.com/api/media/file/Bitcoin%20new%20logo.png"
              alt=""
              className="h-5"
            />
          </div>

          <div className="bg-[#eff3f9] flex items-center justify-center w-[30%] px-2 lg:px-5 py-2 lg:py-5  rounded-lg hover:border-2border-[#7d00ff]">
            <img
              src="https://payload-marketing.moonpay.com/api/media/file/8fac5adfqf-Y6D4HOiF6re0FEM7sZuuv"
              alt=""
              className="h-5"
            />
          </div>

          <div
            className="bg-[#eff3f9] flex items-center justify-center w-[30%] px-2 lg:px-5 py-2 lg:py-5 rounded-lg"
            onClick={HandleBtcReview}
          >
            <img
              src="https://payload-marketing.moonpay.com/api/media/file/aoql1wo1ox-33LUOrOCd682V1oM061yWG"
              alt=""
              className="h-5"
            />
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="flex flex-col items-center gap-4 ">
          <h4 className="uppercase"> User Reviews</h4>
          <div className="font-bold text-2xl lg:text-4xl">
            See what our customers say
          </div>
          <div className="font-light text-xs lg:text-xl text-[#555c6b] ">
            We're the highest-rated, most-reviewed on-ramp on the market.
          </div>

          <div className="flex gap-2 items-center capitalize">
            <img src="/images/trustpilot-star-2.svg" alt="" />
            trustpilot
          </div>

          <div className="flex gap-0.5  text-white">
            <IoMdStar size={20} className="bg-[#10b981]" />
            <IoMdStar size={20} className="bg-[#10b981]" />
            <IoMdStar size={20} className="bg-[#10b981]" />
            <IoMdStar size={20} className="bg-[#10b981]" />
            <MdOutlineStarHalf size={20} className="bg-[#10b981]" />
            <div className="text-black">4.1 Rated by 100K+ people</div>
          </div>
          <div className="w-[1500px] overflow-x-hidden flex justify-between gap-3 slideright">
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

          <div className="w-[1500px] overflow-x-hidden flex justify-between gap-3 slideleft">
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
        </div>
      </section>

      <section>
        <div className="mx-auto w-[80%] lg:w-[60%] flex flex-col items-start gap-3">
          <h4 className="uppercase text-[#7d00ff] text-2xl lg:text-3xl">
            Support
          </h4>
          <div className="text-xl lg:text-4xl font-black overflow-y-hidden">
            Got questions? We’re here to help.
          </div>
          <div className="border-b py-3 w-full">
            <div className="flex justify-between gap py-4  font-bold text-xl">
              What are onramps in crypto?
              <div
                className="border border-[#cc9aff] rounded-[50%] h-10 w-10 p-2"
                onClick={handleoncrampinCrypto}
              >
                {oncrampinCrypto ? (
                  <CgMathMinus className="rotate" />
                ) : (
                  <GoPlus className="rotate" />
                )}
              </div>
            </div>
            <div
              className={
                oncrampinCrypto
                  ? "flex flex-col gap-4 text-[#a9a6b1]"
                  : "hidden"
              }
            >
              <p>
                {" "}
                An onramp is a payment gateway that lets you convert traditional
                money (sometimes called fiat) into cryptocurrencies, such as
                Bitcoin or Ethereum.
              </p>
              <p>
                They serve as an easy way to get into crypto because often all
                you need is a credit or debit card. However, the best onramps
                accept a wider range of payment methods. MoonPay, for example,
                accepts wires, Apple Pay, Google Pay, SEPA, and more.
              </p>
              <p>
                If you’re wondering how an onramp might help your business,
                let’s run through an example.
              </p>
              <p>
                Say you have a user who wants to swap some USD for BTC. With a
                crypto onramp like MoonPay, you can offer a way to do that
                straight from your website or app. All your user would need to
                do is specify the amount of BTC to purchase, and then pay using
                their preferred payment method. The onramp service would handle
                the rest and deliver the BTC to their crypto wallet. Easy.
              </p>

              <p>
                You mostly see onramps being used on centralized exchanges
                (CEXs) and decentralized exchanges (DEXs).
              </p>
            </div>
          </div>

          <div className="border-b w-full py-3">
            <div className=" flex justify-between gap py-4  font-bold text-xl">
              What are fiat onramps?
              <div
                className="border border-[#cc9aff] rounded-[50%] h-10 w-10 p-2"
                onClick={handlecryptoFait}
              >
                {cryptoFait ? (
                  <CgMathMinus className="rotate" />
                ) : (
                  <GoPlus className="rotate" />
                )}
              </div>
            </div>
            <div
              className={
                cryptoFait ? "flex flex-col gap-4 text-[#a9a6b1]" : "hidden"
              }
            >
              <p>
                {" "}
                Fiat onramps are online platforms that handle fiat to crypto
                conversion. They tend to do everything from processing payments
                to delivering crypto wallets.
              </p>

              <p>
                In the crypto space, fiat currency is the term given to
                traditional currencies such as USD, EUR, and JPY.
              </p>

              <p>
                Even if you’re not interested in new cryptocurrencies such as
                BTC, there are often stablecoin equivalents of most popular fiat
                currencies. And by buying these, you can still access a wealth
                of web3 projects.
              </p>

              <p>
                The best fiat onramps make the process of paying in fiat and
                getting crypto totally seamless. That’s why MoonPay lets you use
                popular payment methods like credit cards and wire transfers.
              </p>

              <p>
                After using a fiat onramp to purchase crypto, you can store it
                in a wallet, or trade it for other tokens on a crypto exchange.
              </p>
            </div>
          </div>

          <div className="border-b w-full py-3">
            <div className=" flex justify-between gap py-4 font-bold text-xl">
              What are examples of crypto onramps?
              <div
                className="border border-[#cc9aff] rounded-[50%] h-10 w-10 p-2"
                onClick={handleOncrampsexample}
              >
                {Oncrampsexample ? (
                  <CgMathMinus className="rotate" />
                ) : (
                  <GoPlus className="rotate" />
                )}
              </div>
            </div>
            <div
              className={
                Oncrampsexample
                  ? "flex flex-col gap-4 text-[#a9a6b1]"
                  : "hidden"
              }
            >
              <p>
                {" "}
                Crypto onramps are services that let apps and websites offer a
                way to exchange fiat currency for cryptocurrency. If you’ve ever
                purchased crypto before, you’ve probably used one.
              </p>

              <p>
                Popular examples include MoonPay — which is the leading provider
                in the space. But wallets like MetaMask, and centralized
                exchanges like Coinbase, all offer onramp functionality too.
              </p>
            </div>
          </div>

          <div className="border-b w-full py-3">
            <div className=" flex justify-between gap py-4  font-bold text-xl">
              How to select the best fiat onramp for crypto
              <div
                className="border border-[#cc9aff] rounded-[50%] h-10 w-10 p-2"
                onClick={handlehowToselectOncramp}
              >
                {howToselectOncramp ? (
                  <CgMathMinus className="rotate" />
                ) : (
                  <GoPlus className="rotate" />
                )}
              </div>
            </div>
            <div
              className={
                howToselectOncramp
                  ? "flex flex-col gap-4 text-[#a9a6b1]"
                  : "hidden"
              }
            >
              There are many fiat onramp providers out there, so it’s important
              to choose the one that’s right for you and your business. Here are
              some factors to consider:
              <div className="flex gap-2 px-4">
                <GoDotFill size={30} />
                <div>
                  <h3> Onramp reputation:</h3> Before selecting a fiat onramp,
                  you should research a provider’s customer reviews and ratings
                  on external ratings sites like Trustpilot. MoonPay, for
                  instance, is rated ‘Great’ with 4.2 stars out of 5. If you
                  want an onramp to crypto, always make sure to choose one that
                  has a great reputation and strong security practices.
                </div>
              </div>
              <div className="flex gap-2 px-4">
                <GoDotFill size={30} />
                <div>
                  <h3>Payment methods: </h3>Different fiat onramps offer varying
                  payment methods, such as cards and bank transfers. And not all
                  providers have the kind of international coverage you might
                  require. MoonPay offers a wide range of payment methods around
                  the world. Those include credit and debit cards, bank
                  transfers, mobile options like Apple Pay and Google Pay. It
                  also offers local options such as SEPA in the EU, Open Banking
                  in the UK, YellowCard in Nigeria, and PIX in Brazil.
                </div>
              </div>
              <div className="flex gap-2 px-4">
                <GoDotFill size={30} />
                <div>
                  <h3> Transaction fees:</h3> All fiat onramps will include
                  transaction fees for users to onramp crypto. These fees will
                  depend on things like the payment method, order size, and
                  market conditions. MoonPay charges a small processing fee, as
                  well as a dynamic fee that's based on network activity.
                </div>
              </div>
              <div className="flex gap-2 px-4">
                <GoDotFill size={30} />
                <div>
                  <h3> Transaction speed:</h3> Choosing a fiat onramp could come
                  down to how quickly you need your crypto. Centralized
                  exchanges allow you to make instant deposits and trades,
                  though you’ll need to wait if you want to withdraw any crypto.
                  MoonPay’s fiat to crypto onramp allows you to buy crypto in
                  minutes using a card — so you don’t need to wait days for
                  funds to settle on an exchange.
                </div>
              </div>
              <div className="flex gap-2 px-4">
                <GoDotFill size={30} />
                <div>
                  <h3>Supported cryptocurrencies:</h3> If you’re looking to
                  convert fiat to crypto, you’ll need to find a fiat onramp that
                  supports the specific cryptocurrency you want to purchase.
                  Most onramp options will offer popular tokens like Bitcoin and
                  Ethereum, but if you’re looking to buy more niche tokens then
                  you’ll have to look for onramps that offer greater coverage.
                  MoonPay offers more than 100 cryptocurrency tokens, including
                  BTC, ETH, USDT, BNB, and USDC.
                </div>
              </div>
              <div className="flex gap-2 px-4">
                <GoDotFill size={30} />
                <div>
                  <h3>Fiat currency and country coverage:</h3> Depending on
                  where you live, you may be limited in your options to convert
                  fiat to crypto. Some fiat onramps may have limited token
                  offerings based on regional restrictions, and may not have
                  coverage at all in certain countries. MoonPay offers coverage
                  in more than 160 countries and most US states.
                </div>
              </div>
            </div>
          </div>

          <Link
            to="https://support.moonpay.com/hc/en-gb/categories/4404675277329-B2B-Partner-Help-Center?_gl=1*mwz10t*_gcl_au*MTUxODIzMjkyMC4xNzYzNDE0NDY0*_ga*MTcxODY3MTU5Ny4xNzYzNDE0NDY0*_ga_YX57SVDKYQ*czE3NjQzNTg2MTMkbzQwJGcxJHQxNzY0MzU4ODE2JGo2MCRsMCRoMTA2NDkzNzE1MA.."
            className="mx-auto my-6 bg-[#7d00ff] text-white px-3 py-2 font-normal capitalize rounded-lg"
          >
            see more in help center
          </Link>
        </div>
      </section>

      <section className="bg-[url('https://www.moonpay.com/assets/landingPages/cta-panel-bg.svg')] bg-cover bg-no-repeat p-6 lg:py-10 rounded-2xl h-[300px] lg:h-[500px] mx-4 text-white flex flex-col items-center justify-center gap-3">
        <h4 className="text-2xl lg:text-4xl">Get started with our SDK</h4>
        <div className="text-xl">
          We’ll walk you through getting set up with MoonPay. Just enter your
          business email to create a developer account.
        </div>
        <Link
          to=""
          className="bg-white  text-[#7d00ff] capitalize px-4 py-1 rounded-md"
        >
          Build with Us
        </Link>
      </section>

      <section className="box py-10 flex flex-col lg:flex-row gap-4">
        <div className="flex flex-col items-center gap-5 lg:w-[50%]">
          <h4 className="capitalize text-xl lg:text-2xl text-center">
            {" "}
            There's more to MoonPay than just selling crypto
          </h4>
          <div className="">
            Once you're integrated, it's easy to add support for buying or
            swapping crypto as well.
          </div>
        </div>

        <div className=" flex flex-col lg:flex-row gap-4">
          <div className="flex flex-col items-center justify-center gap-3 bg-[#eff3f9] h-[300px] lg:w-[300px] rounded-lg p-4">
            <img
              src="https://payload-marketing.moonpay.com/api/media/file/tzvowpeu9x-7FIX5NryDrwoZGvMye5DSu?w=128&q=90"
              alt=""
              className="h-20 w-20"
            />
            <h4>On-Ramp</h4>
            <div>The leading way to buy crypto.</div>
            <div className="bg-[#7d00ff] text-white px-3 py-1 rounded-lg">learn more</div>
          </div>

           <div className="flex flex-col items-center justify-center gap-3 bg-[#eff3f9] h-[300px] lg:w-[300px] rounded-lg p-4">
            <img
              src="https://payload-marketing.moonpay.com/api/media/file/tzvowpeu9x-7FIX5NryDrwoZGvMye5DSu?w=128&q=90"
              alt=""
              className="h-20 w-20"
            />
            <h4>swaps</h4>
            <div>Cross-chain swaps between 700 tokens.</div>
            <div className="bg-[#7d00ff] text-white px-3 py-1 rounded-lg">learn more</div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default BusinessPage;

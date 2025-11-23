import { useEffect, useState } from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import { FaRegCopy } from "react-icons/fa";
import { IoCheckmarkCircle } from "react-icons/io5";
import { successNotification } from "../utils/helper";

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
    padding: "10px",
    borderRadius: "50px",
    color: "white",
  };
  const testNliveModeBtncolorless = {
    background: "#000",
    padding: "10px",
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
      successNotification("copied!")
    } 
    if(Modes === false) {
      navigator.clipboard.writeText(liveMode);
    }
    setTimeout(() => {
      setcopyModes(false);
    }, 1000);
   
  };
  return (
    <div className="w-full py-32">
      <section className="pl-12 flex flex-col lg:flex-row justify-between">
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
            <div className="bg-[#7d00ff]  px-3 p-1 rounded capitalize">
              build with us
            </div>
            <div className="border border-black text-black px-3 p-1 rounded capitalize">
              read our docs
            </div>
          </div>
        </div>

        <div className="w-[50%]">
          <img src={imgsSource[Img].src} alt="" />
        </div>
      </section>

      <section className="box mt-20">
        <marquee behavior="" direction="">
          <div className="flex justify-between gap-4 py-6">
            <img
              src="https://payload-marketing.moonpay.com/api/media/file/mc-1.png"
              alt=""
              className="h-10"
            />
            <img
              src="https://payload-marketing.moonpay.com/api/media/file/visa-2.png"
              alt=""
              className="h-10"
            />
            <img
              src="https://payload-marketing.moonpay.com/api/media/file/apple-pay-1.png"
              alt=""
              className="h-10"
            />
            <img
              src="https://payload-marketing.moonpay.com/api/media/file/google-pay-1.png"
              alt=""
              className="h-10"
            />
            <img
              src="https://payload-marketing.moonpay.com/api/media/file/paypal-5.png"
              alt=""
              className="h-10"
            />
            <img
              src="https://payload-marketing.moonpay.com/api/media/file/venmo-4.png"
              alt=""
              className="h-10"
            />
            <img
              src="https://payload-marketing.moonpay.com/api/media/file/faster-payments.png"
              alt=""
              className="h-10"
            />
            <img
              src="https://payload-marketing.moonpay.com/api/media/file/revolut-pay.png"
              alt=""
              className="h-10"
            />
            <img
              src="  https://payload-marketing.moonpay.com/api/media/file/paysafe-2.png"
              alt=""
              className="h-10"
            />
            <img
              src="https://payload-marketing.moonpay.com/api/media/file/yellow-card.png"
              alt=""
              className="h-10"
            />
            <img
              src="https://payload-marketing.moonpay.com/api/media/file/sepa.png"
              alt=""
              className="h-10"
            />
          </div>
        </marquee>

        <div className="w-[80%] lg:w-[60%] mt-6 m-auto flex flex-col items-center gap-2.5 text-center">
          <h4 className="text-2xl lg:text-3xl overflow-y-hidden">
            One small snippet of code to help you
            <div className="text-[#7d00ff]">scale your business quickly.</div>
          </h4>
          <div className="text-center text-2xl text-[#FEFEFE]">
            Our on-ramp can be integrated into your app or website in 10 minutes
            — see for yourself.
          </div>
          <div className="flex items-center gap-1 mt-9 bg-[#f0f0f0] text-[#7d00ff] py-3 px-3 rounded-full">
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
      <section className="px-6 py-20 mt-16 flex justify-between gap-5">
        <div className="bg-[#1a1c20] h-[500px] w-[70%] rounded-4xl p-3 flex flex-col gap-7">
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
          <div className={Modes?"px-6 flex justify-between overflow-y-hidden text-[#95978d]":"flex justify-end"}>
            <div className={Modes ? "flex items-center gap-2" : "hidden"}>
              <BsInfoCircleFill />
              We are using your test API key as you are in sandbox mode.
            </div>
            <div
              className="flex items-center gap-2 bg-[#7d00ff] text-white py-3 px-3 rounded-full"
              onClick={HandlecopyModes}
            >
              {copyModes ? "copied!" : " copy"}
              {copyModes ? <IoCheckmarkCircle /> : <FaRegCopy />}
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-2xl drop-shadow-2xl">
          <img src="https://payload-marketing.moonpay.com/api/media/file/st8e72d7nvj-5rFBKt3kQYYBlfmSfPSJeJ" alt=""/>
        </div>
      </section>
    </div>
  );
};
export default BusinessPage;

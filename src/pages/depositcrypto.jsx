import { FaAngleDown, FaArrowDown } from "react-icons/fa";
import { IoMdArrowDropdown, IoMdArrowDropup, IoMdSettings } from "react-icons/io";
import { useEffect, useState } from "react";
import Apploader from "../components/AppLoader";

const DepositPage = () => {
   const [availableCoin, setavailableCoin]=useState();
   

   useEffect(()=>{
   
     const HandleBlogPage= async()=>{
      
        const FetchData=await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false");
        let FetchedData=await FetchData.json();
        setavailableCoin(FetchedData)
        console.log(FetchedData.ok)
        console.log(FetchedData)
         if(FetchedData){
     infoNotification("You're welcome!")
    }
    }
    HandleBlogPage()
   },[])
   
    
   
      const [seemore,setseemore]=useState(false);
      const handleseeMore=()=>{
        <Apploader/>
        if(seemore===false){
          setseemore(true)
        }else{
          setseemore(false)
        }
        
      }
  return (
    <div>
      <section className="box py-44 grid grid-cols-3 gap-5">
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

        <div className="col-span-1 flex flex-col">
          <div className="flex gap-5">
            <div className="w-[70px] bg-[#edebe8] flex items-center px-2 py-1 rounded-full">
              NGN
              <FaAngleDown />
            </div>

            <div className="w-max bg-[#edebe8] flex items-center px-2 py-1 rounded-full">
              buy BTC
              <FaAngleDown />
            </div>

            <div className="bg-[#edebe8] rounded-[50%] p-2 ">
              <IoMdSettings />
            </div>
          </div>
          <div></div>
        </div>
      </section>

      <section className="border-t border-b py-10 flex flex-col items-center gap-3">
        <div className="font-bold capitalize">payment methods</div>
        <div className=" flex justify-between gap-18">
          <img
            src="https://payload-marketing.moonpay.com/api/media/file/google-pay.png"
            alt=""
          />
          <img
            src="https://payload-marketing.moonpay.com/api/media/file/mastercard.png"
            alt=""
          />
          <img
            src="https://payload-marketing.moonpay.com/api/media/file/paypal-2.png"
            alt=""
          />
          <img
            src="https://payload-marketing.moonpay.com/api/media/file/visa.png"
            alt=""
          />
          <img
            src="https://payload-marketing.moonpay.com/api/media/file/apple-pay.png"
            alt=""
          />
        </div>
      </section>
      <section className="box py-10  mt-10">
        <div>
          <h4 className="text-4xl">How to buy crypto on MoonPay</h4>
          <div className="text-[#737576] font-normal">
            Buy crypto in 150+ countries using the local currency of your bank
            account. We offer different payment options that cater to your
            region.
          </div>
        </div>



        <div className="flex flex-wrap gap-2 mt-10">

          <div  className="bg-[#f9f8f5] p-5 rounded-lg  w-[300px] flex flex-col items-start gap-3 justify-center">
            <img src=" https://payload-marketing.moonpay.com/api/media/file/open-account-2.svg" alt="" />
            <h4>1. Open your free account</h4>
            <p className="text-sm">
              Buying cryptocurrency on MoonPay is simple. Sign up for a free
              account in seconds from our app. Then add a few personal details
              to verify your identity.
            </p>
          </div>

          <div className="bg-[#f9f8f5] p-5 rounded-lg w-[300px] flex flex-col items-start justify-center gap-3">
            <img src=" https://payload-marketing.moonpay.com/api/media/file/choose-crypto-1.svg
           " alt="" />
            <h4>2. Choose the crypto you want to buy</h4>
            <p className="text-sm">
             Pick from over 100 cryptocurrencies, like Bitcoin (BTC), Ethereum (ETH), Solana (SOL), Tether (USDT), USD Coin (USDC) and more.
            </p>
          </div>

          <div  className="bg-[#f9f8f5] p-5 rounded-lg  w-[300px] flex flex-col items-start justify-center gap-3">
            <img src="https://payload-marketing.moonpay.com/api/media/file/open-wallet-address.svg
           " alt="" />
            <h4>3. Enter your wallet address</h4>
            <p className="text-sm">
            MoonPay works with most non-custodial crypto wallets. And if you don’t have a wallet yet, it’s simple to get a non-custodial wallet at checkout. Coming to MoonPay through a partner? We’ll pre-fill your wallet address automagically.
            </p>
          </div>

          <div  className="bg-[#f9f8f5] p-5 rounded-lg  w-[300px] flex flex-col items-start justify-center gap-3">
            <img src="https://payload-marketing.moonpay.com/api/media/file/top-up-balance.svg
            " alt="" />
            <h4>4. Top up your MoonPay Balance</h4>
            <p className="text-sm">
             The easiest way to buy cryptocurrency is by topping up your MoonPay Balance. Just add funds in your MoonPay account using convenient methods like debit card and Apple Pay to enjoy faster crypto purchases with lower fees, higher approval rates, and zero-fee withdrawals when you cash out to certain payment methods.
            </p>
          </div>


          <div  className="bg-[#f9f8f5] p-5 rounded-lg  w-[300px] flex flex-col items-start justify-center gap-3">
            <img src="https://payload-marketing.moonpay.com/api/media/file/checkout-and-pay-2.svg
            " alt="" />
            <h4>5. Checkout and pay</h4>
            <p className="text-sm">
             Don't want to pay with your balance? No worries, there are still loads of options to choose from. You can pay with a credit/debit card, Apple Pay, Google Pay, or PayPal. We also support local options such as SEPA , UK Faster Payments, Pix in Brazil, as well as Venmo and bank transfers in the US. Once paid, that’s it — we’ll handle the rest.
            </p>
          </div>
        </div>
      </section>


      <section className="py-20">
       <div className="box flex flex-wrap gap-5">
        {seemore?availableCoin?.map((item,id)=>(
        <div key={id} className="flex gap-2 items-center w-[150px]">
           <img src={item.image} alt="" className="h-10 w-10"/>
           <div className="text-[10px] font-bold">
            {item.name}
           </div>
           <div className="text-[10px] text-[#928e89] uppercase">{item.symbol}</div>
        </div>
       )):availableCoin?.slice(0,12).map((item,id)=>(
        <div key={id} className="flex gap-3 items-center w-[150px]">
           <img src={item.image} alt="" className="h-10 w-10"/>
           <div className="text-[10px] font-bold">
            {item.name}
           </div>
           <div className="text-[10px] text-[#928e89] uppercase">{item.symbol}</div>
        </div>
       ))}
       </div>

       <div className="mx-auto w-[150px] hover:bg-[#e0dede]  text-black mt-5 flex items-center justify-center gap-2 rounded-md" onClick={handleseeMore}>{seemore?"show less asset":"show all asset"}
       {seemore?<IoMdArrowDropup />:<IoMdArrowDropdown />}</div>
      </section>
    </div>
  );
};
export default DepositPage;

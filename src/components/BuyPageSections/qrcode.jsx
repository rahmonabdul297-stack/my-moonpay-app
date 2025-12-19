const QrCode = ({getApp,handlegetAppClosing}) => {
  return (
    <section
      className={
        getApp
          ? "px-20 py-10 w-screen bg-white/20 backdrop-blur-sm fixed left-0 top-0 z-30 h-[100vh] flex items-center justify-center"
          : "hidden"
      }
      onClick={handlegetAppClosing}
    >
      <div className="h-[400px] w-[400px] bg-black p-7 rounded-3xl flex flex-col item-center justify-center gap-4">
        <h4 className="text-white text-3xl capitalize font-bold py-4">
          get the moonpay app
        </h4>
        <img src="https://www.moonpay.com/app-download-qr-code.svg" alt="" />
        <div className="text-[#cdbdaf] py-3 overflow-hidden text-center">
          scan the QR code to download the app
        </div>
      </div>
    </section>
  );
};
export default QrCode;

import { ClipLoader } from "react-spinners";

const Apploader=()=>{
return(
    <div className="text-appAqua w-[100%] h-[100%] flex  gap-3 items-center justify-center overflow-hidden">
        <ClipLoader  
        size={20}
        color="#00008b"
        aria-label="loading spinner"
        data-testid="loader"
        />
        <div className="slide font-mono">please wait...</div>
    </div>
)
}
export default Apploader;
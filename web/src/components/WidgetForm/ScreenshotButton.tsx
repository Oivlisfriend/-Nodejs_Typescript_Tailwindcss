import html2canvas from "html2canvas";
import { image } from "html2canvas/dist/types/css/types/image";
import { Camera, Trash } from "phosphor-react";
import { useState } from "react";
import { Loading } from "./Loading";
interface ScreenshotButtonProps {
    onScreenshotTook: (screenshot: string|null) => void;
    screenshot: string| null;
}
export function ScreenshotButton({onScreenshotTook,screenshot}:ScreenshotButtonProps){
    const[isTakingScreenshot, setIsTakingScreenshot]=useState(false);
    
    async function handleTakeScreenshot(){
        setIsTakingScreenshot(true);
        const canvas = await html2canvas(document.querySelector('html')!);
        const base64image = canvas.toDataURL('imagem/png'); 
        onScreenshotTook(base64image);
        setIsTakingScreenshot(false);
    }
    if(screenshot){
        return (<button className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transation-colors " style={{backgroundImage: `url(${screenshot})`, backgroundPosition:'right bottom' , backgroundSize:100}}>
            
            <Trash onClick={()=> onScreenshotTook(null)}weight="fill"/>
        </button>);
    }
    return( 
        <button type="button"onClick={handleTakeScreenshot} className="p-2 bg-zinc-800 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors">
        {isTakingScreenshot ? <Loading/>:<Camera className="w-6 h-6"/>}
        </button>
    )
}
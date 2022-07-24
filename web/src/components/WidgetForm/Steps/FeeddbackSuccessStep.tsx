import { CloseButton } from "../../CloseButton";
import successImage from "../../../assets/success.svg";
interface FeedbackSuccessStepProps{
    onFeedbackRestartRequested:() => void; 
}
export function FeedbackSuccessStep({onFeedbackRestartRequested}: FeedbackSuccessStepProps){
    return(
        <>
            <header>
                <CloseButton/>
            </header>
            <div className="flex flex-col items-center py-10 w-[304px]">
                    <img src={successImage} alt="Imagem de sucesso" />
            </div>
            <span className="text-xl mt-2">Agrecedemos o feedback! </span>

            <button onClick={onFeedbackRestartRequested} className="py-2 px-6 mt-6 my-6 bg-zinc-800 rounded-md border-transparent text-sm leading-6 hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500 ">
                Quero enviar outro
            </button>
        </>

    );
}
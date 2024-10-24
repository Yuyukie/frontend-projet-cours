import Image from "next/image"
import CookieImg from '@/assets/cookie1.png'

interface Props {
    totalCookies: number,
    cookiesPerSecond?: number
    onCookieClick: () => void
}

export const CookieZone = ({totalCookies, onCookieClick}:Props) => {

    return(
        <div className="h-full w-full bg-purple-700 flex flex-col items-center justify-center gap-10">
            <p className="text-3xl font-bold">Total cookies : {totalCookies}</p>
            <Image onClick={() => onCookieClick()} src={CookieImg} alt="Big Cookie" className="cursor-pointer h-60 w-60 hover:scale-110 ease-in-out duration-300" />
        </div>
    )
}
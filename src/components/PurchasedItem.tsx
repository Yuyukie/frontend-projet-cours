import { ShopItemType } from "@/app/page"

interface Props {
    item : ShopItemType
}


export const PurchasedItem = ({item}:Props) => {

    return(
        <div className="p-5 rounded-lg bg-white flex flex-col justify-center items-center max-h-80">
            <img src={item.image_url} className="rounded-full border h-40" />
            <p className="font-bold text-center">{item.label}</p>
            <p> total : {item.total}</p>
            <p> cps : {item.cps*item.total}/s</p>

        </div>
    )
}
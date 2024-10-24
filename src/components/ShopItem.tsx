import { ShopItemType } from "@/app/page"; // Changement de shopItemType à ShopItemType


interface Props {
    item: ShopItemType
    onClick: () => void; // Ajout de la propriété onClick
}

export const ShopItem = ({item, onClick}:Props) => {
    return(
        <div className=" flex w-full p-2 border rounded-lg">
            <img className="h-20" src={item.image_url} alt={item.label}/>
            <div>
                <h1>{item.label}</h1>
                <p>Cout : {item.price} cookies</p>
            </div>
        </div>
    )
}

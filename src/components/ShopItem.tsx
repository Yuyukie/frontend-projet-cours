import { ShopItemType } from "@/app/page"; // Changement de shopItemType à ShopItemType


interface Props {
    item: ShopItemType,
    totalCookies : number,
    onClick: () => void; // Ajout de la propriété onClick
}

export const ShopItem = ({item, onClick, totalCookies, ...props}:Props) => {

const checkClick = () => {
    if (totalCookies >= item.price) onClick()
}

    return (
        // Conteneur principal du composant `ShopItem` : un div avec flexbox et des bordures arrondies
        <div className="flex w-[90%] p-2 border rounded-lg bg-slate-100 hover:bg-slate-300 ease-in-out duration-300 m-2 cursor-pointer" {...props } onClick={checkClick}> 
            {/* Image de l'article, avec une hauteur fixe de 20 (80px) */}
            <img className="h-20" src={item.image_url} alt={item.label} />
            <div> {/* Conteneur pour le texte descriptif de l'article */}
                {/* Titre de l'article */}
                <h1>{item.label} - {item.total}</h1>
                {/* Affiche le coût de l'article en cookies */}
                <p>Cout : {item.price} cookies</p>
            </div>
        </div>
    );
};
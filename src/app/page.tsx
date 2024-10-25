"use client"; // Indique que ce composant doit être exécuté côté client

import { CookieZone } from "@/components/CookieZone"; // Importation du composant CookieZone pour afficher les cookies
import { useEffect, useState } from "react"; // Importation des hooks useMemo et useState de React
import { ShopItem } from "@/components/ShopItem"; // Importation du composant ShopItem pour afficher les articles de la boutique
import { PurchasedItem } from "@/components/PurchasedItem"; // Changement de 'PurchasedItem' à 'purchasedItem'
// Définition d'une interface TypeScript pour décrire la structure d'un article de la boutique
export interface ShopItemType {
  id: number,
  image_url: string; // URL de l'image de l'article
  label: string; // Nom de l'article
  price: number; // Prix de l'article
  cps: number; // Cookies par seconde générés par l'article
  total: number;
}

const defaultshopItems : ShopItemType[] =[
  { 
    id:1,
    label: "Mamy", // Nom de l'article
    image_url: "https://img.freepik.com/photos-gratuite/personnage-dessin-anime-3d_23-2151021890.jpg?t=st=1729697464~exp=1729701064~hmac=6f4d2a3e473ec863acb6c43e24f6bc3b9a3658a166b81dcc097425bf17ae3ea1&w=740", // URL de l'image
    price: 10, // Prix de l'article
    cps: 1, // Cookies générés par seconde
    total: 0
  },
    {
    id:2,
    label: "SuperMamy", // Nom de l'article
    image_url: "https://img.freepik.com/photos-gratuite/personnage-dessin-anime-3d_23-2151021890.jpg?t=st=1729697464~exp=1729701064~hmac=6f4d2a3e473ec863acb6c43e24f6bc3b9a3658a166b81dcc097425bf17ae3ea1&w=740", // URL de l'image
    price: 100, // Prix de l'article
    cps: 10, // Cookies générés par seconde
    total : 0,
  },
];

export default function Home() {
  // Déclaration de l'état pour le nombre de cookies, initialisé à 0
  const [cookies, setCookies] = useState(0);
  const [purchasedItems, setPurchasedItems] = useState(defaultshopItems)
  const [cookiesPerSecond, setCookiesPersecond] = useState(0)

  const handlePurchasedItem = (item : ShopItemType) => {

    setCookies(cookies - item.price)

    let actualItems = [...purchasedItems]
    const itemIndex = actualItems.findIndex(o => o.id == item.id)
    actualItems[itemIndex].total++

    setPurchasedItems([... actualItems])
    setCookiesPersecond(cookiesPerSecond + item.cps)
  }


  useEffect(() => {
    const interval = setInterval (() => {
        setCookies(cookies + cookiesPerSecond / 100)
      }, 10 )
      return() => {clearInterval(interval)}
  })
 
  return (
    <div className="h-screen w-screen flex"> {/* Conteneur principal avec une hauteur et largeur complètes */}
      <div className="left w-1/4"> {/* Section gauche avec une largeur de 25% et fond vert */}
        <CookieZone 
          totalCookies={cookies} // Passer le nombre total de cookies au composant CookieZone
          cps={cookiesPerSecond}
          onCookieClick={() => { setCookies(cookies + 1); }} // Fonction pour incrémenter les cookies au clic
        />
      </div>
      <div className="center flex-1 bg-red-500 grid grid-cols-4 gap-3 p-5">
        {purchasedItems.filter(item => item.total > 0).map(item => <PurchasedItem key={item.id} item={item} />)}
      </div>
      <div className="right w-1/4  flex flex-col gap-3"> {/* Section droite avec une largeur de 25% et fond jaune */}
        {purchasedItems.map(item => ( // Itération sur chaque article de la boutique
          <ShopItem 
            item={item} // Passer l'article actuel au composant ShopItem
            totalCookies={cookies}
            key={item.id}
            onClick={() => { handlePurchasedItem(item) }} // Fonction pour soustraire le prix des cookies lors de l'achat
          />
        ))}
      </div>
    </div>
  );
}

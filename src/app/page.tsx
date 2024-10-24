"use client";

import { CookieZone } from "@/components/CookieZone";
import { useMemo, useState } from "react";
import { ShopItem } from "@/components/ShopItem"

export interface ShopItemType {
  image_url: string,
  label: string,
  price: number,
  cps: number //Cookies per second
}


export default function Home() {

  const [cookies, setCookies] = useState(0)

  const shopItems = useMemo<ShopItemType[]>(() => {
    return [
      { label : "Mamy",
        image_url : "https://img.freepik.com/photos-gratuite/personnage-dessin-anime-3d_23-2151021890.jpg?t=st=1729697464~exp=1729701064~hmac=6f4d2a3e473ec863acb6c43e24f6bc3b9a3658a166b81dcc097425bf17ae3ea1&w=740", 
        price:10, cps:1},
      { label : "SuperMamy",
        image_url : "https://static.wikia.nocookie.net/studio-ghibli/images/d/d8/Zeniba.png/revision/latest?cb=20180917115708",
        price: 100, cps: 10},
    ]
  }, [cookies])

  return (
    <div className="h-screen w-screen flex">
      <div className="left w-1/4 bg-green-500">
        <CookieZone totalCookies={cookies} onCookieClick={() => { setCookies(cookies + 1) }} />
      </div>
      <div className="center flex-1 bg-red-500">
      </div>
      <div className="right w-1/4 bg-yellow-500">
      {shopItems.map(item =>
        <ShopItem item={item} onClick={() => {setCookies(cookies - item.price)}}/>
      )}
      </div>
    </div>
  );
}
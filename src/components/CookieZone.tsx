import Image from "next/image"; // Importation du composant `Image` de Next.js pour gérer les images de manière optimisée
import CookieImg from '@/assets/cookie1.png'; // Importation de l'image du cookie depuis le dossier d'actifs locaux

// Déclaration de l'interface TypeScript `Props` pour typer les propriétés que le composant va recevoir
interface Props {
    totalCookies: number; // Le nombre total de cookies, de type `number`
    onCookieClick: () => void; // Fonction déclenchée lors d'un clic sur le cookie
    cps : number;
}

// Définition du composant `CookieZone`, qui accepte les propriétés typées avec l'interface `Props`
export const CookieZone = ({ totalCookies, onCookieClick, cps = 0 }: Props) => {

    return (
        <div className="h-full w-full flex flex-col items-center justify-center gap-10">
            <p className="">{cps} Cookies par seconde</p>
            <p className="text-3xl font-bold">Total cookies : {totalCookies.toFixed(0)}</p>
            <Image 
                onClick={() => onCookieClick()} 
                src={CookieImg} 
                alt="Big Cookie" 
                className="cursor-pointer h-60 w-60 hover:scale-110 ease-in-out duration-300" 
                
            />
        </div>
    );
};
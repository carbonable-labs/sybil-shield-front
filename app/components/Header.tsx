import { AdjustmentsHorizontalIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { isMobile } from "react-device-detect";

function DisplayIcon({toggleMenu, menuOpen}: { toggleMenu: () => void, menuOpen: boolean}) {
    if (menuOpen) {
        return (
            <XMarkIcon 
            onClick={toggleMenu}
            className="w-8 hover:text-greenish-500 cursor-pointer" />
        );
    }
    return (
        <AdjustmentsHorizontalIcon 
                onClick={toggleMenu}
                className="w-8 hover:text-greenish-500 cursor-pointer" />
    );
}

export default function Header({ toggleMenu, menuOpen }: { toggleMenu: () => void, menuOpen: boolean}) {
  return (
    <header className="w-full uppercase font-press-start font-bold text-xl md:text-3xl px-2 py-2 inline-flex items-center justify-between lg:px-4 border-b border-b-neutral-700">
        <h1 className="ml-0 inline-flex items-center justify-start lg:justify-center">
            <img src="/assets/logo.png" className="w-12 mr-2 lg:w-16 " alt="Sybil Shield Logo" />
            Sybil Shield
        </h1>
        { isMobile && <DisplayIcon toggleMenu={toggleMenu} menuOpen={menuOpen} /> }
    </header>
  );
}
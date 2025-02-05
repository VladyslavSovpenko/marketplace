import {ShoppingCart, UserIcon} from "lucide-react";
import Link from "next/link";
import {APP_NAME} from "../../lib/constants";
import Image from "next/image";
import {Button} from "@/components/ui/button";
import ModeToggle from "./mode-toggle";
import Menu from "../sheet/Menu";


const Header: React.FC = () => {
    return (
        <header className="w-full border-b">
            <div className="wrapper flex-between">
                <div className="flex-start">
                    <Link href={"/"} className="flex-start">
                        <Image src='/logo.svg' alt={`${APP_NAME} logo`} width={48} height={48} priority={true}/>
                        <span className='hidden lg:block font-bold text-2xl ml-3'>{APP_NAME}</span>
                    </Link>
                </div>
                    <Menu/>
            </div>
        </header>
    );
}

export default Header;
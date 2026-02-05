import ModeToggle from "../header/mode-toggle";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {EllipsisVertical, ShoppingCart, ShoppingCartIcon, UserIcon} from "lucide-react";
import {Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger} from "@/components/ui/sheet";

const Menu = () => {
    return (
        <div className={"flex justify-end gap-3"}>

            <nav className={"hidden md:flex gap-1 w-full max-w-xs"}>
                <ModeToggle/>
                <Button asChild variant={"ghost"}>
                    <Link href={'/cart'}>
                        <ShoppingCart size={24}/> Cart
                    </Link>
                </Button>
                <Button asChild>
                    <Link href={'/sign-in'}>
                        <UserIcon size={24}/> Sign-in
                    </Link>
                </Button>
            </nav>

            <nav className={"md:hidden flex gap-1"}>
                <Sheet>
                    <SheetTrigger className={"align-middle"}>
                        <EllipsisVertical/>
                    </SheetTrigger>
                    <SheetContent className={"flex flex-col items-start"}>
                        <SheetTitle>
                            Menu
                        </SheetTitle>
                        <ModeToggle/>
                        <Button asChild variant={"ghost"}>
                            <Link href={'/cart'}><ShoppingCartIcon/></Link>
                        </Button>
                        <Button asChild>
                            <Link href={'/sign-in'}>
                                <UserIcon size={24}/> Sign-in
                            </Link>
                        </Button>
                        <SheetDescription>   This action cannot be undone. This will permanently delete your account
                            and remove your data from our servers.</SheetDescription>
                    </SheetContent>
                </Sheet>

            </nav>
        </div>
    );
}

export default Menu;
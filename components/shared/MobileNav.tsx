// built-in imports
import Image from "next/image";

// internal imports
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { NavItems } from ".";

const MobileNav = () => {
  return (
    <nav className=" md:hidden">
      <Sheet>
        <SheetTrigger className=" align-middle">
          <Image
            src="/assets/icons/menu.svg"
            alt="menu"
            width={24}
            height={24}
            className="cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent className="w-[400px] sm:w-[540px] bg-white flex flex-col gap-6 md:hidden">
          <Image
            src="/assets/images/logo.svg"
            alt="logo"
            width={128}
            height={38}
          />
          <Separator />
          <NavItems />
        </SheetContent>
      </Sheet>
    </nav>
  );
};
export default MobileNav;

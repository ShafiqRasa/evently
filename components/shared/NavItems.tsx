"use client";
// built-in imports
import Link from "next/link";
import { usePathname } from "next/navigation";

// internal imports
import { headerLinks } from "@/constants";

const NavItems = () => {
  const pathname = usePathname();

  return (
    <ul className="md:flex-between flex w-full flex-col items-start gap-5 md:flex-row">
      {headerLinks.map(({ label, route }, i) => (
        <li
          key={`key-${i}`}
          className={`${
            pathname === route && "text-primary-500"
          } flex-center p-medium-16 whitespace-nowrap `}
        >
          <Link href={route}>{label}</Link>
        </li>
      ))}
    </ul>
  );
};
export default NavItems;

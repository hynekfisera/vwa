import React from "react";
import Image from "next/image";
import Logo from "@/public/assets/arfiBlack.svg";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="px-12 lg:px-0 w-full max-w-screen-lg mx-auto flex justify-between items-center bg-transparent py-8">
        <Image src={Logo} alt="Arfi logo" className="h-9 w-auto opacity-80" />
        <Link href="https://arfi.cz/" className="btn btn-outline">
          Arfi.cz
        </Link>
      </div>
    </header>
  );
}

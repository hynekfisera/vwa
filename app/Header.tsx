import React from "react";
import Image from "next/image";
import Logo from "@/public/assets/arfiPink.svg";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="px-12 xl:px-0 w-full max-w-screen-xl mx-auto flex justify-between items-center bg-transparent py-8">
        <Image src={Logo} alt="Arfi logo" className="h-9 sm:h-10 w-auto" />
        <Link href="https://arfi.cz/" className="btn btn-outline">
          Arfi.cz
        </Link>
      </div>
    </header>
  );
}

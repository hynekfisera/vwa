/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="px-12 xl:px-0 mt-6 w-full max-w-screen-sm mx-auto flex flex-col items-center gap-2 bg-transparent py-8">
        <div className="text-center text-gray-700 font-medium text-xs">
          &copy; {new Date().getFullYear()}{" "}
          <a href="https://hynekfisera.cz/" target="_blank" rel="noreferrer noopener" className="underline">
            Hynek Fišera
          </a>
        </div>
      </div>
    </footer>
  );
}

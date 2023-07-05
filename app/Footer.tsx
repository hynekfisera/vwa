/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="px-12 xl:px-0 mt-6 w-full max-w-screen-sm mx-auto flex flex-col items-center gap-2 bg-transparent py-8">
        <a href="https://www.buymeacoffee.com/hynekfisera" target="_blank" rel="noreferrer noopener" className="h-8">
          <img className="h-full w-auto" src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=hynekfisera&button_colour=f472b6&font_colour=f1f5f9&font_family=Inter&outline_colour=000000&coffee_colour=f1f5f9" alt="Buy Me a Coffee" />
        </a>
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

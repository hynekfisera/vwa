import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="px-12 xl:px-0 w-full max-w-screen-xl mx-auto flex justify-center items-center bg-transparent py-8">
        <p className="pt-6 text-center text-gray-500">
          &copy; {new Date().getFullYear()} Hynek Fišera | Vytvořeno pomocí{" "}
          <a href="https://nextjs.org/" target="_blank" rel="noreferrer noopener">
            Next.js
          </a>
        </p>
      </div>
    </footer>
  );
}

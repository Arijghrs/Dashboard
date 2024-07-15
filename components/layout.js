import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/router";
import menuItems from "./sidebarData";
import CustomButton from "./customButton";

export default function Layout({ children }) {
  const router = useRouter();
  const [isSelected, setIsSelected] = useState(false);
  const toggle = () => {
    setIsSelected(!isSelected);
  };

  return (
    <div className="w-72  h-[1024px]  bg-white flex flex-col">
      <div className='flex flex-col md:flex-row flex-1'>
      <aside className="bg-white w-full ">
        <div className="logo flex justify-center my-6 ml-6">
          <Image
            src="/assets/Logo1.png"
            alt="logo"
            width={125}
            height={38}
            className="object-contain ml-1"
          />
        </div>
        <nav>
          <ul>
            {menuItems.map(({ href, title, icon }) => (
              <li className="m-2" key={title}>
                <Link href={href} onClick={toggle}>
                  <a
                    className={`hoverEffect flex w-44 text-gray-500 mr-8 ml-4 mb-6 py-2   ${
                      router.asPath === href &&
                      "font-semibold bg-gray-50 border-b-2 border-purple-400 text-gray-700 transition duration-500 "
                    }text-lg`}
                  >
                    <img src={icon} className="h-6 mr-4 pl-4" />
                    {title}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
          <CustomButton text="Log out" color="bg-red-400" />
        </nav>
      </aside>
      
      <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}

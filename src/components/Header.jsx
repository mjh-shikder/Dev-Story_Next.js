"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Header = () => {

  const pathname = usePathname();
  console.log(pathname);
  
if(pathname.startsWith('/dashboard')) return <></>
    return (
      <div>
        <header className="px-4 py-3 border-b-2 border-gray-500 flex justify-between items-center flex-wrap ">
          <Link href={"/"} className="text-lg font-semibold  ">
            {" "}
            ☺️ Dev-Story
          </Link>
          <nav className="space-x-3.5">
            <Link href="/about">About</Link>
            <Link href="/stories">Storys</Link>
            <Link href="/about/teams">teams</Link>
            <Link href="/login">Login</Link>
            <Link href="/register">Register</Link>
            <Link href="/tutorials">Tutorials</Link>
          </nav>
        </header>
      </div>
    );
};

export default Header;
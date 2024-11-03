import Link from "next/link";
import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="bg-white p-5 top-0 left-0 fixed w-[100vw]">
      <div className="flex justify-between">
        <div>
            <Image
            className="dark"
            src="/next.svg"
            alt="Next.js logo"
            width={80}
            height={38}
            priority
            />
        </div>
        <div className="flex flex-row space-x-4 text-black">
            <div><Link href="/dashboard">Dashboard</Link></div>
            <div><Link href="/login">Login</Link></div>
            <div><Link href="/register">Register</Link></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

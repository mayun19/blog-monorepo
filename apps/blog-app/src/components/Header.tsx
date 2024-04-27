import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="border-b">
      <div className="container md:mx-auto pl-4 lg:p-0 flex justify-between">
        <Link href="/">
          <div className="text-4xl px-2 py-4">Blog</div>
        </Link>
        <Link href="/users">
          <div className="text-white h-full text-xl bg-black p-4">Users</div>
        </Link>
      </div>
    </div>
  );
};

export default Header;

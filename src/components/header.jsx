import Link from "next/link";
import React from "react";

function Header() {
  return (
    <div className="bg-red-100 flex py-3 justify-center items-center gap-10">
      <Link href={"/courses"}>Courses</Link>
      <Link href={"/about"}>About</Link>
    </div>
  );
}

export default Header;

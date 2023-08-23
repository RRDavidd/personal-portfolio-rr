import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li className="group w-full md:w-1/2 mb-4">
          <Link
            className="group-hover:text-lime-300 transition-all duration-300 flex items-center"
            href="/#experience"
          >
            <hr className="w-8 inline-block mr-3 border-secondary group-hover:w-20 group-hover:border-emerald-600 transition-all duration-300" />
            <p className="inline-block">Experience</p>
          </Link>
        </li>
        <li className="group w-full md:w-1/2 mb-4">
          <Link
            className="group-hover:text-lime-300 transition-all duration-300 flex items-center"
            href="/#education"
          >
            <hr className="w-8 inline-block mr-3 border-secondary group-hover:w-20 group-hover:border-emerald-600 transition-all duration-300" />
            <p className="inline-block">Education</p>
          </Link>
        </li>
        <li className="group w-full md:w-1/2 mb-4">
          <Link
            className="group-hover:text-lime-300 transition-all duration-300 flex items-center"
            href="/#projects"
          >
            <hr className="w-8 inline-block mr-3 border-secondary group-hover:w-20 group-hover:border-emerald-600 transition-all duration-300" />
            <p className="inline-block">Projects</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

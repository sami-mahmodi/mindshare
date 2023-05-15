"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

function Nav() {
  const isLoggedIn = true;
  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link className="flex gap-2 flex-center" href="/">
        <Image
          src="./assets/images/logo.svg"
          width={40}
          height={40}
          alt="logo"
        />
        <p className="logo_text">MINDSHARE</p>
      </Link>
      <div className="sm:flex hidden">
        {isLoggedIn ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="./crete-prompt" className="black_btn ">
              Create Post
            </Link>
            <button type="button" onClick={signOut} className="outline_btn">
              Sign Out
            </button>
            <Link href="/profile">
              <Image
                src="./assets/images/profile.svg"
                width={40}
                height={40}
                alt="logo"
              />
            </Link>
          </div>
        ) : (
          <></>
        )}
      </div>
    </nav>
  );
}

export default Nav;

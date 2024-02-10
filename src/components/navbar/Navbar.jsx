"use client";

import Link from "next/link";
import React, { useState } from "react";
import styles from "./page.module.css";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import { signOut, useSession } from "next-auth/react";
import { GiHamburgerMenu } from "react-icons/gi";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];

const Navbar = () => {
  const session = useSession();
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          {" "}
          BLOGHERO{" "}
        </Link>

        <div className={styles.links}>
          <DarkModeToggle />
          <button
            onClick={() => setToggle((prev) => !prev)}
            className={styles.hamburger}
          >
            <GiHamburgerMenu />
          </button>
          <div className={styles.mobileLinkContainer}>
            {toggle && (
              <>
                <button className={styles.close} onClick={()=>setToggle(false)}>X</button>
                {links.map((link) => (
                  <Link onClick={()=>setToggle(false)}
                    key={link.id}
                    href={link.url}
                    className={styles.mobileLink}
                  >
                    {link.title}{" "}
                  </Link>
                ))}
              </>
            )}
          </div>
          {links.map((link) => (
            <Link key={link.id} href={link.url} className={styles.link}>
              {link.title}{" "}
            </Link>
          ))}
          {session.status === "authenticated" && (
            <button className={styles.logout} onClick={signOut}>
              Logout
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;

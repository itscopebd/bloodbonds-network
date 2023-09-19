"use client";

import Link from "next/link";
import React, { useContext } from "react";
import "./Navbar.css";
import Image from "next/image";
import logo from "../../app/asset/Blood (2).png";
import { AuthContext } from "@/context/authContext";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const { replace } = useRouter();
  const NavItems = (
    <>
      <li className="text-white font-semibold">
        <Link href="/">Home</Link>
      </li>
      <li className="text-white font-semibold">
        <Link href="/about">About</Link>
      </li>
      <li className="text-white font-semibold">
        <Link href="/donorlist">Donors</Link>
      </li>
     {
      user && (
      <li className="text-white font-semibold">
      <Link href="/plasma">Plasma</Link>
    </li>
      )
     } 
      <li className="text-white font-semibold">
        <Link href="/emergency">Emergency</Link>
      </li>
      <li className="text-white font-semibold">
        <Link href="/contact">Contact Us</Link>
      </li>

      
{/* <ActiveLink className="font-semibold" href="/">Home</ActiveLink>
<ActiveLink href="/about">About</ActiveLink>
<ActiveLink href="/donorlist">Donors</ActiveLink>
<ActiveLink href="/contact">Contact Us</ActiveLink>  */}

      {/* when user registration then show dashboard  */}
      {user && (
        <li className="text-white font-semibold">
          <Link href="/dashboard">Dashboard</Link>
        </li>
      )}

      {/* {user && <ActiveLink href="/dashboard">Dashboard</ActiveLink>} */}
    </>
  );

  // handle user logout

  const handleLogout = async () => {
  try {
    await logout();
    const res= await fetch("/api/auth/logout",{
      method:"POST"
    })
    const data = await res.json();

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your Logout Success!",
      showConfirmButton: false,
      timer: 1500,
    });

    replace("/")

  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Your Logout Not Success!",
    });
  }

  };

  return (
    <div className="bg-black lg:px-5 fixed z-10 head bg-opacity-10   ">
      <div className="container mx-auto">
        <div className="navbar w-auto ">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box w-52"
              >
                {NavItems}
              </ul>
            </div>
            {/* Logo and Name */}
            <Image
              className="logo"
              src={logo}
              width={40}
              height={20}
              alt="logo"
            />
            <a className="normal-case text-xl font-bold text-white">
              BloodBond Network
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{NavItems}</ul>
          </div>
          <div className="navbar-end">
            <button className="btn ">
              {user && user ? (
                <span onClick={handleLogout}>Logout</span>
              ) : (
                <Link href={"/login"}>Login</Link>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;

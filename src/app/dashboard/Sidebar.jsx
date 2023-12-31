"use client";

import { UserAuth } from "@/context/authContext";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  FaBlog,
  FaDonate,
  FaHistory,
  FaInfoCircle,
  FaPen,
  FaSignOutAlt,
  FaUser,
  FaUserCheck,
  FaWpforms,
} from "react-icons/fa";
import { FaChartBar, FaHouse, FaTimeline } from "react-icons/fa6";

const Sidebar = () => {
  const { user, loading } = UserAuth();
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchUser = async () => {
      await fetch(`/api/user/${user?.email}`)
        .then((res) => res.json())
        .then((data) => {
          setData(data);
        });
    };
    fetchUser();
  }, []);
  if (loading) {
    return (
      <div className="absolute top-1/2 left-1/2">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }
  const role = data[0]?.role;

  return (
    <aside className="  h-screen  bg-[#000000] text-white dark:text-white ">
      <h1 className="font-extrabold p-10 text-center text-2xl uppercase">
        Dahsboard
      </h1>

      <div>
        <ul className="  menu menu-vertical lg:min-w-max  rounded-box uppercase">
          <li>
            <Link href={"/dashboard"}>
              {" "}
              <FaHouse /> Dashboard Home
            </Link>
          </li>

          {role && role === "admin" ? (
            <>
              <li>
                <Link href={"/dashboard/admin"}>
                  {" "}
                  <FaChartBar /> Anylisis
                </Link>
              </li>

              <li>
                <Link href={"/dashboard/admin/alladmin"}>
                  {" "}
                  <FaUser /> All Admin
                </Link>
              </li>
              <li>
                <Link href={"/dashboard/admin/alluser"}>
                  {" "}
                  <FaUser /> All user
                </Link>
              </li>

              <li>
                <Link href={"/dashboard/admin"}>
                  <FaTimeline /> All event
                </Link>
              </li>
              <li>
                <Link href={"/dashboard/admin/allblog"}>
                  <FaBlog /> All Blog
                </Link>
              </li>
              <li>
                <Link href={"/dashboard/admin/addblog"}>
                  <FaPen /> Add Blog
                </Link>
              </li>
              <li>
                <Link href={"/dashboard/admin/alldonor"}>
                  <FaDonate /> All Donor
                </Link>
              </li>
              <li>
                <Link href={"/dashboard/admin/applieddonor"}>
                  <FaDonate /> Applied Donor
                </Link>
              </li>
            </>
          ) : role === "donor" ? (
            <>
              <li>
                <Link href={"/dashboard/donor"}>
                  {" "}
                  <FaHouse />  Donar Home
                </Link>
              </li>
              <li>
                <Link href={"/dashboard/donor/donorhistory"}>
                  {" "}
                  <FaHistory /> Track Donation{" "}
                </Link>
              </li>
              <li>
                <Link href={"/dashboard/donor/countdown"}>
                  {" "}
                  <FaInfoCircle /> Blood countdown
                </Link>
              </li>
            </>
          ) : role === "user" ? (
            <>
            
              <li>
                <Link href={"/dashboard/user"}>
                  {" "}
                  <FaUserCheck /> User Info
                </Link>
              </li>
              <li>
                <Link href={"/dashboard/user/applydonor"}>
                  {" "}
                  <FaWpforms />
                  Apply Donor
                </Link>
              </li>
              <li>
                <Link href={"/dashboard/user/userhistory"}>
                  {" "}
                  <FaHistory />
                  Activity log
                </Link>
              </li>
            </>
          ) : (
            <div className="absolute top-1/2 left-1/2">
              <span className="loading loading-bars loading-lg"></span>
            </div>
          )}

          <div className="divider "></div>
          <li className="pb-5 ">
            <Link href={"/"}>
              {" "}
              <FaSignOutAlt /> Go to Home
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;

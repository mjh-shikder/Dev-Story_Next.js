import Link from "next/link";
import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <div className=" grid grid-cols-12 gap-5 min-h-screen ">
      <div className="col-span-3 border-r-2 flex flex-col gap-5">
        <Link href={"/"} className="text-lg font-semibold  ">
          {" "}
          ☺️ Dev-Story
        </Link>
        <Link
          className="py-2 px-4 rounded-l-lg bg-gray-400  "
          href={"/dashboard/add-story"}
        >
          Add Story
        </Link>
        <Link
          className="py-2 px-4 rounded-l-lg bg-gray-400  "
          href={"/dashboard/profile"}
        >
          My Profile
        </Link>
        <Link
          className="py-2 px-4 rounded-l-lg bg-gray-400  "
          href={"/dashboard/settings"}
        >
          Settings
        </Link>
      </div>
      <div className="col-span-9">{children}</div>
    </div>
  );
};

export default DashboardLayout;

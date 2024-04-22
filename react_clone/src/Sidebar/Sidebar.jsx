import React from "react";
import { MdDashboard } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { FaBookmark } from "react-icons/fa";
import { MdOutlineVideoLibrary } from "react-icons/md";

import "./Sidebar.css";
const Sidebar = () => {
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark height-sidebar width-sidebar">
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="p-2 sidebar-hover active-bar">
          <a href="#" className="nav-link text-white" aria-current="page">
            <p className="mx-2">Dashboard</p>
            <MdDashboard size={25} color="white" />
          </a>
        </li>
        <li className="p-2 sidebar-hover">
          <a href="#" className="nav-link text-white">
            <p className="mx-2">Calender</p>
            <SlCalender size={25} color="white" />
          </a>
        </li>
        <li className="p-2 sidebar-hover">
          <a href="#" className="nav-link text-white">
            <p className="mx-2">Courses</p>
            <FaBookmark size={25} color="white" />
          </a>
        </li>
        <li className="p-2 sidebar-hover">
          <a href="#" className="nav-link text-white">
            <p className="mx-2">Videos</p>
            <MdOutlineVideoLibrary size={28} color="white" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

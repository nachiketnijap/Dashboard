import React from "react";
import { CiSearch } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { IoIosNotifications } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { AiOutlineLogout } from "react-icons/ai";
import { RiPresentationLine } from "react-icons/ri";

const Navbar = () => {
  return (
    <nav className="navbar bg-dark sticky">
      <div className="container-fluid">
        <a className="navbar-brand p-2 mx-4 logo on-hover-nav">
          <RiPresentationLine size={50} color="white" />
        </a>
        <div className="d-flex text-center" role="search">
          <div className="on-hover-nav background-div">
            <a className="nav-link active p-2" aria-current="page" href="#">
              <CiSearch size={25} color="white" />
              <p className="text-light">search</p>
            </a>
          </div>
          <div className="mx-2 on-hover-nav background-div">
            <a className="nav-link active p-2" aria-current="page" href="#">
              <CiMail size={25} color="white" />
              <p className="text-light">My communications</p>
            </a>
          </div>
          <div className="mx-2 on-hover-nav background-div">
            <a className="nav-link active p-2" aria-current="page" href="#">
              <IoIosNotifications size={25} color="white" />
              <p className="text-light">Annoucements</p>
            </a>
          </div>
          <div className="mx-2 on-hover-nav background-div">
            <a className="nav-link active p-2" aria-current="page" href="#">
              <CgProfile size={25} color="white" />
              <p className="text-light">My Profile</p>
            </a>
          </div>
          <div className="mx-2 on-hover-nav background-div">
            <a className="nav-link active p-2" aria-current="page" href="#">
              <AiOutlineLogout size={25} color="white" />
              <p className="text-light">Logout</p>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

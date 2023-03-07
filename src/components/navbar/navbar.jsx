import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <NavLink to={"/allusers"}>All Users</NavLink>
      <br />
      <NavLink to={"/allproduct"}>All Products</NavLink>
      <br />
      <NavLink to={"/postproduct"}>post Product</NavLink>
      <br />
      <NavLink to={"/editproduct"}>edit Product</NavLink>
      <br />
      <NavLink to={"/deleteproduct"}>delelte product</NavLink>
      <br />
      <NavLink to={"/productcateg"}> product categ id</NavLink>
    </div>
  );
}

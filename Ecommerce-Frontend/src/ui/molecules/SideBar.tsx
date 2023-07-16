// import React from "react";
import { AiFillBook, AiFillHome, AiOutlineLogout } from "react-icons/ai";

export const SideBarData = [
  {
    label: "Dashboard",
    icon: <AiFillHome />,
    link: "/dashboard/home",
  },
  {
    label: "Products",
    link: "/dashboard/Products",
  },
  {
    label: "Product Details",
    icon: <AiFillBook />,
    link: "/dashboard/ProductDetails",
  },
  {
    label: "Logout",
    icon: <AiOutlineLogout />,
    link: "/login",
  },
];

export const Sidebar = () => {
  return (
    <div className="sidebar">
      {SideBarData.map((item, index) => (
        <div key={index} className="sidebar-item">
          {item.icon && item.icon}
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  );
};

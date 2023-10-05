'use client'
import React, { useState } from "react";
import "./navBar.scss";
//Importación de iconografia
import { BsFillHouseDoorFill } from "react-icons/bs";
import { BsFillChatHeartFill } from "react-icons/bs";
import { BsFillCalendarCheckFill } from "react-icons/bs";
import { GoSearch } from "react-icons/go";
import { FaUser } from "react-icons/fa";
import { useRouter, usePathname, useParams } from "next/navigation";

const NavBar = () => {
  const menu = [
    {
      id: 0,
      icon: <BsFillHouseDoorFill className="iconFooter iconhome" />,
      option: "Inicio",
      path: "/home/events",
    },
    {
      id: 1,
      icon: <BsFillChatHeartFill className="iconFooter" />,
      option: "Favoritos",
      path: "/home/favorites",
    },
    {
      id: 2,
      icon: <BsFillCalendarCheckFill className="iconFooter" />,
      option: "Reservas",
      path: "/home/reservation",
    },
    {
      id: 3,
      icon: <FaUser className="iconFooter" />,
      option: "Perfil",
      path: "/home/profile",
    },
  ];
  const router = useRouter()
  const actionMenu = (item) => {
    router.push(item.path);
  };
const pathName = usePathname()
  return (
    <section className="secFoot">
      <footer className="secFooter">
        {menu.map((item) => (
          <figure
            key={item.id}
            onClick={() => {
              actionMenu(item);
            }}
            className={item.path === pathName ? "iconActive" : ""}
          >
            {item.icon}
            <span>{item.option}</span>
          </figure>
        ))}
      </footer>
    </section>
  );
};



export default NavBar
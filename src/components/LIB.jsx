import React, { useEffect, useState } from "react";
import {
  FaArrowRight,
  FaHeart,
  FaTshirt,
  FaCrown,
  FaLeaf,
  FaGift,
  FaFire,
} from "react-icons/fa";
import OFC1 from "../assets/OFC1.jpg";
import OFC2 from "../assets/OFC2.jpg";
import OFC3 from "../assets/OFC3.jpg";
import OFC4 from "../assets/OFC4.jpg";
import OFC5 from "../assets/OFC5.jpg";
import OFC6 from "../assets/OFC6.jpg";
import "../components/theme.css";

const collections = [
  {
    title: "Romantic Knitwear Series",
    image: OFC1,
    icon: <FaTshirt className="text-pink-400 text-xl" />,
  },
  {
    title: "Elegant Date Outfits",
    image: OFC2,
    icon: <FaHeart className="text-red-500 text-xl" />,
  },
  {
    title: "Royal Valentine Edition",
    image: OFC3,
    icon: <FaCrown className="text-yellow-400 text-xl" />,
  },
  {
    title: "Floral Love Collection",
    image: OFC4,
    icon: <FaLeaf className="text-green-400 text-xl" />,
  },
  {
    title: "Sweetheart Dresses",
    image: OFC5,
    icon: <FaGift className="text-pink-500 text-xl" />,
  },
  {
    title: "Hot Picks for Lovers",
    image: OFC6,
    icon: <FaFire className="text-red-500 text-xl" />,
  },
];

import React from "react";

import SC1 from "../assets/SC1.jpg";
import SC2 from "../assets/SC2.jpg";
import SC3 from "../assets/SC3.jpg";
import SC4 from "../assets/SC4.jpg";
import SC5 from "../assets/SC5.jpg";
import SC6 from "../assets/SC6.jpg";

const seasonData = [
  { title: "SPRING", images: [SC1] },
  { title: "SUMMER", images: [SC2] },
  { title: "WINTER", images: [SC3] },
  { title: "AUTUMN", images: [SC4] },
  { title: "RAINY", images: [SC5] },
  { title: "MONSOON", images: [SC6] },
];

const getSeasonIcon = (season) => {
  switch (season) {
    case "SPRING":
      return <FaSeedling className="text-green-500 text-3xl" />;
    case "SUMMER":
      return <FaSun className="text-yellow-500 text-3xl" />;
    case "WINTER":
      return <FaSnowflake className="text-blue-500 text-3xl" />;
    case "AUTUMN":
      return <FaLeaf className="text-orange-500 text-3xl" />;
    case "RAINY":
      return <FaCloudRain className="text-blue-500 text-3xl" />;
    case "MONSOON":
      return <FaCloud className="text-gray-500 text-3xl" />;
    default:
      return null;
  }
};

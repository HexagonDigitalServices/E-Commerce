import React from "react";

import OP1 from "../assets/OP1.png";
import OP2 from "../assets/OP2.png";
import OP3 from "../assets/OP3.png";
import B1 from "../assets/B1.jpg";
import B2 from "../assets/B2.jpg";
import B3 from "../assets/B3.jpg";
import D1 from "../assets/D1.jpg";
import D2 from "../assets/D2.jpg";
import D3 from "../assets/D3.jpg";
import S1 from "../assets/S1.jpg";
import S2 from "../assets/S2.jpg";
import S3 from "../assets/S3.jpg";
import K1 from "../assets/K1.jpg";
import K2 from "../assets/K2.jpg";
import K3 from "../assets/K3.jpg";
import O1 from "../assets/O1.jpg";
import O2 from "../assets/O2.jpg";
import O3 from "../assets/O3.jpg";

import "../components/theme.css";

const categories = ["Top", "Bottom", "Dress", "Set", "Knit", "Outer"];
const products = {
  Top: [
    { name: "V-Neck Yellow Blouse", price: "Rs 129.000", img: OP1 },
    { name: "Puff Sleeve Crop Top", price: "Rs 139.000", img: OP2 },
    { name: "Striped Boatneck Tee", price: "Rs 130.000", img: OP3 },
  ],
  Bottom: [
    { name: "Brown Corduroy Pants", price: "Rs 250.000", img: B1 },
    { name: "Classic Blue Jeans", price: "Rs 200.000", img: B2 },
    { name: "Black Slim Fit Jeans", price: "Rs 250.000", img: B3 },
  ],
  Dress: [
    { name: "Floral Sundress", price: "Rs 300.000", img: D1 },
    { name: "Off-Shoulder Maxi Dress", price: "Rs 350.000", img: D2 },
    { name: "Polka Dot Midi Dress", price: "Rs 300.000", img: D3 },
  ],
  Set: [
    { name: "Casual Two-Piece Set", price: "Rs 400.000", img: S1 },
    { name: "Formal Office Set", price: "Rs 500.000", img: S2 },
    { name: "Athleisure Lounge Set", price: "Rs 400.000", img: S3 },
  ],
  Knit: [
    { name: "Crewneck Knit Sweater", price: "Rs 180.000", img: K1 },
    { name: "Oversized Cardigan", price: "Rs 220.000", img: K2 },
    { name: "Turtleneck Wool Sweater", price: "Rs 180.000", img: K3 },
  ],
  Outer: [
    { name: "Beige Trench Coat", price: "Rs 600.000", img: O1 },
    { name: "Quilted Puffer Jacket", price: "Rs 700.000", img: O2 },
    { name: "Double-Breasted Wool Coat", price: "Rs 600.000", img: O3 },
  ],
};


export default OP;

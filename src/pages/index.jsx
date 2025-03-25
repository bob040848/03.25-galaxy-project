import React from "react";
import { Sun } from "@/components/Sun";
import { Mercury } from "@/components/Mercury";
import { Venus } from "@/components/Venus";
import { Earth } from "@/components/Earth";
import { Mars } from "@/components/Mars";
import { Jupiter } from "@/components/Jupiter";
import { Saturn } from "@/components/Saturn";
import { Uranus } from "@/components/Uranus";
import { Neptune } from "@/components/Neptune";
const Main = () => {
  return (
    <div className="solar-system">
      <img
        src="/images/galaxy.webp"
        alt=""
        style={{ width: "100vw", height: "100vh" }}
      />
      <Sun />
      <Mercury />
      <Venus />
      <Earth />
      <Mars />
      <Jupiter />
      <Saturn />
      <Uranus />
      <Neptune />
    </div>
  );
};

export default Main;

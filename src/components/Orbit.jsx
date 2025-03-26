import React from "react";

export const Orbit = ({
  orbit,
  planetSize,
  orbitPeriod,
  rotationPeriod,
  imageUrl,
}) => {
  console.log(orbit, planetSize, orbitPeriod, rotationPeriod, imageUrl);
  return (
    <div
      className="planet"
      style={{ "--orbit": orbit, "--orbit-period": orbitPeriod }}
    >
      <img
        className="orbit"
        src={imageUrl}
        alt=""
        style={{ "--planet": planetSize, "--rotation-period": rotationPeriod }}
      />
    </div>
  );
};

import React from "react";

export const Uranus = () => {
  return (
    <div>
      <div
        className="planet"
        style={{ "--orbit": "750px", "--orbit-period": "840s" }}
      >
        <img
          className="orbit"
          src="/images/uranus.png"
          alt=""
          style={{ "--planet": "35px", "--rotation-period": "0.717s" }}
        />
      </div>
    </div>
  );
};

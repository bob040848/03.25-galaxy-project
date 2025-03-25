import React from "react";

export const Jupiter = () => {
  return (
    <div>
      <div
        className="planet"
        style={{ "--orbit": "550px", "--orbit-period": "118.6s" }}
      >
        <img
          className="orbit"
          src="/images/jupiter.png"
          alt=""
          style={{ "--planet": "45px", "--rotation-period": "0.41s" }}
        />
      </div>
    </div>
  );
};

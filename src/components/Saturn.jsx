import React from "react";

export const Saturn = () => {
  return (
    <div>
      <div
        className="planet"
        style={{ "--orbit": "650px", "--orbit-period": "294.6s" }}
      >
        <img
          className="orbit"
          src="/images/saturn.png"
          alt=""
          style={{ "--planet": "40px", "--rotation-period": "0.445s" }}
        />
      </div>
    </div>
  );
};

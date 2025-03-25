import React from "react";

export const Mars = () => {
  return (
    <div>
      <div
        className="planet"
        style={{ "--orbit": "400px", "--orbit-period": "68.7s" }}
      >
        <img
          className="orbit"
          src="/images/mars.png"
          alt=""
          style={{ "--planet": "17px", "--rotation-period": "1.025s" }}
        />
      </div>
    </div>
  );
};

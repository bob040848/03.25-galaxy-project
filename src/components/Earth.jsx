import React from "react";

export const Earth = () => {
  return (
    <div>
      <div
        className="planet"
        style={{ "--orbit": "300px", "--orbit-period": "36.5s" }}
      >
        <img
          className="orbit"
          src="/images/earth.png"
          alt=""
          style={{ "--planet": "23px", "--rotation-period": "1s" }}
        />
      </div>
    </div>
  );
};

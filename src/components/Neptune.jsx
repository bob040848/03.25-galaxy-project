import React from "react";

export const Neptune = () => {
  return (
    <div>
      <div
        className="planet"
        style={{ "--orbit": "830px", "--orbit-period": "1652s" }}
      >
        <img
          className="orbit"
          src="/images/neptune.png"
          alt=""
          style={{ "--planet": "33px", "--rotation-period": "0.685s" }}
        />
      </div>
    </div>
  );
};

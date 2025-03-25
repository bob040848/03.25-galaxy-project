import React from "react";

export const Mercury = () => {
  return (
    <div>
      <div
        className="planet"
        style={{ "--orbit": "150px", "--orbit-period": "8.8s" }}
      >
        <img
          className="orbit"
          src="/images/mercury.png"
          alt=""
          style={{ "--planet": "15px", "--rotation-period": "5.86s" }}
        />
      </div>
    </div>
  );
};

import React from "react";

export const Venus = () => {
  return (
    <div>
      <div
        className="planet"
        style={{ "--orbit": "200px", "--orbit-period": "22.5s" }}
      >
        <img
          className="orbit"
          src="/images/venus.png"
          alt=""
          style={{ "--planet": "20px", "--rotation-period": "24.3s" }}
        />
      </div>
    </div>
  );
};

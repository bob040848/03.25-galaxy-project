import React from "react";

export const Sun = () => {
  return (
    <div>
      <img
        src="/images/sun.png"
        alt=""
        style={{
          width: "100px",
          height: "100px",
          top: "50%",
          left: "50%",
          position: "absolute",
          transform: "translate(-50%, -50%)",
        }}
      />
    </div>
  );
};

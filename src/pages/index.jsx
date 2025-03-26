import { Orbit } from "@/components/Orbit";
import { planets } from "@/components/planets";

const Galaxy = () => {
  return (
    <div>
      <img
        src="/images/galaxy.webp"
        alt=""
        style={{ width: "100vw", height: "100vh" }}
      />

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

      {planets.map((orbitVals, index) => {
        return <Orbit key={index} {...orbitVals} />;
      })}
    </div>
  );
};

export default Galaxy;

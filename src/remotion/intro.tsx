import {
  spring,
  useCurrentFrame,
  useVideoConfig
} from "remotion";
import Bubbles from "./bubbles";

const Intro = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const opacity = spring({
    frame,
    fps,
    config: {
      stiffness: 100
    }
  });

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        background: "rgb(248, 220, 61)"
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          opacity: opacity
        }}
      >
        <img
          alt="Beer.js Logo"
          src="https://beerjs.mk/social/beerjs.svg"
          style={{
            height: "200px",
            width: "200px"
          }}
        />
      </div>
      <Bubbles />
    </div>
  );
};

export default Intro;

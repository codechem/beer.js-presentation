import { spring, interpolate, random, useCurrentFrame, useVideoConfig } from "remotion";

const Bubbles = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const bubbles = new Array(20).fill(true).map((_, i) => {
    const x = random("x" + i) * 100 + "%";
    const delay = random("delay" + i) * 60;
    const size = random("size" + i) * 0.5;

    return {
      x,
      delay,
      size
    };
  });


  return (
    <>
      {bubbles.map(({ delay, x, size }) => {
        const appear = spring({
          frame: frame - delay,
          fps,
          durationInFrames: 120,
          config: {
            damping: 1000
          }
        });

        const itemPosition = interpolate(appear, [0, 1], [-0.2, 1.1]);

        return (
          <div
            key={x}
            style={{
              position: "absolute",
              background: "#EDE9E8",
              borderColor: "beige",
              height: "50px",
              width: "50px",
              borderRadius: "100%",
              left: x,
              bottom: itemPosition * 100 + "%",
              transform: `scale(${size})`
            }}
          />
        )
      })}
    </>
  );
};

export default Bubbles;
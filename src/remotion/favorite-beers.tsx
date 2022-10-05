import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

const FavoriteBeers = ({ name, image, index }: {
  name: string; image: string; index: number;
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const appear = spring({
    frame,
    fps,
    durationInFrames: 120,
    config: {
      damping: 1000
    }
  });

  const itemPosition = interpolate(appear, [0, 1], [0, 1]);
  const direction = index % 2 === 0 ? "-5000px" : "5000px";
  const isItemVisible = itemPosition < 0.5;

  return (
    <div
      style={{
        width: "100%",
        background: "#f8dc3d",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          transform: isItemVisible
            ? `translate(${direction}, 0px)`
            : "translate(0px, 0px)",
          transition: "transform 1000ms ease-in-out",
        }}
      >
        <img
          style={{
            width: "150px",
            height: "150px",
            borderRadius: "20px"
          }}
          src={image}
        />
        <h1
          style={{
            color: "white"
          }}
        >
          {name} - Beer #{index}
        </h1>
      </div>
    </div>
  );
}

export default FavoriteBeers;
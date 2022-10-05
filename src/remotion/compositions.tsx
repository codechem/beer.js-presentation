import { Composition } from "remotion";
import Intro from "./intro";

const Compositions = () => {
  return (
    <Composition   
      component={Intro}
      durationInFrames={120}
      width={1920}
      height={1080}
      fps={60}
      id="intro"
    />
  )
}

export default Compositions;
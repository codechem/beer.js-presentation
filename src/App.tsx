import { Player } from "@remotion/player";
import Scenes, { favoriteBeers } from "./remotion/scenes";

const App = () => {
  return (
    <div>
      <Player
        component={Scenes}
        durationInFrames={120 + favoriteBeers.length * 120}
        compositionWidth={500}
        compositionHeight={500}
        fps={60}
        style={{
          width: 500,
          height: 500,
        }}
        controls
      />
    </div>
  )
}

export default App;

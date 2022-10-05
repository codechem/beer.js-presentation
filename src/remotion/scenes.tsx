import { Series } from "remotion";
import Skopsko from '../assets/skopsko.svg';
import Heineken from '../assets/heineken.svg';
import Corona from '../assets/corona.svg';
import Tuborg from '../assets/tuborg.svg';
import ZlatenDab from '../assets/zlaten-dab.png';
import Intro from "./intro";
import FavoriteBeers from "./favorite-beers";

export const favoriteBeers = [
  {
    name: "Corona",
    image: Corona,
  },
  {
    name: "Heineken",
    image: Heineken,
  },
  {
    name: "Skopsko",
    image: Skopsko
  },
  {
    name: "Tuborg",
    image: Tuborg
  },
  {
    name: "Zlaten Dab",
    image: ZlatenDab,
  }
];


const Scenes = () => {
  return (
    <Series>
      <Series.Sequence durationInFrames={120}>
        <Intro />
      </Series.Sequence>
      {favoriteBeers.map((beer, index) => (
        <Series.Sequence key={beer.name} durationInFrames={120}>
          <FavoriteBeers  {...beer} index={++index} />
        </Series.Sequence>
      ))}
    </Series>
  )
}

export default Scenes;
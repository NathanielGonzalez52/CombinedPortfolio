import Landing from "./Landing";
import Menu from "./Menu";
import Deliver from "./Deliver";
import EmblaCarousel from "./EmblaSlides2";
import Spread from "./Spread";
import Map from "./Map";
import Footer from "./Footer";
import Return from "./Return";


export default function Home() {
  return (
    <>
      <Return />
      <Landing />
      <Deliver />
      <Menu />
      <EmblaCarousel />
      <Spread />
      <Map />
      <Footer />
    </>
  );
}

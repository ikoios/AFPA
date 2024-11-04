import NavBar from "./components/layouts/NavBar";
import Banner from "./components/Banner";
import SectionFirstScroll from "./components/SectionFirstScroll";
import SectionFormHome from "./components/SectionFormHome";
import SectionSecondScroll from "./components/SectionSecondScroll";
import SectionCarousel from "./components/SectionCarousel";
import { slideInElem, slideInElemDelay } from "./components/Animations";
import * as datas from "./datas/Datas"

function App() {
  return (
    <>
      <NavBar />
      <Banner />
      <SectionFirstScroll
        slideInElem={slideInElem}
        slideInElemDelay={slideInElemDelay}
      />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: "100%",
          height: "auto",
          clipPath: "polygon(0 0, 100% 5%, 100% 100%, 0% 100%)",
          backgroundColor: "rgb(239, 239, 238)",
          borderBottomLeftRadius: "100% 500px",
          borderBottomRightRadius: "100% 500px",
        }}
      >
        <SectionFormHome
          slideInElem={slideInElem}
          slideInElemDelay={slideInElemDelay}
        />
        <SectionSecondScroll
          slideInElem={slideInElem}
          slideInElemDelay={slideInElemDelay}
        />
      </div>
      <SectionCarousel items={datas.carousel} visibility={4} />
    </>
  );
}

export default App;

import Banner from "../components/Banner";
import SectionFirstScroll from "../components/SectionFirstScroll";
import SectionFormHome from "../components/SectionFormHome";
import SectionSecondScroll from "../components/SectionSecondScroll";
import SectionCarousel from "../components/SectionCarousel";
import { slideInElem, slideInElemDelay } from "../animations/Animations";
import * as datas from "../datas/Datas";

const Home = () => {
  return (
    <>
      <Banner />
      <SectionFirstScroll
        datas={datas.datasFirstScroll}
        slideInElem={slideInElem}
        slideInElemDelay={slideInElemDelay}
      />
      <div className="divTrapezeApp">
        <SectionFormHome
          datas={datas.datasForm}
          slideInElem={slideInElem}
          slideInElemDelay={slideInElemDelay}
        />
        <SectionSecondScroll
          datas={datas.datasSecondScroll}
          slideInElem={slideInElem}
          slideInElemDelay={slideInElemDelay}
        />
      </div>
      <SectionCarousel items={datas.datasCarousel} />
    </>
  );
};

export default Home;

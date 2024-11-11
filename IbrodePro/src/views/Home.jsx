import Banner from "../components/Banner";
import SectionFirstScroll from "../components/SectionFirstScroll";
import SectionFormHome from "../components/SectionFormHome";
import SectionSecondScroll from "../components/SectionSecondScroll";
import SectionCarousel from "../components/SectionCarousel";
import { slideInElem, slideInElemDelay } from "../animations/Animations";
import * as datas from "../datas/Datas";
import "../css/home.css";

const Home = ({ isMobile }) => {
  return (
    <>
      <Banner />
      <SectionFirstScroll
        isMobile={isMobile}
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
          isMobile={isMobile}
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

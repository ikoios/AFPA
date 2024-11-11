import { BannerEmbroidery } from "../components/BannerEmbroidery";
import SectionFirstScrollEmbroidery from "../components/SectionFirstScrollEmbroidery";
import SectionSecondScrollEmbroidery from "../components/sectionSecondScrollEmbroidery";
import * as datas from "../datas/Datas";
import { slideInElem, slideInElemDelay } from "../animations/Animations";

const Embroidery = ({ isMobile }) => {
  return (
    <>
      <BannerEmbroidery />
      <SectionFirstScrollEmbroidery
        datas={datas.datasFirstScrollEmbroidery}
        slideInElem={slideInElem}
        slideInElemDelay={slideInElemDelay}
      />
      <SectionSecondScrollEmbroidery
        isMobile={isMobile}
        datas={datas.datasSecondScrollEmbroidery}
        slideInElem={slideInElem}
        slideInElemDelay={slideInElemDelay}
      />
    </>
  );
};

export default Embroidery;

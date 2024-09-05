import "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "./Logo";
import Reco from "./Recommendation";

export default function Banner() {
  return (
    <>
      <div className="p-3 border-bottom border-2 border-black d-flex align-items-center flex-wrap justify-content-start">
        <div className="ms-5">
          <Logo />
        </div>
        <div>
          <h1 className="text-black">La maison jungle</h1>
          <div className="d-flex">
            <Reco />
          </div>
        </div>
      </div>
    </>
  );
}

import { Outlet } from "react-router-dom";
import Header from "../../composites/header/Header";
import Footer from "../../composites/footer/Footer";

function LandingPageLayout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer></Footer>
    </div>
  );
}

export default LandingPageLayout;

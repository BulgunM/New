import Carousel from "./components/Carousel";
import ExploreBooks from "./components/ExploreBooks";
import CallAction from "./components/CallAction";
import LibraryServices from "./components/LibraryServices";
import Footer from './layouts/NavigationAndFooter/Footer';

function HomePage() {
  return (
    <div>
      <ExploreBooks/>
      <Carousel />
      <CallAction />
      <LibraryServices />
      <Footer />
    </div>
  );
}

export default HomePage;
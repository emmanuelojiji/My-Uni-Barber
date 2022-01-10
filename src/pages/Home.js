import "./Home.scss";
import MainHeader from "../components/MainHeader";
import ServiceCard from "../components/ServiceCard";
import SearchBar from "../components/SearchBar";
import Barber from "../background.jpg";

const Home = ({ backgroundImage }) => {
  return (
    <>
      <MainHeader />
      <section className="billboard">
        <div className="page-width">
          <h1>Find your next barber with ease</h1>
          <p>Discover barbers near you</p>

          <div className="city-button-container">
            <a className="city-button">Birmingham</a>
            <a className="city-button">Leicester</a>
            <a className="city-button">Nottingham</a>
            <a className="city-button">Coventry</a>
          </div>
        </div>
      </section>

      <section className="featured-section">
        <div className="page-width">
          <h2>Featured</h2>

          <div className="card-row">
            <ServiceCard backgroundImage={Barber} />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

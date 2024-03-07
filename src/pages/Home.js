import React, { useContext } from "react";
import Banner from "../components/Banner";
import Card from "../components/Card";
import Header from "../components/Header";
import { NavLink } from "react-router-dom";
import { AppContext } from "../AppContext";
import Footer from "../components/Footer";

const Home = () => {
  // Importation de contexte (données)
  const data = useContext(AppContext);

  return (
    <div>
      <Header />
      <main>
        <Banner />
        <section>
          <div className="card_container">
            {/* Création de Card + NavLink pour chaque index de données*/}
            {data.map((lodging, index) => (
              <NavLink
                key={index}
                to={`/lodging/${lodging.id}`}
              >
                <Card key={index} lodging={lodging} />
              </NavLink>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;

import React, { useEffect, useState } from "react";
import { HashRouter } from "react-router-dom";
import { AppContext } from "./AppContext";
import RoutesConfig from "./routes/RoutesConfig";
//On importe le fichier JSON
import dataJson from "./data/logements.json";

const App = () => {
  const [data, setData] = useState([]);

  //On charge le fichier JSON dans la variable data
  useEffect(() => {
    const fetchData = async () => {
      setData(dataJson);
    };
    fetchData();
  }, []);

  return (
    // Router configuration
    <HashRouter>
      {/* on met le contenu des logement en contexte pour pouvoir le réutiliser dans les autres composants */}
      <AppContext.Provider value={data}>
        <RoutesConfig />
      </AppContext.Provider>
    </HashRouter>
  );
};

export default App;

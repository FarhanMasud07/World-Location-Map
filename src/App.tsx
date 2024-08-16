import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Product } from "./pages/Product";
import { HomePage } from "./pages/HomePage";
import { Pricing } from "./pages/Pricing";
import { PageNotFound } from "./pages/PageNotFound";
import { Login } from "./pages/Login";
import { AppLayout } from "./pages/AppLayout";
import { CityLists } from "./components/CityList";
import { useEffect, useState } from "react";
import { CountryList } from "./components/CountryList";
import { City } from "./components/City";

const BASE_URL = "http://localhost:9000";

function App() {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const response = await fetch(`${BASE_URL}/cities`);
        const data = await response.json();
        setCities(data);
        setIsLoading(false);
      } catch {
        alert("Error fetching cities");
      } finally {
        setIsLoading(false);
      }
    }

    fetchCities();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="product" element={<Product />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="login" element={<Login />} />
          <Route path="app" element={<AppLayout />}>
            <Route
              index
              element={<CityLists cities={cities} isLoading={isLoading} />}
            />
            <Route
              path="cities"
              element={<CityLists cities={cities} isLoading={isLoading} />}
            />
            <Route path="cities/:id" element={<City />} />
            <Route
              path="countries"
              element={<CountryList cities={cities} isLoading={isLoading} />}
            />
            <Route path="form" element={<p>List of Form</p>} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

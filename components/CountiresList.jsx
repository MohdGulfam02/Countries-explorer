import React, { useContext, useEffect, useState } from "react";
import CountryCard from "./CountryCard.jsx";
import CountriesListShimmer from "./CountriesListShimmer.jsx";
import { ThemeContext } from "../contexts/ThemeContext.js";

export default function CountiresList({ query, region }) {
  const [countriesData, setCountriesData] = useState([]);


  if (region) {
    useEffect(() => {
      fetch(`https://restcountries.com/v3.1/region/${region}`)
        .then((res) => res.json())
        .then((data) => {
          setCountriesData(data);
        });
    }, [region]);
  } else {
    useEffect(() => {
      fetch("https://restcountries.com/v3.1/all")
        .then((res) => res.json())
        .then((data) => {
          setCountriesData(data);
        });
    }, [region]);
  }

  return ( countriesData.length ===0 ? (
    <CountriesListShimmer/>
  ) : (
    <div className="countries-container">
      {countriesData
        .filter((country) => country.name.common.toLowerCase().includes(query))
        .map((country) => {
          return (
            <CountryCard
              key={country.name.common}
              name={country.name.common}
              imageUrl={country.flags.svg}
              population={country.population}
              region={country.region}
              capital={country.capital}
              data={country}
            />
          );
        })}
    </div>
  ))
}

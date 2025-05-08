import React, { useEffect, useState } from "react";
import { Link, useLocation, useOutletContext, useParams } from "react-router";
import CountryDetailShimmer from "./CountryDetailShimmer";

export default function CountryDetail() {
  const [countryData, setCountryData] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const { country } = useParams();
  const { state } = useLocation();
  const [isDark] = useOutletContext();

  function formatCountryData(data) {
    return {
      name: data.name.common,
      nativeName: data.name.nativeName
        ? Object.values(data.name.nativeName)[0].common
        : data.name.common,
      population: data.population.toLocaleString("en-IN"),
      flag: data.flags.svg,
      region: data.region,
      subRegion: data.subregion,
      capital: data.capital ? data.capital.join(", ") : "N/A",
      topLevelDomain: data.tld ? data.tld.join(", ") : "N/A",
      currencies: data.currencies
        ? Object.values(data.currencies).map(c => c.name).join(", ")
        : "N/A",
      languages: data.languages
        ? Object.values(data.languages).join(", ")
        : "N/A",
      borders: [],
    };
  }

  async function fetchBorderCountries(codes) {
    try {
      const results = await Promise.all(
        codes.map(code =>
          fetch(`https://restcountries.com/v3.1/alpha/${code}`)
            .then(res => res.json())
            .then(([data]) => data.name.common)
        )
      );
      return results;
    } catch (err) {
      console.error("Failed to fetch borders:", err);
      return [];
    }
  }

  useEffect(() => {
    async function loadData() {
      let data = null;

      if (state?.props?.data) {
        console.log("Using data from location.state");
        data = state.props.data;
      } else {
        console.log("Fetching from API");
        try {
          const res = await fetch(`https://restcountries.com/v3.1/name/${country}?fullText=true`);
          if (!res.ok) throw new Error("Fetch failed");
          const [fetched] = await res.json();
          data = fetched;
        } catch (err) {
          console.error("Failed to load data", err);
          setNotFound(true);
          return;
        }
      }

      const formatted = formatCountryData(data);
      setCountryData(formatted);

      if (data.borders?.length) {
        const borders = await fetchBorderCountries(data.borders);
        setCountryData(prev => ({ ...prev, borders }));
      }
    }

    loadData();
  }, [country, state]);

  if (notFound) return <h1>Country Not Found</h1>;

  return countryData === null ? (
    <CountryDetailShimmer />
  ) : (
    <main className={`${isDark ? 'dark' : ''}`}>
      <div className="country-details-container">
        <span className="back-button" onClick={() => history.back()}>
          <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
        </span>
        <div className="country-details">
          <img src={countryData.flag} alt={`${countryData.name} flag`} />
          <div className="details-text-container">
            <h1>{countryData.name}</h1>
            <div className="details-text">
              <p><b>Native Name:</b> {countryData.nativeName}</p>
              <p><b>Population:</b> {countryData.population}</p>
              <p><b>Region:</b> {countryData.region}</p>
              <p><b>Sub Region:</b> {countryData.subRegion}</p>
              <p><b>Capital:</b> {countryData.capital}</p>
              <p><b>Top Level Domain:</b> {countryData.topLevelDomain}</p>
              <p><b>Currencies:</b> {countryData.currencies}</p>
              <p><b>Languages:</b> {countryData.languages}</p>
            </div>
            {countryData.borders.length > 0 && (
              <div className="border-countries">
                <b>Border Countries: &nbsp;</b>
                {countryData.borders.map((border, i) => (
                  <Link key={i} to={`/${border}`}>{border}</Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

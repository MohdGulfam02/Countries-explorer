import React, { useState} from "react";
import SearchBar from "./SearchBar";
import SelectMenu from "./SelectMenu";
import CountiresList from "./CountiresList";
import { useState } from "react";
import { useTheme } from "../hooks/useTheme";

export default function Home() {
  const [query, setQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [isDark, setIsDark] = useTheme();

  const handleChange = (value) => {
    setSelectedRegion(value); // Get value from child
  };

  return (
    <main className={`${isDark ? 'dark' : ''}`}>
      <div className="search-filter-container">
        <SearchBar setQuery={setQuery} />
        <SelectMenu onSelectChange={handleChange}/>
      </div>
      <CountiresList query={query} region={selectedRegion} />
    </main>
  );
}

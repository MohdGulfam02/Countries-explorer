import React from "react";
import { Link } from "react-router";

export default function CountryCard(props) {

  return (
    <Link className="country-card" to={`/${props.name}`} state={{props}}>
      <img src={props.imageUrl} alt={` ${props.name} flag`} />
      <div className="card-text">
        <h3 className="card-title">{props.name}</h3>
        <p>
          <b>Population: </b>
          {props.population.toLocaleString("en-IN")}
        </p>
        <p>
          <b>Region: </b>
          {props.region}
        </p>
        <p>
          <b>Capital: </b>
          {props.capital?.[0]}
        </p>
      </div>
    </Link>
  );
}

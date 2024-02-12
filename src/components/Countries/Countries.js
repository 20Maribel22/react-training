import React from "react";
import "./Countries.css";

function Countries({ countries, loading }) {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div className="container mt-5">
      <h1 className="text-primary">Countries</h1>
      <ul className="list-group mb-2">
        {countries.map((country, i) => (
          <React.Fragment key={i}>
            <li className="list-group-item">
              {/* {console.log(country.name
)} */}
              {console.log(country)}
              {country.name.common}
              <img
                src={country.flags.svg}
                alt={country.flags.alt}
                className="ml-2"
                style={{ width: 25 }}
              />
              {/* <p className="ml-1">{country.flags.alt}</p> */}
            </li>
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
}

export default Countries;

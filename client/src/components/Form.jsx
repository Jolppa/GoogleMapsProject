import React from "react";
import { useState } from "react";

const Form = () => {
  const [address, setAddress] = useState("");
  const [radius, setRadius] = useState(null);
  const [businessType, setBusinessType] = useState("restaurant");

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (event, setFunc) => {
    // setUserInput(event.target.value);
    setFunc(event.target.value);
  };

  const color = (rating) => {
    if (rating >= 4) {
      return "green";
    } else if (rating < 4) {
      return "yellow";
    } else {
      return "red";
    }
  };

  const color_open = (open_now) => {
    if (open_now) {
      return "green";
    } else
      return "red";
  };



  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    console.log(JSON.stringify({ address, radius, businessType }));
    let data = await fetch("http://localhost:5000/api/scraper", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ address, radius, businessType }),
    });
    data = await data.json();

    setLoading(false);
    data.success ? setData(data.data) : setError(data.error);

    console.log(data);
  };
  return (
    <div className="form">
      <div className="title">Google Maps Scraper</div>
      <div className="subtitle">Start searching places!</div>
    <form onSubmit={(e) => handleSubmit(e)}>
        <div className="input-container">
          <input id="address" className="input" type="text" placeholder=" " onChange={(e) => handleChange(e, setAddress)}/>
          <label htmlFor="address" className="placeholder"><strong>Enter an address: </strong></label>
        {/* <input type="text" /> */}
    </div>
        <div className="input-container">
          <input id="radius" className="input" type="text" placeholder=" " onChange={(e) => handleChange(e, setRadius)} />
          <label htmlFor="radius" className="placeholder"><strong>Radius in meters (1000): </strong></label>
        {/* <input type="text" /> */}
    </div>


        <div className="input-container"> 
          <select name="businessType" id="business" className="input" onChange={(e) => handleChange(e, setBusinessType)}>
            <option value="restaurant">Restaurant</option>
            <option value="bar">Bar</option>
            <option value="cafe">Cafe</option>
            <option value="atm">ATM</option>
            <option value="gym">Gym</option>
            <option value="church">Church</option>
            <option value="zoo">Zoo</option>
            <option value="plumber">Plumber</option>
            <option value="parking">Parking</option>
            <option value="airport">Airport</option>
          </select>

         {/* <input id="business" className="input" type="text" placeholder=" " onChange={(e) => handleChange(e, setBusinessType)} /> */}

          <label htmlFor="business" className="placeholder"><strong>Enter a type of business: </strong></label>
        {/* <input type="text" /> */}
    </div>


        <button type="submit" className="button"><strong>Submit</strong></button>
      </form>

      {loading && <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>}

      {data.length > 0 && (
        <ul class="ul">
          {data.map((item) => (
            <li key={item.name}>
              <h3 className="panel_header">{item.name}</h3>
              <p3>{item.address}</p3>
              <p>{`Distance: ${item.distance.value} ${item.distance.unit === "m" ? "meters" : "kilometers"} `}</p>

              <p style={{ color: color(item.rating) }}>
                {isNaN(item.rating) ? item.rating : `Rated ${item.rating} `}
              </p>
              <p style={{ color: color_open(item.open_now) }}>{item.open_now ? "Open" : "Closed"}</p>
              <br></br>
            </li>
          ))}
        </ul>
      )}

      {data.length === 0 && (
        <div className="input-container"> 
          <h3 className="panel_header">No results found.</h3>
        </div>
      )}
      {error && <div>{error}</div>}
    </div>
  );
};

export default Form;


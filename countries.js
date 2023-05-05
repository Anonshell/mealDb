const loadCountries = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => displayCountries(data));
};

const displayCountries = (countries) => {
  const countriesContainer = document.getElementById("all-countries");

  console.log(countries);

  countries.forEach((country) => {
    console.log(country.cca2);

    const countryDiv = document.createElement("div");

    countryDiv.classList.add("country");

    countryDiv.innerHTML = ` 
      <h3>Name:${country.name.common} </h3>
      <p>Capital: ${country.capital ? country.capital : "No capital"} </p>
     
     <button onClick="displayCountryDetails('${country.cca2}')">Details</button>
     `;

    countriesContainer.appendChild(countryDiv);
  });
};

const displayCountryDetails = (code) => {
 
  //https://restcountries.com/v3.1/alpha/{code}

  const url = 'https://restcountries.com/v3.1/alpha/{code}'
    

  console.log('comming soon' , code);
};

loadCountries();

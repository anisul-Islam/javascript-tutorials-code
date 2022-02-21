// Web storage API - allows us to store & read data in browser
// Web storage API - localStorage, sessionStorage

// localStorage - store, read, update and remove data
// no expiry date: data never gets lost even if you close the browser

// localStorage store data as key value pair - string

// setItem(key, value)
// localStorage.setItem("userName", "anisul islam");
// localStorage.setItem("password", "0123456789");

// getItem(key)
// const userName = localStorage.getItem("userName");
// const userPassword = localStorage.getItem("password");
// console.log(userName, userPassword);

// removeItem(key)
// localStorage.removeItem("userName");
// localStorage.removeItem("password");

// setItem(key, value)
// const countries = ["Australia", "Bangladesh", "Nepal"];
// localStorage.setItem("countries", JSON.stringify(countries));

// // getItem(key)
// const countriesList = JSON.parse(localStorage.getItem("countries"));
// console.log(countriesList);

// localStorage.clear();

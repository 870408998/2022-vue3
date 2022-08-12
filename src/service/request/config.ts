let BASE_URL = "";
let TIME_OUT = 10000;
BASE_URL = "/api";

// if (process.env.NODE_ENV === "development") {
//   BASE_URL = "/api";
// } else if (process.env.NODE_ENV === "production") {
//   BASE_URL = "http://123.207.32.32:8000/prod";
// } else {
//   BASE_URL = "http://123.207.32.32:8000/test";
// }
console.log("BASE_URL", BASE_URL);
export { BASE_URL, TIME_OUT };

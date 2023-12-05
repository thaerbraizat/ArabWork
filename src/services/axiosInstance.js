import axios from "axios";

const CONTENT_TYPE = "application/json";

const client = axios.create({
  baseURL: "https://randomuser.me/",
  timeout: 6000,
  responseType: "json",
  headers: {
    accept: "*/*",
    "content-type": CONTENT_TYPE,
  },
});

client.interceptors.response.use(
  (response) => response,
  (error) => {
   console.log('✅ test    ', error)
  }
);


export default client;
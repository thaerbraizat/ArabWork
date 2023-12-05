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

export default client;
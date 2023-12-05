import client from "./axiosInstance";

const getData = {
  get: async() => {
    try {
      const response = await client.get("/api");
       return response;
    } catch (e) {
     return e.message
    }
  },
};
export default getData;
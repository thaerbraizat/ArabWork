import client from "./axiosInstance";

const danial = {
  get: async() => {
    try {
      const response = await client.get("/api");
       return response;
    } catch (e) {
      console.log("e upload", e);
    }
  },
};

export default danial;
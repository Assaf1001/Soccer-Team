import axios from "axios";

const baseURL = process.env.REACT_APP_BASE_URL;
const apiKey = process.env.REACT_APP_API_KEY;

const axiosInstance = axios.create({
  baseURL,
  headers: {
    "X-Auth-Token": apiKey,
  },
});

export const getTeams = async () => {
  try {
    const { data } = await axiosInstance.get("/v2/teams");

    if (data) {
      return data.teams.map(({ id, crestUrl, name, founded }) => ({
        id,
        crestUrl,
        name,
        founded,
      }));
    }
    throw new Error("Falied to load data, please refresh the page");
  } catch (err) {
    throw new Error("Cannot connect to the server, please refresh the page");
  }
};

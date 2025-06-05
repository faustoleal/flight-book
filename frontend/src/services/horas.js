import axios from "axios";

const baseUrl = "/api/horas";

let token = null;

const setToken = (newToken) => {
  token = `Bearer ${newToken}`;
};

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const create = async (horas) => {
  const config = {
    headers: { Authorization: token },
  };
  const response = await axios.post(baseUrl, horas, config);
  return response.data;
};

export default { getAll, create, setToken };

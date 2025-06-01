import axios from "axios";

const baseUrl = "/api/horas";

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const create = async (horas) => {
  const response = await axios.post(baseUrl, horas);
  return response.data;
};

export default { getAll, create };

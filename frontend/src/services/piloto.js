import axios from "axios";

const baseUrl = "/api/piloto";

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const create = async (piloto) => {
  const response = await axios.post(baseUrl, piloto);
  return response.data;
};

export default { getAll, create };

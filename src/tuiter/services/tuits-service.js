import axios from "axios";

const TUITS_URL = "http://localhost:4000/tuits";

export const findTuits = async () => {
  const response = await axios.get(TUITS_URL);
  const tuits = response.data;
  console.log(tuits);
  return tuits;
};

export const createTuit = async (tuit) => {
  const response = await axios.post(TUITS_URL, tuit);
  const newTuit = response.data;
  return newTuit;
};

export const deleteTuit = async (tid) => {
  const response = await axios.delete(`${TUITS_URL}/${tid}`);
  return tid;
};

export const updateTuit = async;

export const findTuitById = () => {};

import { createAsyncThunk } from "@reduxjs/toolkit";
import { createTuit, deleteTuit, findTuits } from "./tuits-service";

export const findTuitsThunk = createAsyncThunk("findTuitsThunk", () => {
  findTuits();
});
export const findTuitsByIdThun = () => {};
export const createTuitThunk = createAsyncThunk("creatTuitThunk", (tuit) => {
  createTuit(tuit);
});
export const deleteTuitThunk = createAsyncThunk("deleteTuitThunk", (tid) => {
  deleteTuit(tid);
});
/// TODO ...

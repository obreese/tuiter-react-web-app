import { createSlice } from "@reduxjs/toolkit";
import {
  deleteTuitThunk,
  findTuitsThunk,
  createTuitThunk,
} from "../services/tuits-thunks";
import tuits from "./tuits.json";

const currentUser = {
  userName: "NASA",
  handle: "@nasa",
  image: "nasa_logo.png",
};

const templateTuit = {
  ...currentUser,
  topic: "Space",
  time: "2h",
  liked: false,
  replies: 0,
  retuits: 0,
  likes: 0,
};

const tuitsSlice = createSlice({
  name: "tuits",
  initialState: [],
  extraReducers: {
    [findTuitsThunk.pending]: (state, action) => {
      state.loading = true;
      state.tuits = [];
    },
    [findTuitsThunk.fulfilled]: (state, action) => {
      state.loading = false;
      state.tuits = action.payload;
    },
    [findTuitsThunk.rejected]: (state, action) => {},
    [deleteTuitThunk.pending]: (state, action) => {
      state.loading = true;
      state.tuits = [];
    },
    [deleteTuitThunk.fulfilled]: (state, action) => {
      const index = state.tuits.findIndex(
        (tuit) => tuit._id === action.payload
      );
      state.splice(index, 1);
    },
    [deleteTuitThunk.rejected]: (state, action) => {},
    [createTuitThunk.pending]: (state, action) => {
      state.loading = true;
      state.tuits = [];
    },
    [createTuitThunk.fulfilled]: (state, action) => {
      const index = state.tuits.findIndex(
        // todo
        (tuit) => tuit._id === action.payload
      );
      state.splice(index, 1);
    },
    [createTuitThunk.rejected]: (state, action) => {},
  },
  reducers: {
    createTuit(state, action) {
      state.unshift({
        ...action.payload,
        ...templateTuit,
        _id: new Date().getTime(),
      });
    },
    deleteTuit(state, action) {
      const index = state.findIndex((tuit) => tuit._id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const { createTuit, deleteTuit } = tuitsSlice.actions;
export default tuitsSlice.reducer;

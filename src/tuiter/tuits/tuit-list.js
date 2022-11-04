import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import TuitItem from "./tuit-item";
import { findTuitsThunk } from "../services/tuits-thunks";

const TuitList = () => {
  const tuitsArray = useSelector((state) => state.tuits.tuits);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(findTuitsThunk());
  }, []);

  return (
    <ul className="list-group">
      {loading ? (
        <li className="list-group-item">Loading</li>
      ) : (
        tuitsArray.map((tuit) => <TuitItem key={tuit._id} tuit={tuit} />)
      )}
    </ul>
  );
};
export default TuitList;

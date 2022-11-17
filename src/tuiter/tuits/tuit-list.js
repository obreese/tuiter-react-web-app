import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import TuitItem from "./tuit-item";
import { findTuitsThunk } from "../../services/tuits-thunks";

const TuitList = () => {
  const tuitsArray = useSelector((state) => state.tuits.tuits);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(findTuitsThunk());
  }, [dispatch]);

  return (
    <ul className="list-group">
      {tuitsArray.map((tuit) => (
        <TuitItem key={tuit._id} tuit={tuit} />
      ))}
    </ul>
  );
};
export default TuitList;

import React from "react";
import { X } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import { deleteTuitThunk } from "../../services/tuits-thunks";
import TuitStats from "./tuit-stats";

const TuitItem = ({ tuit }) => {
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuitThunk(id));
  };

  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-2">
          <img
            alt=""
            width={70}
            className="float-end rounded-3"
            src={`/images/${tuit.image}`}
          />
        </div>
        <div className="col-10">
          <X
            className="float-end"
            onClick={() => deleteTuitHandler(tuit._id)}
          />
          <div>
            {tuit.username} . {tuit.time}
          </div>
          <div>{tuit.tuit}</div>
        </div>
      </div>
      <TuitStats tuit={tuit} />
    </li>
  );
};
export default TuitItem;

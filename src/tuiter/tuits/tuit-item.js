import React from "react";
import {
  Heart,
  HeartFill,
  Chat,
  ArrowClockwise,
  Share,
  X,
} from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import { deleteTuit } from "./tuits-reducer";

const TuitItem = ({ tuit }) => {
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuit(id));
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
            {tuit.userName} . {tuit.time}
          </div>
          <div>{tuit.tuit}</div>
        </div>
      </div>
      <div className="row">
        <Chat className="col-1" />
        <p className="col-1">{tuit.replies}</p>
        <ArrowClockwise className="col-1" />
        <p className="col-1">{tuit.retuits}</p>
        {tuit.liked ? (
          <HeartFill className="col-1 wd-color-red" />
        ) : (
          <Heart className="col-1" />
        )}

        <p className="col-1">{tuit.likes}</p>
        <Share className="col-1" />
        <p className="col-1">{tuit.likes}</p>
      </div>
    </li>
  );
};
export default TuitItem;

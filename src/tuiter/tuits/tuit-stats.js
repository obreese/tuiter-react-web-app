import React from "react";
import {
  Heart,
  HeartFill,
  Chat,
  ArrowClockwise,
  Share,
  HandThumbsDown,
  HandThumbsDownFill,
} from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import { updateTuitThunk } from "../../services/tuits-thunks";

const TuitStats = ({ tuit }) => {
  const dispatch = useDispatch();
  return (
    <div className="row">
      <Chat className="col-1" />
      <p className="col-1">{tuit.replies}</p>
      <ArrowClockwise className="col-1" />
      <p className="col-1">{tuit.retuits}</p>
      <i
        className="col-1"
        onClick={() =>
          dispatch(
            updateTuitThunk({
              ...tuit,
              likes: tuit.liked ? tuit.likes - 1 : tuit.likes + 1,
              liked: !tuit.liked,
            })
          )
        }
      >
        {tuit.liked ? <HeartFill className="wd-color-red" /> : <Heart />}
      </i>
      <p className="col-1">{tuit.likes}</p>
      <i
        className="col-1"
        onClick={() =>
          dispatch(
            updateTuitThunk({
              ...tuit,
              dislikes: tuit.disliked ? tuit.dislikes - 1 : tuit.dislikes + 1,
              disliked: !tuit.disliked,
            })
          )
        }
      >
        {tuit.disliked ? <HandThumbsDownFill /> : <HandThumbsDown />}
      </i>
      <p className="col-1">{tuit.dislikes}</p>
      <Share className="col-1" />
    </div>
  );
};
export default TuitStats;

import React, { useState } from "react";
import {
  CardImage,
  FiletypeGif,
  BarChart,
  EmojiSmile,
  GeoAlt,
} from "react-bootstrap-icons";
import { createTuit } from "../tuits/tuits-reducer";
import { useDispatch } from "react-redux";

const WhatsHappening = () => {
  let [whatsHappening, setWhatsHappening] = useState("");
  const dispatch = useDispatch();
  const tuitClickHandler = () => {
    const newTuit = {
      tuit: whatsHappening,
    };
    dispatch(createTuit(newTuit));
  };

  return (
    <div className="row">
      <div className="col-auto">
        <img src="/images/nasa_logo.png" width={60} />
      </div>
      <div className="col-10">
        <textarea
          value={whatsHappening}
          placeholder="What's happening?"
          className="form-control border-0"
          onChange={(event) => setWhatsHappening(event.target.value)}
        ></textarea>
        <div>
          <button
            className="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold"
            onClick={tuitClickHandler}
          >
            Tuit
          </button>
          <div className="text-primary fs-2">
            <CardImage className="me-3" />
            <FiletypeGif className="me-3" />
            <BarChart className="me-3" />
            <EmojiSmile className="me-3" />
            <GeoAlt className="me-3" />
          </div>
        </div>
      </div>
      <div className="col-12">
        <hr />
      </div>
    </div>
  );
};
export default WhatsHappening;

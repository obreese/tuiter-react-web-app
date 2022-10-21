import React from "react";
import PostSummaryList from "../post-summary-list";
import "./index.css";
const ExploreComponent = () => {
  return (
    <>
      <div className="row">
        <div className="col-11 position-relative">
          <input
            placeholder="Search Tuiter"
            className="form-control rounded-pill ps-5"
          />
          <i class="position-absolute wd-nudge-up text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </i>
        </div>
        <div class="col-1">
          <a href="#">
            <i class="float-end text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                fill="currentColor"
                class="bi bi-gear-fill"
                viewBox="0 0 16 16"
              >
                <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
              </svg>
            </i>
          </a>
        </div>
      </div>
      <ul className="nav nav-pills my-2">
        <li className="nav-item">
          <a href="#" className="nav-link active">
            For You
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            Trending
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            News
          </a>
        </li>
      </ul>
      <div className="position-relative mb-2">
        <img src="/images/spacex_starship.jfif" className="w-100" />
        <h1 className="position-absolute wd-nudge-up text-white">
          SpaceX Starship
        </h1>
      </div>
      <PostSummaryList />
    </>
  );
};
export default ExploreComponent;

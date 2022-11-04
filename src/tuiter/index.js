import React from "react";
import ExploreComponent from "./explore";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
import whoReducer from "./reducers/who-reducer";
import { Routes, Route } from "react-router";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import tuitsReducer from "./tuits/tuits-reducer";
import Home from "./home";
import "./index.css";

const store = configureStore({
  reducer: { who: whoReducer, tuits: tuitsReducer },
});

function Tuiter() {
  return (
    <div>
      <Provider store={store}>
        <Routes>
          <Route
            index
            element={
              <div className="row mt-2">
                <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                  <NavigationSidebar active="home" />
                </div>
                <div
                  className="col-10 col-md-10 col-lg-7 col-xl-6"
                  style={{ position: "relative" }}
                >
                  <Home />
                </div>
                <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                  <WhoToFollowList />
                </div>
              </div>
            }
          />
          <Route path="home" element={<ExploreComponent />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default Tuiter;

/* eslint-env jquery */

import ExploreComponent from "../ExploreScreen/ExploreComponent.js";
import NavigationSidebar from "../NavigationSidebar/index.js";
import WhoToFollowList from "../WhoToFollowList/WhoToFollowList.js";

function exploreComponent() {
  $("#wd-explore").append(`
      <div class="row mt-2">
        <div class="d-none d-sm-inline col-sm-2 col-lg-1 col-xl-2">
          ${NavigationSidebar()}
        </div>
        <div class="col-sm-10 col-lg-7 col-xl-6">
          ${ExploreComponent()}
        </div>
      <div class="d-none d-lg-inline col-lg-4 ">
        ${WhoToFollowList()}
      </div>
   `);
}
$(exploreComponent);

/* eslint-env jquery */

import NavigationSidebar from "../NavigationSidebar/index.js";
import ExploreComponent from "../ExploreScreen/ExploreComponent.js";
import WhoToFollowList from "../WhoToFollowList/WhoToFollowList.js";

function exploreScreen() {
  $("#wd-explore-screen").append(`
   <div class="row mt-2">
     <div class="d-none d-sm-inline col-sm-2 col-lg-1 col-xl-2">
       ${NavigationSidebar("explore")}
     </div>
     <div class="col-sm-10 col-lg-7 col-xl-6">
       ${ExploreComponent()}
     </div>
     <div class="d-none d-lg-inline col-lg-4 ">
       ${WhoToFollowList()}
     </div>
   </div>
`);
}
$(exploreScreen);

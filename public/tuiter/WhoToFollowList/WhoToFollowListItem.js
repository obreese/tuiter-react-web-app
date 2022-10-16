const WhoToFollowListItem = (who) => {
  return `
  <li class="list-group-item">
  <div class="row">
    <div class="col-3 col-lg-2">
      <img
        src=${who.avatarIcon}
        class="rounded-circle"
        width="50px"
        height="50px"
      />
    </div>
    <div class="col-6 col-lg-7 wd-z1">
      <div class="fw-bold text-nowrap">${who.userName}</div>
      <div class="text-nowrap">${who.handle}</div>
    </div>
    <div class="col-3">
      <button class="btn btn-primary rounded-pill float-end">
        Follow
      </button>
    </div>
  </div>
</li>
  `;
};
export default WhoToFollowListItem;

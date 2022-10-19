const PostSummaryItem = (post) => {
  return `
  <li class="list-group-item">
    <div class="row">
      <div class="col-8 col-md-9">
        <div class="text-secondary">${post.topic}</div>
        <div class="fw-bold">${post.userName}
        <span class="fw-normal text-secondary"> - ${post.time}</span>
        </div>
        <div class="fw-bold">${post.title}</div>
        ${
          post.tuits
            ? `<div class="text-secondary">${post.tuits} Tuits</div>`
            : ""
        }
      </div>
      <div class="col-3">
        <img src=${post.image} width="100" height="100"/>
      </div>
    </div>
  </li>
  `;
};
export default PostSummaryItem;

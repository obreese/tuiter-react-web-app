import PostSummaryItem from "./PostSummaryItem.js";
import posts from "./posts.js";

const PostSummaryList = () => {
  return `
  <ul class="list-group">
  ${posts
    .map((each) => {
      return PostSummaryItem(each);
    })
    .join("")}
  </ul>
  `;
};
export default PostSummaryList;

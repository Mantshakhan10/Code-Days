import { useParams } from "react-router-dom";

function PostDetail() {
  const { postId } = useParams();

  return (
    <div>
      <h2>Post Detail</h2>
      <p>Showing details for Post ID: {postId}</p>
    </div>
  );
}

export default PostDetail;

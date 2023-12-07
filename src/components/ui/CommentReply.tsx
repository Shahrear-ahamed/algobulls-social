import { IComment } from "../../interface";

export default function CommentReply({ comment }: { comment: IComment }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        marginBottom: "10px",
        backgroundColor: "#f5f5f5",
        borderRadius: "20px",
        padding: "10px",
      }}>
      <div>
        <img
          src={
            comment?.userId?.avatar
              ? comment?.userId?.avatar
              : "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          }
          alt="avatar"
          style={{
            width: "30px",
            height: "30px",
            borderRadius: "50%",
            marginRight: "20px",
            border: "1px solid gray",
            imageRendering: "auto",
            borderImageRepeat: "stretch",
          }}
        />
      </div>
      <div>
        <p>
          <strong>
            {comment?.userId?.name ? comment?.userId?.name : "User"}
          </strong>
        </p>
        <p>{comment?.body}</p>
      </div>
    </div>
  );
}

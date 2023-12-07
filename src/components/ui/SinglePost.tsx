import { Avatar, Card, Skeleton } from "antd";
import {
  BookOutlined,
  LikeOutlined,
  CommentOutlined,
  LikeFilled,
  BookFilled,
} from "@ant-design/icons";
import { IPost } from "../../interface";
import instance from "../../utils/axios";
import { useState } from "react";
import ModalBox from "./Modal";

const { Meta } = Card;

const userImg = "https://xsgames.co/randomusers/avatar.php?g=pixel&key=2";

export default function SinglePost({
  post,
  loading,
}: {
  post: IPost;
  loading: boolean;
}) {
  const [open, setOpen] = useState(false);

  const handleLike = async () => {
    const res = await instance.post(`/posts/${post.id}/like`, null, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    console.log(res);
  };

  const handleComment = () => {
    setOpen(true);
  };

  const handleBookmark = async () => {
    const res = await instance.put(`/auth/bookmark/${post.id}`, null, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    console.log(res);
  };

  return (
    <>
      <Card
        style={{ marginTop: 16 }}
        actions={[
          <div onClick={handleLike}>
            {post.isLiked ? (
              <LikeFilled key="react" />
            ) : (
              <LikeOutlined key="react" />
            )}
          </div>,
          <CommentOutlined onClick={handleComment} key="comment" />,
          <div onClick={handleBookmark}>
            {post.isBookmarked ? (
              <BookFilled key="bookmark" />
            ) : (
              <BookOutlined key="bookmark" />
            )}
          </div>,
        ]}>
        <Skeleton loading={loading} avatar active>
          <Meta
            avatar={
              <Avatar
                src={post.author?.avatar ? post.author?.avatar : userImg}
              />
            }
            title={post.author?.name ? post.author?.name : "User"}
            description={post.body}
          />
        </Skeleton>
      </Card>
      <ModalBox id={post.id} open={open} setOpen={setOpen} />
    </>
  );
}

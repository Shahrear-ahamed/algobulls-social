import { useEffect, useState } from "react";
import CreatePost from "../ui/CreatePost";
import instance from "../../utils/axios";
import { IPost } from "../../interface";
import { Avatar, Card, Skeleton } from "antd";
import {
  BookOutlined,
  LikeOutlined,
  CommentOutlined,
  LikeFilled,
} from "@ant-design/icons";

const { Meta } = Card;

const userImg = "https://xsgames.co/randomusers/avatar.php?g=pixel&key=2";

export default function HomeView() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    setLoading(true);
    const fetchPosts = async () => {
      const res = await instance.get("/posts");
      setPosts(res.data.data);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  return (
    <>
      <div>
        <CreatePost />
      </div>
      <div>
        {posts.map((post: IPost) => {
          return (
            <div key={post.id}>
              <Card
                style={{ marginTop: 16 }}
                actions={[
                  <LikeOutlined key="react" />,
                  <LikeFilled key="react" />,
                  <CommentOutlined key="comment" />,
                  <BookOutlined key="bookmark" />,
                ]}>
                <Skeleton loading={loading} avatar active>
                  <Meta
                    avatar={
                      <Avatar
                        src={post.author.avatar ? post.author.avatar : userImg}
                      />
                    }
                    title={post.author.name ? post.author.name : "User"}
                    description={post.body}
                  />
                </Skeleton>
              </Card>
            </div>
          );
        })}
      </div>
    </>
  );
}

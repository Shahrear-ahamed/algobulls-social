import { useEffect, useState } from "react";
import CreatePost from "../ui/CreatePost";
import instance from "../../utils/axios";
import { IPost } from "../../interface";
import SinglePost from "../ui/SinglePost";

export default function HomeView() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    setLoading(true);
    const fetchPosts = async () => {
      const res = await instance.get("/posts", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setPosts(res.data.data);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  console.log(posts)

  return (
    <>
      <div>
        <CreatePost />
      </div>
      <div>
        {posts.map((post: IPost) => {
          return (
            <div key={post.id}>
              <SinglePost post={post} loading={loading} />
            </div>
          );
        })}
      </div>
    </>
  );
}

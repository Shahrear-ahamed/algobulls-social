import { useEffect, useState } from "react";
import { IPost } from "../../interface";
import instance from "../../utils/axios";
import SinglePost from "../ui/SinglePost";

export default function BookmarkView() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    setLoading(true);
    const fetchPosts = async () => {
      const res = await instance.get("/posts/my-bookmarked-posts", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      console.log(res.data);

      setPosts(res.data.data);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  console.log(posts);

  return (
    <div>
      {posts.map((post: IPost) => {
        return (
          <div key={post.id}>
            <SinglePost post={post} loading={loading} />
          </div>
        );
      })}
    </div>
  );
}
